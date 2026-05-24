<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-white text-brand-dark font-sans pb-20">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Top Title Header -->
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-16 md:mb-20">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          Our Identity
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          The Right Resources, Custom Scaled
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          At LeadX Technologies, our main mission is to support your projects and reach your strategic goals. To achieve that, we offer custom-tailored engagements designed around your timeline and needs.
        </p>
      </div>

      <!-- Core Engagement Models (Two-Column Layout) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-24">
        <!-- Card 1: Managed Teams -->
        <div class="flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-brand-light border border-brand-light shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden">
          <div class="absolute -top-20 -right-20 w-40 h-40 bg-brand-red/5 rounded-full blur-2xl group-hover:bg-brand-red/10 transition-all duration-300"></div>
          
          <div class="flex flex-col gap-6">
            <div class="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-display font-bold text-lg select-none">
              01
            </div>
            <h3 class="font-display text-2xl sm:text-3xl font-bold text-brand-dark">
              Outsourced Managed Teams
            </h3>
            <p class="text-brand-gray text-sm sm:text-base leading-relaxed">
              Utilize LeadX as your full-service engineering partner. We take complete ownership of requirements, timelines, testing protocols, and product delivery from discovery to launch.
            </p>
            <ul class="flex flex-col gap-3 text-sm text-brand-gray/95 font-medium mt-2">
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>End-to-end scope management</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>Rigorous automated QA testing cycles</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>Product manager & tech lead included</span>
              </li>
            </ul>
          </div>

          <div class="mt-8 border-t border-brand-dark/5 pt-6">
            <router-link 
              to="/contact" 
              class="inline-flex items-center gap-2 text-brand-red font-bold hover:gap-3 transition-all duration-200"
            >
              Request Managed Proposal
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </router-link>
          </div>
        </div>

        <!-- Card 2: Staff Augmentation -->
        <div class="flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-brand-light border border-brand-light shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden">
          <div class="absolute -top-20 -right-20 w-40 h-40 bg-brand-red/5 rounded-full blur-2xl group-hover:bg-brand-red/10 transition-all duration-300"></div>
          
          <div class="flex flex-col gap-6">
            <div class="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-display font-bold text-lg select-none">
              02
            </div>
            <h3 class="font-display text-2xl sm:text-3xl font-bold text-brand-dark">
              Supplemental Augmentation
            </h3>
            <p class="text-brand-gray text-sm sm:text-base leading-relaxed">
              Seamlessly embed LeadX engineering specialists directly into your existing agile scrum teams, working side-by-side with your internal resources to accelerate backlogs.
            </p>
            <ul class="flex flex-col gap-3 text-sm text-brand-gray/95 font-medium mt-2">
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>Rapid onboarding in under 5 business days</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>Flexible, month-to-month contracts</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>Fully integrated with your tooling (Jira/GitHub)</span>
              </li>
            </ul>
          </div>

          <div class="mt-8 border-t border-brand-dark/5 pt-6">
            <router-link 
              to="/contact" 
              class="inline-flex items-center gap-2 text-brand-red font-bold hover:gap-3 transition-all duration-200"
            >
              Consult On Supplemental Developers
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Vision & Values Panel -->
      <div class="bg-brand-dark text-white rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div class="lg:col-span-5 flex flex-col gap-4">
            <span class="text-brand-red font-semibold text-xs tracking-wider uppercase">Our Core Principles</span>
            <h2 class="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Values That Drive High-Quality Delivery
            </h2>
            <p class="text-brand-gray text-sm sm:text-base leading-relaxed">
              We operate at the intersection of elite technical expertise, deep transparency, and relentless focus on architectural longevity.
            </p>
          </div>

          <div class="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="(value, index) in values" :key="index" class="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-3 hover:border-white/15 hover:bg-white/10 transition-all duration-300">
              <span class="text-brand-red">
                <component :is="value.icon" class="w-6 h-6 flex-shrink-0" />
              </span>
              <h4 class="font-display text-base font-bold text-white">{{ value.title }}</h4>
              <p class="text-brand-gray text-xs leading-relaxed">{{ value.desc }}</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { h } from 'vue';

const PuzzleIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z' })
]);
const BoltIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'm3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' })
]);
const ShieldIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z' })
]);
const HeartIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z' })
]);

const values = [
  { title: 'Technical Mastery', desc: 'We only hire senior engineers, architects, and product strategists with proven track records.', icon: BoltIcon },
  { title: 'Radical Transparency', desc: 'No transaction bottlenecks, hidden fees, or gatekeeping. Open source code standard.', icon: PuzzleIcon },
  { title: 'Security Standard', desc: 'All workflows follow rigorous SOC 2 data protection benchmarks natively.', icon: ShieldIcon },
  { title: 'Client Longevity', desc: 'We develop code structured to facilitate ongoing evolution long after initial deployment.', icon: HeartIcon }
];
</script>