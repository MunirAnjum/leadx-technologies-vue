<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-white text-brand-dark font-sans pb-20">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-20">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          What We Do
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          Salesforce Services
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          Certified Salesforce specialists across Sales Cloud, Service Cloud, Experience Cloud, and Einstein AI — implementing, integrating, and continuously optimizing your CRM.
        </p>
        <router-link to="/contact" class="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-200 mt-4">
          Talk To A Salesforce Expert
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div v-for="(p, i) in pillars" :key="i" class="p-8 rounded-3xl bg-brand-light border border-brand-light flex flex-col gap-4 hover:shadow-md transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center">
            <component :is="p.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-display text-xl font-bold">{{ p.title }}</h3>
          <p class="text-brand-gray text-sm leading-relaxed">{{ p.desc }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-24 lg:gap-32">
        <div v-for="(s, index) in sections" :key="index" class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div :class="['lg:col-span-6 flex flex-col items-start gap-6', index % 2 === 1 ? 'lg:order-last' : '']">
            <span class="text-[10px] font-bold tracking-widest text-brand-red uppercase">{{ s.eyebrow }}</span>
            <h3 class="font-display text-3xl font-bold text-brand-dark tracking-tight leading-tight">{{ s.title }}</h3>
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
              <span class="text-[10px] font-bold tracking-widest text-brand-red uppercase">Salesforce Standard</span>
              <h4 class="font-display font-semibold text-lg max-w-sm text-brand-dark">{{ s.visualTitle }}</h4>
              <p class="text-brand-gray text-xs max-w-xs leading-relaxed">{{ s.visualDesc }}</p>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white text-[10px] font-bold text-brand-dark border border-brand-dark/5 shadow-sm mt-2">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                Org Healthy
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-24 bg-brand-red rounded-3xl p-10 md:p-16 text-white text-center flex flex-col items-center gap-5">
        <h2 class="font-display text-3xl sm:text-4xl font-bold">Get more from Salesforce</h2>
        <p class="max-w-2xl text-white/90 text-sm sm:text-base">Implementations, integrations, managed services, and AI — done right the first time.</p>
        <router-link to="/contact" class="inline-flex items-center gap-2 bg-white text-brand-red px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-light transition-all">Get In Touch</router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { h } from 'vue';
const SupportIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z' })
]);
const RocketIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' })
]);
const BrainIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z' })
]);
const pillars = [
  { title: 'Managed Services', desc: 'Ongoing admin, configuration, and enhancement support to keep your org healthy and evolving.', icon: SupportIcon },
  { title: 'Implementations', desc: 'New org builds and rollouts across Sales, Service, Experience, and Marketing Cloud.', icon: RocketIcon },
  { title: 'Integrations & AI', desc: 'Connect Salesforce to your stack and unlock Einstein AI for predictions and automation.', icon: BrainIcon }
];
const sections = [
  { eyebrow: 'Common Problems', title: 'The Problems We Solve', desc: 'Bloated orgs, low adoption, fragile customizations, and disconnected data — we untangle Salesforce so it actually drives revenue.',
    bullets: ['Low user adoption & reporting gaps', 'Technical debt from years of customization', 'Disconnected data across systems'],
    visualTitle: 'Salesforce That Earns Its Keep', visualDesc: 'Clean configuration, automation that works, and dashboards your team will actually use.' },
  { eyebrow: 'Discovery', title: 'Discovery & Strategy', desc: 'We start with workshops to understand your sales motion, service workflows, and reporting needs — before touching the org.',
    bullets: ['Stakeholder workshops', 'Process mapping & gap analysis', 'CRM strategy & roadmap'],
    visualTitle: 'Strategy Before Configuration', visualDesc: 'Clear outcomes, prioritized backlog, and a roadmap aligned to revenue goals.' },
  { eyebrow: 'Assessment', title: 'Org Health Assessment', desc: 'A deep audit of your existing org: technical debt, security, data quality, and optimization opportunities.',
    bullets: ['Technical debt & code review', 'Security & sharing model audit', 'Data quality & deduplication'],
    visualTitle: 'Know Where You Stand', visualDesc: 'A prioritized action plan covering quick wins, risk areas, and long-term improvements.' },
  { eyebrow: 'Delivery', title: 'Delivery & Enablement', desc: 'Agile implementation with user training, change management, and post-launch hypercare to drive adoption.',
    bullets: ['Agile sprints with demos', 'User training & enablement', 'Post-launch hypercare & support'],
    visualTitle: 'Built To Be Adopted', visualDesc: 'Hands-on training, clear documentation, and a support model that sticks long after go-live.' }
];
</script>