<template>
  <div class="overflow-hidden bg-white item-center sm:px-18 lg:px-16 text-brand-dark font-sans">
    <!-- HERO -->
    <section class="relative py-16 lg:py-24 xl:py-28 bg-gradient-to-b from-brand-gray/50 to-white rounded-b-[50px]">
      <!-- <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-red/5 blur-[120px]"></div>
        <div class="absolute top-[60%] -left-40 w-[500px] h-[500px] rounded-full bg-brand-dark/5 blur-[100px]"></div>
        <div class="absolute right-10 top-20 w-44 h-44 opacity-[0.03] bg-[radial-gradient(#0A0A0A_2px,transparent_2px)] [background-size:16px_16px]"></div>
      </div> -->
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="lg:col-span-6 flex mt-28 flex-col items-start gap-6">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-brand-red/10 text-brand-red uppercase">
              <Zap class="w-3.5 h-3.5 animate-bounce" />
              What We Do
            </div>
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tight leading-[1.1]">
              Custom Development
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600 block sm:inline">Superior Software</span>
            </h1>
            <p class="text-brand-gray text-base sm:text-lg max-w-lg leading-relaxed">
              We build secure, flexible, and scalable web applications aligned with your technical roadmap. From discovery through deployment, our engineers deliver tailored software that fits the way your business actually works.
            </p>
            <div class="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <router-link to="/contact" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-full font-bold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-200">
                Start Your Project
                <ArrowRight class="w-4 h-4" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Pillars -->
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 py-20 md:grid-cols-3 gap-6 mb-24">
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
                <Check class="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
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
    </div>
    <!-- CTA -->
    <section class="py-16 md:py-24 bg-brand-light/20">
      <div class="max-w-5xl mx-auto px-6">
        <div class="mt-24 bg-brand-dark rounded-3xl p-10 md:p-16 text-white text-center flex flex-col items-center gap-5">
          <h2 class="font-display text-3xl sm:text-4xl font-bold">Ready to build something great?</h2>
          <p class="max-w-2xl text-white/90 text-sm sm:text-base">Let's discuss your roadmap and how our engineering team can accelerate your delivery.</p>
          <router-link to="/contact" class="relative z-10 inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-full font-bold hover:bg-red-700 active:scale-95 transition">
            Get Started 
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight, Check, Code2, LayoutDashboard, BarChart3, Zap } from 'lucide-vue-next';

const pillars = [
  { title: 'Planning', desc: 'Discovery, technical architecture, and roadmap definition tailored to your business outcomes.', icon: LayoutDashboard },
  { title: 'Implementation', desc: 'Clean, tested, scalable code shipped on iterative sprints with full transparency.', icon: Code2 },
  { title: 'Insights', desc: 'Continuous monitoring, analytics, and optimization to evolve the product post-launch.', icon: BarChart3 }
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