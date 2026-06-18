<template>
  <footer class="bg-brand-dark/90 text-white/80 border-t border-white/10 font-sans">
    <!-- Main Footer Container -->

    <div class="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col gap-y-20">
      <div class="flex flex-col gap-6 max-w-2xl">
      <router-link to="/" class="flex items-center gap-1 font-display text-2xl font-bold tracking-wider w-fit">
        <img :src="logo" alt="LEADX Tech" class="h-16 w-auto" />
      </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-20">
        
        <!-- Column 1: Brand Info -->
        <div class="lg:col-span-3 flex flex-col gap-5">
          <h4 class="font-display text-white text-sm font-semibold tracking-wider uppercase select-none">
            LeadX Technologies
          </h4>
          <p class="text-sm text-brand-gray leading-relaxed max-w-sm">
            At LeadX Technologies, we are passionate about engineering next-generation software architectures, modern cloud solutions, and systems integration that drive enterprise growth.
          </p>

          <!-- Social Icon List -->
          <ul class="flex items-center gap-4">
            <li v-for="social in socialLinks" :key="social.name">
              <a 
                :href="social.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-brand-red hover:bg-brand-red/10 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-brand-red"
                :aria-label="social.name"
              >
                <component :is="social.icon" class="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 2: Who We Are -->
        <div class="lg:col-span-3 flex flex-col gap-5">
          <h4 class="font-display text-white text-sm font-semibold tracking-wider uppercase select-none">
            Who We Are
          </h4>
          <ul class="flex flex-col gap-3.5 text-sm">
            <li v-for="item in whoWeAreLinks" :key="item.name">
              <router-link 
                :to="item.path"
                class="hover:text-brand-red hover:translate-x-1 inline-block transition-all duration-200 focus:outline-none focus:text-brand-red"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3: What We Offer -->
        <div class="lg:col-span-3 flex flex-col gap-5">
          <h4 class="font-display text-white text-sm font-semibold tracking-wider uppercase select-none">
            What We Offer
          </h4>
          <ul class="flex flex-col gap-3.5 text-sm">
            <li v-for="item in offerLinks" :key="item.name">
              <router-link 
                :to="item.path"
                class="hover:text-brand-red hover:translate-x-1 inline-block transition-all duration-200 focus:outline-none focus:text-brand-red"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact & Info -->
        <div class="lg:col-span-3 flex flex-col gap-5">
          <h4 class="font-display text-white text-sm font-semibold tracking-wider uppercase select-none">
            Get In Touch
          </h4>
          
          <address class="not-italic text-sm text-brand-gray flex flex-col gap-4">
            <div>
              <strong class="text-white block font-medium">LeadX Technologies Inc.</strong>
              <span class="block mt-1">LeadX Technologies, Jhardiyan Road, Nawansher</span>
              <span class="block">Abbottabad, KPK, Pakistan</span>
            </div>

            <!-- Phone Link -->
            <a 
              href="tel:0312-3456789h" 
              class="flex items-center gap-2 hover:text-white transition-colors duration-200 w-fit focus:outline-none focus:text-white"
            >
              <Phone class="w-4 h-4 text-brand-red flex-shrink-0" />
              <span class="tabular-nums font-semibold hover:underline">0312-3456789</span>
            </a>

            <!-- Email Link -->
            <a 
              href="mailto:info@leadx.com" 
              class="flex items-center gap-2 hover:text-white transition-colors duration-200 w-fit focus:outline-none focus:text-white"
            >
              <Mail class="w-4 h-4 text-brand-red flex-shrink-0" />
              <span class="font-medium hover:underline">info@leadx.com</span>
            </a>
          </address>
        </div>

      </div>
    </div>

    <!-- Bottom Legal Bar -->
    <div class="border-t border-white/10 bg-black/40 py-8 text-xs text-brand-gray font-medium">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div>
          <span>&copy; {{ currentYear }} LeadX Technologies LLC. All rights reserved.</span>
        </div>
        
        <ul class="flex items-center gap-6">
          <li>
            <router-link to="/contact" class="hover:text-white transition-colors focus:outline-none">Privacy Policy</router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:text-white transition-colors focus:outline-none">Terms of Service</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import {
  Linkedin,
  Twitter,
  Github,
  Phone,
  Mail
} from 'lucide-vue-next';
import logo from '@/assets/images/leadx-logo-transp.png';

const currentYear = computed(() => new Date().getFullYear());

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { name: 'GitHub', url: 'https://github.com', icon: Github }
];

const whoWeAreLinks = [
  { name: 'About Us', path: '/who-we-are' },
  { name: 'Engagement Models', path: '/what-we-do' },
  { name: 'Our Case Studies', path: '/case-studies' },
  { name: 'Join The Team', path: '/contact' }
];

const offerLinks = [
  { name: 'Custom Software Development', path: '/custom-development' },
  { name: 'Systems Integration', path: '/system-integration' },
  { name: 'Cloud & DevOps Services', path: '/cloud-migration' },
  { name: 'Artificial Intelligence Solutions', path: '/artificial-intelligence' },
  { name: 'Salesforce Services', path: '/salesforce-services' },
  { name: 'Project Outsourcing', path: '/project-outsourcing' }

];
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