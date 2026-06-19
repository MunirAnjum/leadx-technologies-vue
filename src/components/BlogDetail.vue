<template>
  <div class="page-wrap py-20">
    <div class="container-x max-w-4xl">
      <button
        @click="goToBlogs"
        class="btn-secondary mb-6">
        ← 
      </button>
      <div v-if="loading">
        Loading...
      </div>

      <div v-else-if="blog">

        <div class="mb-8">
          <h1 class="text-5xl font-bold mt-4 mb-4">
            {{ blog.title }}
          </h1>

          <div class="flex gap-4 text-sm text-brand-gray">
            <FilePen color="red" class="w-4 h-4" />
            <span>{{ blog.author }}</span>
            
            <Calendar color="red" class="w-4 h-4"/>
            <span>
              {{ new Date(blog.createdAt).toLocaleDateString() }}
            </span>
          </div>
        </div>

        <div class="mb-8 text-lg text-brand-gray">
          {{ blog.summary }}
        </div>

        <!-- Rich editor content -->
        <div
          class="blog-content prose max-w-none"
          v-html="blog.content">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '@/utils/apiClient'
import { Pen, FilePen, Calendar} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const blog = ref<any>(null)
const loading = ref(true)

function goToBlogs() {
  router.push('/blog')
}
async function loadBlog() {
  try {
    blog.value = await api.getBlog(route.params.id as string)
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(loadBlog)
</script>

<style>
::deep(.ProseMirror img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>