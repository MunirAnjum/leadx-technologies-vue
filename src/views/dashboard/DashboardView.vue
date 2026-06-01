<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-white text-brand-dark font-sans pb-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div class="flex flex-col gap-2">
          <span class="inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
            Admin Dashboard
          </span>
          <h1 class="font-display text-3xl sm:text-4xl font-bold tracking-tight">Contact Submissions</h1>
          <p class="text-brand-gray text-sm">
            Signed in as <strong>{{ user?.email }}</strong>
          </p>
        </div>
        <div class="flex items-center gap-3">
          <button
            @click="load"
            class="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand-dark px-4 py-2 rounded-full text-sm font-semibold hover:border-brand-red hover:text-brand-red transition"
          >
            Refresh
          </button>
          <button
            @click="logout"
            class="inline-flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
      <!-- Stat cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div class="p-6 rounded-2xl bg-brand-light border border-brand-light">
          <p class="text-xs uppercase tracking-wider text-brand-gray font-semibold">Total</p>
          <p class="font-display text-3xl font-bold mt-2">{{ contacts.length }}</p>
        </div>
        <div class="p-6 rounded-2xl bg-brand-light border border-brand-light">
          <p class="text-xs uppercase tracking-wider text-brand-gray font-semibold">Showing</p>
          <p class="font-display text-3xl font-bold mt-2">{{ filtered.length }}</p>
        </div>
        <div class="p-6 rounded-2xl bg-brand-light border border-brand-light">
          <p class="text-xs uppercase tracking-wider text-brand-gray font-semibold">Latest</p>
          <p class="font-display text-sm font-semibold mt-2 truncate">
            {{ latest ? formatDate(latest.createdAt) : '—' }}
          </p>
        </div>
      </div>
      <!-- Search -->
      <div class="mb-6">
        <input
          v-model="search"
          type="search"
          placeholder="Search by name, email, or message…"
          class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition"
        />
      </div>
      <!-- States -->
      <div v-if="loading" class="p-10 text-center text-brand-gray">Loading contacts…</div>
      <div v-else-if="error" class="p-6 rounded-2xl bg-brand-red/10 text-brand-red text-sm">
        {{ error }}
        <p class="text-brand-gray text-xs mt-2">
          Make sure the .NET API is running at <code>{{ apiBase }}</code> and CORS allows this origin.
        </p>
      </div>
      <div v-else-if="filtered.length === 0" class="p-10 text-center text-brand-gray rounded-2xl bg-brand-light border border-brand-light">
        No contact submissions found.
      </div>
      <!-- Table -->
      <div v-else class="overflow-x-auto rounded-2xl border border-gray-200">
        <table class="min-w-full text-sm">
          <thead class="bg-brand-light">
            <tr class="text-left text-xs uppercase tracking-wider text-brand-gray">
              <th class="px-4 py-3 font-semibold">Name</th>
              <th class="px-4 py-3 font-semibold">Email</th>
              <th class="px-4 py-3 font-semibold">Subject</th>
              <th class="px-4 py-3 font-semibold">Message</th>
              <th class="px-4 py-3 font-semibold">Date</th>
              <th class="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 bg-white">
            <tr v-for="c in filtered" :key="c.id" class="hover:bg-brand-light/50 transition">
              <td class="px-4 py-3 font-semibold">{{ c.name }}</td>
              <td class="px-4 py-3">
                <a :href="`mailto:${c.email}`" class="text-brand-red hover:underline">{{ c.email }}</a>
              </td>
              <td class="px-4 py-3 text-brand-gray">{{ c.subject || '—' }}</td>
              <td class="px-4 py-3 text-brand-gray max-w-xs truncate" :title="c.message">{{ c.message }}</td>
              <td class="px-4 py-3 text-brand-gray whitespace-nowrap">{{ formatDate(c.createdAt) }}</td>
              <td class="px-4 py-3 text-right">
                <button
                  @click="remove(c)"
                  class="inline-flex items-center gap-1 text-xs font-semibold text-brand-red hover:text-red-700 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { api, auth, API_BASE_URL, type Contact } from '@/utils/apiClient';
const router = useRouter();
const apiBase = API_BASE_URL;
const contacts = ref<Contact[]>([]);
const loading = ref(false);
const error = ref('');
const search = ref('');
const user = ref(auth.getUser());
const filtered = computed(() => {
  const q = search.value.trim().toLowerCase();
  if (!q) return contacts.value;
  return contacts.value.filter(c =>
    [c.name, c.email, c.subject, c.message].filter(Boolean).some(v => String(v).toLowerCase().includes(q))
  );
});
const latest = computed(() =>
  [...contacts.value].sort((a, b) => {
    const ta = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const tb = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return tb - ta;
  })[0]
);
function formatDate(d?: string) {
  if (!d) return '—';
  const date = new Date(d);
  return isNaN(date.getTime()) ? d : date.toLocaleString();
}
async function load() {
  loading.value = true;
  error.value = '';
  try {
    contacts.value = await api.listContacts();
  } catch (e: any) {
    if (e?.message === 'Unauthorized') {
      router.push('/login');
      return;
    }
    error.value = e?.message || 'Failed to load contacts';
    // Fallback dummy data so the UI is still browsable in dev.
    contacts.value = [
      { id: 1, name: 'Jane Cooper', email: '[email protected]', subject: 'Cloud migration', message: 'Looking to migrate our legacy CRM to Azure.', createdAt: new Date().toISOString() },
      { id: 2, name: 'Marcus Liu', email: '[email protected]', subject: 'Custom development', message: 'Need a quote for a Vue + .NET portal.', createdAt: new Date(Date.now() - 86400000).toISOString() },
      { id: 3, name: 'Priya Shah', email: '[email protected]', subject: 'Salesforce', message: 'Integration with our ERP system.', createdAt: new Date(Date.now() - 3 * 86400000).toISOString() }
    ];
  } finally {
    loading.value = false;
  }
}
async function remove(c: Contact) {
  if (!confirm(`Delete contact from ${c.name}?`)) return;
  try {
    await api.deleteContact(c.id);
    contacts.value = contacts.value.filter(x => x.id !== c.id);
  } catch (e: any) {
    alert(e?.message || 'Delete failed');
  }
}
function logout() {
  auth.logout();
  router.push('/login');
}
onMounted(load);
</script>
