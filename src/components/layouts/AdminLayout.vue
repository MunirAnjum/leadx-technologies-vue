<template>
  <div class="min-h-screen flex bg-brand-light">

    <!-- Sidebar -->
    <aside class="w-64 bg-brand-dark/85 text-white flex flex-col">

      <div class="p-6 border-b border-white/10">
        <h2 class="font-bold text-xl pt-2 mx-2">LeadX <span class="text-gradient-red">Admin</span></h2>
      </div>

      <nav class="flex-1 p-4 space-y-2">

        <router-link
          to="/admin"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10">
          Dashboard
        </router-link>

        <router-link
          to="/admin/contacts"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10">
          Contacts
        </router-link>

        <router-link
          to="/admin/blogs"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10">
          Blogs
        </router-link>
        <div class="pt-4 pl-0 ml-0 border-t border-white/10">
          <button
            @click="logout"
            class="ml-4 px-0 hover:text-brand-red/80">
            Logout
          </button>
        </div>
      </nav>
    </aside>

    <!-- Content -->
    <main class="flex-1 overflow-auto p-8">
      <router-view />
    </main>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { auth } from '@/utils/apiClient'

const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>