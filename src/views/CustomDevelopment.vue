<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-white text-brand-dark font-sans pb-20">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Hero -->
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-20">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          What We Do
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          Custom Development
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          We build secure, flexible, and scalable web applications aligned with your technical roadmap. From discovery through deployment, our engineers deliver tailored software that fits the way your business actually works.
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-200 mt-4"
        >
          Start Your Project
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </router-link>
      </div>
      <!-- Pillars -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div
          v-for="(p, i) in pillars"
          :key="i"
          class="p-8 rounded-3xl bg-brand-light border border-brand-light flex flex-col gap-4 hover:shadow-md transition-all duration-300"
        >
          <div class="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center">
            <component :is="p.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-display text-xl font-bold">{{ p.title }}</h3>
          <p class="text-brand-gray text-sm leading-relaxed">{{ p.desc }}</p>
        </div>
      </div>
      <!-- Alternating Sections -->
      <div class="flex flex-col gap-24 lg:gap-32">
        <div
          v-for="(s, index) in sections"
          :key="index"
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div
            :class="[
              'lg:col-span-6 flex flex-col items-start gap-6',
              index % 2 === 1 ? 'lg:order-last' : ''
            ]"
          >
            <span class="text-[10px] font-bold tracking-widest text-brand-red uppercase">
              {{ s.eyebrow }}
            </span>
            <h3 class="font-display text-3xl font-bold text-brand-dark tracking-tight leading-tight">
              {{ s.title }}
            </h3>
            <p class="text-brand-gray text-sm sm:text-base leading-relaxed">{{ s.desc }}</p>
            <ul class="flex flex-col gap-3.5 text-sm text-brand-dark font-medium w-full">
              <li v-for="b in s.bullets" :key="b" class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>{{ b }}</span>
              </li>
            </ul>
          </div>
          <div class="lg:col-span-6 bg-brand-light rounded-3xl p-8 border border-brand-light flex flex-col gap-6 relative overflow-hidden group min-h-[300px] justify-center shadow-inner">
            <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
            <div class="flex flex-col gap-4 relative z-10 text-center items-center">
              <span class="text-[10px] font-bold tracking-widest text-brand-red uppercase">Engineering Standard</span>
              <h4 class="font-display font-semibold text-lg max-w-sm text-brand-dark">{{ s.visualTitle }}</h4>
              <p class="text-brand-gray text-xs max-w-xs leading-relaxed">{{ s.visualDesc }}</p>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white text-[10px] font-bold text-brand-dark border border-brand-dark/5 shadow-sm mt-2">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                Active Build Pipeline
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- CTA -->
      <div class="mt-24 bg-brand-red rounded-3xl p-10 md:p-16 text-white text-center flex flex-col items-center gap-5">
        <h2 class="font-display text-3xl sm:text-4xl font-bold">Ready to build something great?</h2>
        <p class="max-w-2xl text-white/90 text-sm sm:text-base">Let's discuss your roadmap and how our engineering team can accelerate your delivery.</p>
        <router-link to="/contact" class="inline-flex items-center gap-2 bg-white text-brand-red px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-light transition-all">
          Get In Touch
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { h } from 'vue';
const CodeIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5' })
]);
const LayoutIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z' })
]);
const ChartIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125C16.5 3.504 17.004 3 17.625 3h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z' })
]);
const pillars = [
  { title: 'Planning', desc: 'Discovery, technical architecture, and roadmap definition tailored to your business outcomes.', icon: LayoutIcon },
  { title: 'Implementation', desc: 'Clean, tested, scalable code shipped on iterative sprints with full transparency.', icon: CodeIcon },
  { title: 'Insights', desc: 'Continuous monitoring, analytics, and optimization to evolve the product post-launch.', icon: ChartIcon }
];
const sections = [
  {
    eyebrow: 'Infrastructure',
    title: 'Scalable Infrastructure',
    desc: 'We architect modern systems that grow with your business — containerized, cloud-native, and fault tolerant by default.',
    bullets: ['Microservice & API-first design', 'CI/CD with automated testing', 'Horizontal scaling & load balancing'],
    visualTitle: 'Cloud-Native Foundations',
    visualDesc: 'Auto-scaling deployments, secure secrets management, and fully observable production environments.'
  },
  {
    eyebrow: 'UI / UX',
    title: 'Thoughtful UI & UX',
    desc: 'User research, wireframes, and pixel-perfect interfaces designed to convert and retain.',
    bullets: ['Accessible WCAG-compliant design', 'Design systems & component libraries', 'Mobile-first responsive layouts'],
    visualTitle: 'Design Systems That Scale',
    visualDesc: 'Reusable tokens, accessible components, and unified brand expression across every touchpoint.'
  },
  {
    eyebrow: 'Integration',
    title: 'Seamless Integration',
    desc: 'Connect new applications cleanly to your existing CRM, ERP, analytics, and third-party platforms.',
    bullets: ['REST & GraphQL APIs', 'Webhook & event-driven pipelines', 'OAuth & SSO authentication'],
    visualTitle: 'Connected Ecosystems',
    visualDesc: 'Bridge legacy and modern systems with reliable, monitored integration pipelines.'
  }
];
</script>