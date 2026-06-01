<template>
  <footer class="bg-brand-dark text-white/80 border-t border-white/10 font-sans">
    <!-- Main Footer Container -->
    <div class="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        <!-- Column 1: Brand Info -->
        <div class="lg:col-span-4 flex flex-col gap-6">
          <router-link to="/" class="flex items-center gap-1 font-display text-2xl font-bold tracking-wider group focus:outline-none w-fit">
            <img :src="logo" alt="LEADX Tech" class="h-8 w-auto" />
            <span class="text-brand-red logo-cursor">_</span>
          </router-link>
          
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
        <div class="lg:col-span-2.5 lg:col-start-6 flex flex-col gap-5">
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
        <div class="lg:col-span-2.5 flex flex-col gap-5">
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
              href="tel:0312-3456789" 
              class="flex items-center gap-2 hover:text-white transition-colors duration-200 w-fit focus:outline-none focus:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 10.5a8.25 8.25 0 0 0-16.5 0c0 4.556 3.694 8.25 8.25 8.25a8.25 8.25 0 0 0 8.25-8.25Z" />
              </svg>
              <span class="tabular-nums font-semibold hover:underline">0312-3456789</span>
            </a>

            <!-- Email Link -->
            <a 
              href="mailto:info@leadx.tech" 
              class="flex items-center gap-2 hover:text-white transition-colors duration-200 w-fit focus:outline-none focus:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span class="font-medium hover:underline">info@leadx.tech</span>
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
          <li>
            <router-link to="/contact" class="hover:text-white transition-colors focus:outline-none">SLA Agreement</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, h } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
import logo from '@/assets/images/leadx-logo.png'

const LinkedInIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'currentColor',
  viewBox: '0 0 24 24',
}, [
  h('path', {
    d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
  })
]);

const TwitterIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'currentColor',
  viewBox: '0 0 24 24',
}, [
  h('path', {
    d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
  })
]);

const GithubIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'currentColor',
  viewBox: '0 0 24 24',
}, [
  h('path', {
    d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  })
]);

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedInIcon },
  { name: 'Twitter', url: 'https://twitter.com', icon: TwitterIcon },
  { name: 'GitHub', url: 'https://github.com', icon: GithubIcon }
];

const whoWeAreLinks = [
  { name: 'About Us', path: '/who-we-are' },
  { name: 'Engagement Models', path: '/what-we-do' },
  { name: 'Our Case Studies', path: '/case-studies' },
  { name: 'Join The Team', path: '/contact' }
];

const offerLinks = [
  { name: 'Custom Software Development', path: '/services' },
  { name: 'Systems Integration', path: '/services' },
  { name: 'Cloud & DevOps Services', path: '/services' },
  { name: 'Artificial Intelligence Solutions', path: '/ai' }
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