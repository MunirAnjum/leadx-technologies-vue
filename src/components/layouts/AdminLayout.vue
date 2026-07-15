<template>
  <div class="min-h-screen flex bg-brand-light">
    <!-- Mobile overlay -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black/40 z-40 lg:hidden"
        @click="closeSidebar"
      />
    </transition>

    <!-- Desktop Sidebar -->
    <aside class="hidden lg:flex w-64 bg-brand-dark/85 text-white flex-col min-h-screen sticky top-0">
      <div class="p-6 border-b border-white/10">
        <h2 class="font-bold text-xl pt-2 mx-2">
          LeadX <span class="text-gradient-red">Admin</span>
        </h2>
      </div>

      <nav class="flex-1 p-4 space-y-2">
        <router-link
          to="/admin"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
        >
          Dashboard
        </router-link>

        <router-link
          to="/admin/contacts"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
        >
          Contacts
        </router-link>

        <router-link
          to="/admin/blogs"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
        >
          Blogs
        </router-link>

        <div class="pt-4 border-t border-white/10">
          <button
            @click="logout"
            class="ml-4 hover:text-brand-red/80 transition"
          >
            Logout
          </button>
        </div>
      </nav>
    </aside>

    <!-- Mobile Sidebar -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <aside
        v-if="sidebarOpen"
        class="top-50 left-0 z-50 w-50 max-w-[85vw] h-screen bg-brand-dark/95 text-white flex flex-col lg:hidden"
      >
        <div class="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 class="font-bold text-xl">
            LeadX <span class="text-gradient-red">Admin</span>
          </h2>

          <button
            type="button"
            class="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center"
            @click="closeSidebar"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav class="flex-1 p-4 space-y-2">
          <router-link
            to="/admin"
            @click="closeSidebar"
            class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Dashboard
          </router-link>

          <router-link
            to="/admin/contacts"
            @click="closeSidebar"
            class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Contacts
          </router-link>

          <router-link
            to="/admin/blogs"
            @click="closeSidebar"
            class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Blogs
          </router-link>
          <div class="p-4 border-t border-white/10">
            <button
              @click="logout"
              class="w-full text-left rounded-xl hover:bg-white/10 hover:text-brand-red/80 transition"
            >
              Logout
            </button>
          </div>
        </nav>
      </aside>
    </transition>

    <!-- Right side -->
    <div class="flex-1 min-w-0 flex flex-col">
      <!-- Mobile top bar -->
      <div class="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <button
        v-if="!sidebarOpen"
          type="button"
          class="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center bg-white"
          @click="toggleSidebar"
          aria-label="Open sidebar"
        >
          ☰
        </button>

        <h2 class="font-bold text-lg text-brand-dark">
          LeadX <span class="text-gradient-red">Admin</span>
        </h2>

        <button
          @click="logout"
          class="text-sm font-medium text-brand-red"
        >
          Logout
        </button>
      </div>

      <!-- Content -->
      <main class="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { auth } from '@/utils/apiClient'

const router = useRouter()
const route = useRoute()

const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
  document.body.style.overflow = sidebarOpen.value ? 'hidden' : ''
}

function closeSidebar() {
  sidebarOpen.value = false
  document.body.style.overflow = ''
}

function logout() {
  auth.logout()
  closeSidebar()
  router.push({name:'admin-login'})
}

watch(
  () => route.fullPath,
  () => {
    closeSidebar()
  }
)
</script>