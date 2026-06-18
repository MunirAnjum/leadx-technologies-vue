<template>
  <div class="page-wrap py-20">
    <div class="container-x max-w-4xl">
      <div class="mb-10">
        <span class="eyebrow-dark">Edit Blog</span>
        <h1 class="h-hero text-brand-dark mt-4">
          Update <span class="text-gradient-red">Blog Post</span>
        </h1>
      </div>
      <form @submit.prevent="updateBlog" class="space-y-6">
        <!-- Title -->
        <div>
          <label class="block mb-2 font-semibold">Title</label>
          <input
            v-model="form.title"
            type="text"
            class="w-full border rounded-xl px-4 py-3"
            required
          />
        </div>
        <!-- Category -->
        <div>
          <label class="block mb-2 font-semibold">Category</label>
          <select
            v-model="form.category"
            class="w-full border rounded-xl px-4 py-3 bg-white"
            required
          >
            <option value="" disabled>Select Category</option>
            <option value="Cloud">Cloud</option>
            <option value="Security">Security</option>
            <option value="AI">AI</option>
            <option value="Data">Data</option>
            <option value="Engineering">Engineering</option>
            <option value="Architecture">Architecture</option>
          </select>
        </div>
        <!-- Author -->
        <div>
          <label class="block mb-2 font-semibold">Author</label>
          <input
            v-model="form.author"
            type="text"
            class="w-full border rounded-xl px-4 py-3"
            required
          />
        </div>
        <!-- Summary -->
        <div>
          <label class="block mb-2 font-semibold">Summary</label>
          <textarea
            v-model="form.summary"
            rows="3"
            class="w-full border rounded-xl px-4 py-3"
            required
          />
        </div>
        <!-- Content -->
        <div>
          <label class="block mb-2 font-semibold">Content</label>
          <BlogEditor v-model="form.content" />
        </div>
        <button
          type="submit"
          :disabled="loading"
          class="btn-primary"
        >
          {{ loading ? 'Saving...' : 'Update Blog' }}
        </button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { api } from '@/utils/apiClient'
import BlogEditor from '@/components/BlogEditor.vue'
const router = useRouter()
const route = useRoute()
const loading = ref(false)
const form = ref({
  title: '',
  category: '',
  author: 'LeadX Team',
  summary: '',
  content: ''
})
const blogId = route.params.id
async function loadBlog() {
  try {
    const blog = await api.getBlog(blogId as string)
    form.value = {
      title: blog.title,
      summary: blog.summary,
      content: blog.content,
      author: blog.author,
      category: blog.category
    }
  } catch (err) {
    console.error(err)
  }
}
async function updateBlog() {
  try {
    loading.value = true
    await api.updateBlog(blogId as string, form.value)
    alert('Blog updated successfully')
    router.push('/admin/blogs')
  } catch (err) {
    console.error(err)
    alert('Failed to update blog')
  } finally {
    loading.value = false
  }
}
onMounted(loadBlog)
</script>