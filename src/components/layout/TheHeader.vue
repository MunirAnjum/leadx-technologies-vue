<template>
  <header 
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'translate-y-[-38px]' : 'translate-y-0'
    ]"
  >
    <!-- Top Utility Bar -->
    <UtilityBar />

    <!-- Main Navigation Bar -->
      <nav
        class="w-full border-b bg-white border-brand-light py-5 text-gray-900 transition-all duration-300"
      >
      <div class="max-w-7xl mx-auto px-6 justify-between flex items-center">
        <!-- Logo -->
        <router-link 
          to="/" 
          class="flex items-center gap-1 font-display text-2xl font-bold tracking-wider group focus:outline-none"
        >
          <img :src="logo" alt="LEADX" class="h-8 w-auto" />
        </router-link>

        <ul class="hidden lg:flex items-center gap-8 ml-12 font-sans text-sm font-medium">

          <li v-for="link in navLinks" :key="link.name" class="relative py-1">

            <!-- Dropdown -->
            <div v-if="link.type === 'dropdown'" class="relative services-dropdown">
              <button
                @click="servicesDropdownOpen = !servicesDropdownOpen"
                 :class="[
                'flex items-center gap-2 transition-colors duration-300',
              ]"
              >
                {{ link.name }}
                 <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': servicesDropdownOpen }"
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
                class="absolute top-full left-0 mt-4 w-80 bg-white shadow-xl border rounded-xl"
              >
                <router-link
                  v-for="item in link.children"
                  :key="item.path"
                  :to="item.path"
                  @click="servicesDropdownOpen = false"
                  class="block px-6 py-4 hover:bg-gray-100"
                >
                  {{ item.name }}
                </router-link>
              </div>
            </div>

            <!-- Normal link -->
            <router-link
              v-else
              :to="link.path"
              class="text-gray-900"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
        <!-- Action Buttons -->
        <div class="hidden lg:flex">
          <router-link 
            to="/contact" class="btn-primary">
            Contact Us
            <ArrowRight class="h-4 w-4"/>
          </router-link>
        </div>

        <!-- Login / Dashboard Button -->
        <router-link
          v-if="!isLoggedIn"
          to="/login" class="btn-primary">
          Login
        </router-link>

        <router-link
          v-else
          to="/dashboard"
          class="inline-flex items-center gap-2 bg-brand-red text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition"
        >
          Dashboard
        </router-link>   
     </div>
    </nav>

    <!-- Mobile Drawer Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-[-10px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-10px]"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="lg:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-brand-dark text-white flex flex-col justify-between p-8 overflow-y-auto border-t border-white/10"
      >
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import UtilityBar from './UtilityBar.vue';
import logo from '@/assets/images/leadx-logo.png'
import { auth } from '@/utils/apiClient'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next';
const router = useRouter()

const isLoggedIn = computed(() => auth.isAuthenticated())

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

// Services dropdown state
const dropdownRef = ref(null);
const servicesDropdownOpen = ref(false);

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

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : '';
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

const handleClickOutside = (e) => {
  const dropdown = document.querySelector('.services-dropdown')

  if (dropdown && !dropdown.contains(e.target)) {
    servicesDropdownOpen.value = false
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.logo-cursor {
  font-family: monospace;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to { color: transparent }
  50% { color: #E63329 }
}
</style>