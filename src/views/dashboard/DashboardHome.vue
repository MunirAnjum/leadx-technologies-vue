<template>
  <div>
    <h1 class="h-hero mb-8">
      Dashboard
    </h1>

    <div class="grid md:grid-cols-2 gap-6">

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

<script setup>
import { ref, computed, onMounted } from 'vue'
import { api } from '@/utils/apiClient'

const contacts = ref([])
const blogs = ref([])

const contactsCount = computed(() => contacts.value.length)
const blogsCount = computed(() => blogs.value.length)

const loadContacts = async () => {
  contacts.value = await api.listContacts()
}

const loadBlogs = async () => {
  blogs.value = await api.listBlogs()
}

onMounted(async () => {
  await Promise.all([
    loadContacts(),
    loadBlogs()
  ])
})
</script>