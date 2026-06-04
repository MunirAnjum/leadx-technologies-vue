<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-white text-brand-dark font-sans pb-20">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-20">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          What We Do
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          System Integration
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          Bridge critical business systems so the right data reaches the right place at the right time — without bottlenecks, manual handoffs, or duplicated work.
        </p>
        <router-link to="/contact" class="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-200 mt-4">
          Integrate Your Systems
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
                <Check class="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <span>{{ b }}</span>
              </li>
            </ul>
          </div>
          <div class="lg:col-span-6 bg-brand-light rounded-3xl p-8 border border-brand-light flex flex-col gap-6 relative overflow-hidden group min-h-[300px] justify-center shadow-inner">
            <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
            <div class="flex flex-col gap-4 relative z-10 text-center items-center">
              <span class="text-[10px] font-bold tracking-widest text-brand-red uppercase">Integration Standard</span>
              <h4 class="font-display font-semibold text-lg max-w-sm text-brand-dark">{{ s.visualTitle }}</h4>
              <p class="text-brand-gray text-xs max-w-xs leading-relaxed">{{ s.visualDesc }}</p>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white text-[10px] font-bold text-brand-dark border border-brand-dark/5 shadow-sm mt-2">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                Pipeline Healthy
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-24 bg-brand-red rounded-3xl p-10 md:p-16 text-white text-center flex flex-col items-center gap-5">
        <h2 class="font-display text-3xl sm:text-4xl font-bold">Make your systems talk</h2>
        <p class="max-w-2xl text-white/90 text-sm sm:text-base">From legacy ERPs to modern SaaS — we connect everything cleanly.</p>
        <router-link to="/contact" class="inline-flex items-center gap-2 bg-white text-brand-red px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-light transition-all">Get In Touch</router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { h } from 'vue';
import {Code2, LayoutDashboard, BarChart3, Check } from 'lucide-vue-next';
// const PlanIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
//   h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z' })
// ]);
// const CodeIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
//   h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5' })
// ]);
// const ChartIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
//   h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125C16.5 3.504 17.004 3 17.625 3h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z' })
// ]);
const pillars = [
  { title: 'Planning', desc: 'System discovery, cost analysis, and integration roadmap shaped to your data flows.', icon: LayoutDashboard },
  { title: 'Implementation', desc: 'Robust middleware, API contracts, and event pipelines built to fail safe and recover fast.', icon: Code2 },
  { title: 'Insights', desc: 'Live monitoring, message tracing, and analytics across every integration in your stack.', icon: BarChart3 }
];
const sections = [
  { eyebrow: 'Cost Analysis', title: 'Cost & Impact Analysis', desc: 'Before we build, we model: what does this integration cost to run, maintain, and scale?',
    bullets: ['Total cost of ownership modeling', 'Build vs. buy assessments', 'ROI & payback analysis'],
    visualTitle: 'Decisions Backed By Numbers', visualDesc: 'Transparent estimates for licensing, infrastructure, and engineering effort across every option.' },
  { eyebrow: 'Architecture', title: 'Integration Architecture', desc: 'Event-driven, API-first patterns that scale — orchestration, choreography, or hybrid as the problem demands.',
    bullets: ['Enterprise Service Bus (ESB) design', 'Event-streaming with Kafka', 'iPaaS & API gateway patterns'],
    visualTitle: 'Patterns That Scale', visualDesc: 'Clear contracts, idempotent processing, and resilient retries baked into every integration.' },
  { eyebrow: 'Security', title: 'Secure Data Exchange', desc: 'OAuth, mTLS, field-level encryption, and audit trails to keep regulated data safe in flight and at rest.',
    bullets: ['mTLS & OAuth 2.0 / OIDC', 'Field-level encryption & masking', 'Full audit & compliance logging'],
    visualTitle: 'Compliance Built-In', visualDesc: 'Designed for HIPAA, GDPR, and SOC 2 from the schema up — not bolted on after launch.' },
  { eyebrow: 'On-Prem & Cloud', title: 'On-Premise & Cloud Bridges', desc: 'Hybrid integrations connecting on-prem ERPs, mainframes, and SaaS platforms behind a unified API layer.',
    bullets: ['Hybrid connectivity (VPN / Direct Connect)', 'Edge agents & secure tunnels', 'Unified API facades'],
    visualTitle: 'Hybrid Without The Headaches', visualDesc: 'A single integration plane across cloud and data center — no matter where the system lives.' },
  { eyebrow: 'Legacy & Third-Party', title: 'Legacy & Third-Party Systems', desc: 'SOAP, EDI, flat files, vendor APIs — we wrap legacy interfaces with modern, observable services.',
    bullets: ['SOAP, EDI, SFTP, flat-file adapters', 'Vendor API client libraries', 'Modern REST/GraphQL facades'],
    visualTitle: 'Modern Faces On Old Systems', visualDesc: 'Wrap aging interfaces with clean APIs your developers actually want to use.' }
];
</script>