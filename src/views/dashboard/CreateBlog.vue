<template>
  <div class="page-wrap py-20">
    <div class="container-x max-w-4xl">

      <div class="mb-10">
        <span class="eyebrow-dark">
          Create Blog
        </span>

        <h1 class="h-hero text-brand-dark mt-4">
          New <span class="text-gradient-red">Blog Post</span>
        </h1>
      </div>

      <form @submit.prevent="submitBlog" class="space-y-6">

        <!-- Title -->
        <div>
          <label class="block mb-2 font-semibold">
            Title
          </label>

          <input
            v-model="form.title"
            type="text"
            class="w-full border rounded-xl px-4 py-3"
            required
          />
        </div>

        <!-- Category -->
        <div>
          <label class="block mb-2 font-semibold">
            Category
          </label>

          <input
            v-model="form.category"
            type="text"
            class="w-full border rounded-xl px-4 py-3"
            required
          />
        </div>

        <!-- Author -->
        <div>
          <label class="block mb-2 font-semibold">
            Author
          </label>

          <input
            v-model="form.author"
            type="text"
            class="w-full border rounded-xl px-4 py-3"
          />
        </div>

        <!-- Icon -->
        <div>
          <label class="block mb-2 font-semibold">
            Icon
          </label>

          <select
            v-model="form.icon"
            class="w-full border rounded-xl px-4 py-3"
          >
            <option v-for="i in iconOptions" :key="i.value" :value="i.value">
              {{ i.label }}
            </option>
          </select>
        </div>

        <!-- Summary -->
        <div>
          <label class="block mb-2 font-semibold">
            Summary
          </label>

          <textarea
            v-model="form.summary"
            rows="4"
            class="w-full border rounded-xl px-4 py-3"
            required
          />
        </div>

        <!-- Content -->
        <div>
          <label class="block mb-2 font-semibold">
            Content
          </label>
          <BlogEditor v-model="form.content" />
        </div>
        <button
          type="submit"
          :disabled="loading"
          class="btn-primary"
        >
          {{ loading ? 'Saving...' : 'Create Blog' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '@/utils/apiClient';
import BlogEditor from '@/components/BlogEditor.vue'

const loading = ref(false)
const router = useRouter();

const form = ref({
  title: '',
  category: '',
  author: 'LeadX Team',
  summary: '',
  content: '',
  icon: 'Cloud'
})
  const iconOptions = [
  { label: 'Cloud', value: 'Cloud' },
  { label: 'Security', value: 'Shield' },
  { label: 'AI', value: 'Cpu' },
  { label: 'Database', value: 'Database' },
  { label: 'Engineering', value: 'Code2' },
  { label: 'Architecture', value: 'Layers' }
];

async function submitBlog() {
  try {
    loading.value = true

    await api.createBlog(form.value);

    alert('Blog created successfully')

    form.value = {
      title: '',
      category: '',
      author: '',
      summary: '',
      content: '',
      icon: ''      
    }
    router.push('/admin/blogs');

  } catch (err) {
    console.error(err)
    alert('Failed to create blog')
  } finally {
    loading.value = false
  }
}

</script>