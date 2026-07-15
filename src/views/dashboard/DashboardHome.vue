<template>
  <div>
    <h1 class="h-hero mb-8">
      Dashboard
    </h1>

    <div v-if="loading" class="text-brand-gray">
      Loading dashboard...
    </div>

    <div v-else-if="error" class="p-4 rounded-xl bg-brand-red/10 text-brand-red mb-6">
      {{ error }}
    </div>

    <div v-else class="grid md:grid-cols-2 gap-6">
      <div class="card p-6">
        <h3>Total Contacts</h3>
        <p class="text-4xl font-bold">
          {{ contactsCount }}
        </p>
      </div>

      <div class="card p-6">
        <h3>Total Blogs</h3>
        <p class="text-4xl font-bold">
          {{ blogsCount }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api, type Contact, type Blog } from '@/utils/apiClient'

const router = useRouter()

const contacts = ref<Contact[]>([])
const blogs = ref<Blog[]>([])
const loading = ref(false)
const error = ref('')

const contactsCount = computed(() => contacts.value.length)
const blogsCount = computed(() => blogs.value.length)

const loadDashboard = async () => {
  loading.value = true
  error.value = ''

  try {
    const [contactsData, blogsData] = await Promise.all([
      api.listContacts(), // protected
      api.listBlogs()     // public
    ])

    contacts.value = contactsData
    blogs.value = blogsData
  } catch (e: any) {
    if (e?.message === 'Unauthorized') {
      router.push({name: 'admin-login'})
      return
    }

    error.value = e?.message || 'Failed to load dashboard data'
    console.error('Dashboard load failed:', e)
  } finally {
    loading.value = false
  }
}

onMounted(loadDashboard)
</script>