<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'translate-y-[-38px]' : 'translate-y-0'
    ]"
  >
    <!-- Top Utility Bar -->
    <UtilityBar />

    <!-- Main Navigation -->
    <nav class="w-full border-b bg-white border-brand-light py-4 lg:py-5 text-gray-900 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center gap-1 font-display text-2xl font-bold tracking-wider focus:outline-none shrink-0"
          @click="closeMobileMenu"
        >
          <img :src="logo" alt="LEADX" class="h-8 w-auto" />
        </router-link>

        <!-- Desktop Nav -->
        <ul class="hidden lg:flex items-center gap-8 ml-8 font-sans text-sm font-medium">
          <li
            v-for="link in navLinks"
            :key="link.name"
            class="relative py-1 transition-colors duration-300"
          >
            <!-- Desktop Dropdown -->
            <div v-if="link.type === 'dropdown'" class="relative services-dropdown">
              <button
                type="button"
                @click="servicesDropdownOpen = !servicesDropdownOpen"
                class="flex items-center gap-2 transition-colors duration-300"
                :class="isActiveDropdown(link) || servicesDropdownOpen ? 'text-brand-red' : 'text-gray-900 hover:text-brand-red'"
              >
                {{ link.name }}

                <svg
                  class="w-4 h-4 transition-transform"
                  :class="{ 'rotate-180 text-brand-red': servicesDropdownOpen }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                v-if="servicesDropdownOpen"
                class="absolute top-full left-0 mt-4 w-80 bg-white shadow-xl border rounded-xl z-50 overflow-hidden"
              >
                <router-link
                  v-for="item in link.children"
                  :key="item.path"
                  :to="item.path"
                  @click="servicesDropdownOpen = false"
                  class="block px-6 py-4 hover:bg-gray-100 transition-colors"
                >
                  {{ item.name }}
                </router-link>
              </div>
            </div>

            <!-- Normal desktop links -->
            <router-link
              v-else
              :to="link.path"
              class="transition-colors duration-300"
              :class="route.path === link.path ? 'text-brand-red' : 'text-gray-900 hover:text-brand-red'"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>

        <!-- Desktop right actions -->
        <div class="hidden lg:flex items-center gap-3">
          <router-link to="/contact" class="btn-primary">
            Contact Us
            <ArrowRight class="h-4 w-4" />
          </router-link>

          <router-link
            v-if="!isLoggedIn"
            to="/login"
            class="btn-primary"
          >
            Login
          </router-link>

          <router-link
            v-else
            to="/admin"
            class="inline-flex items-center gap-2 bg-brand-red text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition"
          >
            Dashboard
          </router-link>
        </div>

        <!-- Mobile right actions -->
        <div class="flex items-center gap-3 lg:hidden">
          <router-link
            v-if="isLoggedIn"
            to="/admin"
            class="inline-flex items-center bg-brand-red text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition"
          >
            Dashboard
          </router-link>

          <button
            type="button"
            class="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 bg-white"
            @click="toggleMobileMenu"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!mobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden fixed inset-0 top-[102px] bg-black/40 z-40"
        @click="closeMobileMenu"
      />
    </transition>

    <!-- Mobile drawer -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden fixed top-[102px] left-0 w-full max-h-[calc(100vh-102px)] overflow-y-auto bg-white text-brand-dark z-50 border-t border-brand-light shadow-xl"
      >
        <div class="moblie-menu px-5 flex flex-col">
          <!-- Normal links -->
          <template v-for="link in navLinks" :key="link.name">
            <div v-if="link.type === 'dropdown'">
              <button
                type="button"
                @click="mobileServicesOpen = !mobileServicesOpen"
                class="w-full flex items-center justify-between py-3 text-left font-semibold"
                :class="isActiveDropdown(link) ? 'text-brand-red' : 'text-brand-dark'"
              >
                <span>{{ link.name }}</span>
                <svg
                  class="w-4 h-4 transition-transform"
                  :class="{ 'rotate-180': mobileServicesOpen }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div v-if="mobileServicesOpen" class="pl-3 pb-2 flex flex-col">
                <router-link
                  v-for="item in link.children"
                  :key="item.path"
                  :to="item.path"
                  @click="closeMobileMenu"
                  class="py-2 text-sm text-brand-gray hover:text-brand-red transition"
                >
                  {{ item.name }}
                </router-link>
              </div>
            </div>

            <router-link
              v-else
              :to="link.path"
              @click="closeMobileMenu"
              class="py-3 border-b border-gray-100 font-medium transition"
              :class="route.path === link.path ? 'text-brand-red' : 'text-brand-dark'"
            >
              {{ link.name }}
            </router-link>
          </template>

          <!-- Mobile actions -->
          <div class="pt-5 flex flex-col gap-3">
            <router-link
              to="/contact"
              class="inline-flex btn-primary justify-center"
              @click="closeMobileMenu"
            >
              Contact Us
              <ArrowRight class="h-4 w-4" />
            </router-link>

            <router-link
              v-if="!isLoggedIn"
              to="/login"
              class="inline-flex items-center justify-center rounded-full border border-brand-red text-brand-red px-5 py-3 text-sm font-semibold hover:bg-brand-red hover:text-white transition"
              @click="closeMobileMenu"
            >
              Login
            </router-link>

            <router-link
              v-else
              to="/admin"
              class="inline-flex items-center justify-center rounded-full bg-brand-red text-white px-5 py-3 text-sm font-semibold hover:bg-red-700 transition"
              @click="closeMobileMenu"
            >
              Dashboard
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import UtilityBar from './UtilityBar.vue'
import logo from '@/assets/images/leadx-logo.png'
import { authState } from '@/utils/apiClient'
import { ArrowRight } from 'lucide-vue-next'

const route = useRoute()

const isLoggedIn = authState
const isScrolled = ref(false)

const mobileMenuOpen = ref(false)
const servicesDropdownOpen = ref(false)
const mobileServicesOpen = ref(false)

const navLinks = [
  { name: 'Who We Are', path: '/who-we-are' },
  { name: 'What We Do', path: '/what-we-do' },
  {
    name: 'Services',
    type: 'dropdown',
    children: [
      { name: 'Custom Development', path: '/custom-development' },
      { name: 'Cloud Migration', path: '/cloud-migration' },
      { name: 'Project Outsourcing', path: '/project-outsourcing' },
      { name: 'System Integration', path: '/system-integration' },
      { name: 'Salesforce Services', path: '/salesforce-services' },
    ]
  },
  { name: 'AI Consulting', path: '/artificial-intelligence' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' }
]

const isActiveDropdown = (link) => {
  if (!link.children) return false
  return link.children.some(child => child.path === route.path)
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  mobileServicesOpen.value = false
  document.body.style.overflow = ''
}

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function handleClickOutside(e) {
  const dropdown = document.querySelector('.services-dropdown')
  if (dropdown && !dropdown.contains(e.target)) {
    servicesDropdownOpen.value = false
  }
}

watch(
  () => route.fullPath,
  () => {
    closeMobileMenu()
    servicesDropdownOpen.value = false
  }
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  document.body.style.overflow = ''
})
</script>