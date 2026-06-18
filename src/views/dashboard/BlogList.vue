<template>
  <div class="page-wrap py-20">
    <div class="container-x">
      <!-- Hero -->
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div class="flex flex-col gap-2">
          <span class="eyebrow-dark mb-6 w-fit">
            <BookOpen class="w-3.5 h-3.5"/>
              Blog Management
          </span>
          <h1 class="h-hero text-brand-dark"> Manage Blog
            <span class="text-gradient-red">Posts</span>
          </h1>
          <p class="text-brand-gray text-sm">
            Signed in as <strong>{{ user?.email }}</strong>
          </p>
        </div>
      </div>
      <div class="flex items-center pb-4">
        <router-link 
            to="/admin/create-blog" class="btn-primary">
            Create Blog
          </router-link>
      </div>
      <!-- Stat cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div class="p-6 rounded-2xl bg-brand-light border border-brand-light">
          <p class="text-xs uppercase tracking-wider text-brand-gray font-semibold">Total</p>
          <p class="font-display text-3xl font-bold mt-2">{{ blogs.length }}</p>
        </div>
        <div class="p-6 rounded-2xl bg-brand-light border border-brand-light">
          <p class="text-xs uppercase tracking-wider text-brand-gray font-semibold">Showing</p>
          <p class="font-display text-3xl font-bold mt-2">{{ filtered.length }}</p>
        </div>
        <!-- <div class="p-6 rounded-2xl bg-brand-light border border-brand-light">
          <p class="text-xs uppercase tracking-wider text-brand-gray font-semibold">Latest</p>
          <p class="font-display text-sm font-semibold mt-2 truncate">
            {{ latest ? formatDate(latest.createdAt) : '—' }}
          </p>
        </div> -->
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
      <div v-if="successMessage" class="mb-4 p-3 rounded-lg bg-green-100 text-green-700">
        {{ successMessage }}
      </div>
      <div v-if="loading" class="p-10 text-center text-brand-gray">Loading blogs…</div>
      <div v-else-if="error" class="p-6 rounded-2xl bg-brand-red/10 text-brand-red text-sm">
        {{ error }}
        <p class="text-brand-gray text-xs mt-2">
          Make sure the .NET API is running at <code>{{ apiBase }}</code> and CORS allows this origin.
        </p>
      </div>
      <div v-else-if="filtered.length === 0" class="p-10 text-center text-brand-gray rounded-2xl bg-brand-light border border-brand-light">
        No contact submissions found.
      </div>
      <div v-else class="overflow-x-auto rounded-2xl border border-gray-200 bg-white">  
        <table class="min-w-full text-sm">
          <thead class="bg-brand-light">
          <tr class="text-left text-xs uppercase text-brand-gray">
              <th class="px-4 py-3">Title</th>
              <th class="px-4 py-3">Category</th>
              <th class="px-4 py-3">Author</th>
              <th class="px-4 py-3">Date</th>
              <th class="px-4 py-3 text-right">Actions</th>
          </tr>
          </thead>  
          <tbody class="divide-y divide-gray-100">
          <tr v-for="b in filtered" :key="b.id" class="hover:bg-brand-light/40"> 
            <td class="px-4 py-3 font-semibold">
            {{ b.title }}
            </td>  
            <td class="px-4 py-3">
            {{ b.category }}
            </td>  
            <td class="px-4 py-3">
            {{ b.author }}
            </td>  
            <td class="px-4 py-3 text-brand-gray">
            {{ new Date(b.createdAt).toLocaleDateString() }}
            </td>  
            <td class="px-4 py-3 text-right flex justify-end gap-3">
            <router-Link
              :to="`/admin/edit-blog/${b.id}`"
              class="text-blue-600 hover:underline">
                Edit
            </router-Link>  
            <button 
              @click="remove(b)" class="text-red-600 hover:underline">
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
import { useRouter, useRoute } from 'vue-router';
import {BookOpen } from 'lucide-vue-next';
import { api, auth, API_BASE_URL, type Blog } from '@/utils/apiClient';

const router = useRouter();
const apiBase = API_BASE_URL;
const loading = ref(false);
const error = ref('');
const user = ref(auth.getUser());
const search = ref('');
const blogs = ref<Blog[]>([]);
const successMessage = ref('')

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase();
  if (!q) return blogs.value;
  return blogs.value.filter(b =>
    [b.title, b.category, b.summary, b.content].filter(Boolean).some(v => String(v).toLowerCase().includes(q))
  );
});
async function load() {
  loading.value = true;
  error.value = '';
  try {
    blogs.value = await api.listBlogs();
  } catch (e: any) {
    if (e?.message === 'Unauthorized') {
      router.push('/login');
      return;
    }
    error.value = e?.message || 'Failed to load contacts';
  } finally {
    loading.value = false;
  }
}
async function remove(b: Blog) {
  if (!confirm(`Delete blog ${b.title}?`)) return;
  try {
    await api.deleteBlog(b.id);
    blogs.value = blogs.value.filter(x => x.id !== b.id);
    await load();
    successMessage.value = 'Blog deleted successfully';
    setTimeout(() => {
      successMessage.value = ''
    }, 3000);

  } catch (e: any) {
      console.error('DELETE ERROR:', e);
      alert(e?.message || 'Delete failed');
    }
}
onMounted(load);

</script>