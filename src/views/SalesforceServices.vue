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
                <check class="h-4 w-4 text-brand-red flex-shrink-0" />
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
      <section class="py-16 md:py-24 bg-brand-light/20">
        <div class="max-w-5xl mx-auto px-6">
          <div class="mt-24 bg-brand-dark rounded-3xl p-10 md:p-16 text-white text-center flex flex-col items-center gap-5">
            <h2 class="font-display text-3xl sm:text-4xl font-bold">Get more from Salesforce</h2>
            <p classclass="max-w-2xl text-white/90 text-sm sm:text-base">Implementations, integrations, managed services, and AI — done right the first time.</p>
            <router-link to="/contact" class="relative z-10 inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-full font-bold hover:bg-red-700 active:scale-95 transition">
              Get Started 
              <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>      
      </section>
    </div>
  </div>
</template>

<script setup>

import {
  Users,
  Rocket,
  Brain,
  ClipboardCheck,
  Search,
  ShieldCheck,
  TrendingUp,
  Check
} from 'lucide-vue-next';
import bachgroundImage from '@/assets/images/background-image.png'

const SupportIcon = Users;
const RocketIcon = Rocket;
const BrainIcon = Brain;

const pillars = [
  {
    title: 'Managed Services',
    desc: 'Ongoing admin, configuration, and enhancement support to keep your org healthy and evolving.',
    icon: SupportIcon
  },
  {
    title: 'Implementations',
    desc: 'New org builds and rollouts across Sales, Service, Experience, and Marketing Cloud.',
    icon: RocketIcon
  },
  {
    title: 'Integrations & AI',
    desc: 'Connect Salesforce to your stack and unlock Einstein AI for predictions and automation.',
    icon: BrainIcon
  }
];

const sections = [
  {
    eyebrow: 'Common Problems',
    title: 'The Problems We Solve',
    desc: 'Bloated orgs, low adoption, fragile customizations, and disconnected data — we untangle Salesforce so it actually drives revenue.',
    bullets: [
      'Low user adoption & reporting gaps',
      'Technical debt from years of customization',
      'Disconnected data across systems'
    ],
    icon: TrendingUp
  },
  {
    eyebrow: 'Discovery',
    title: 'Discovery & Strategy',
    desc: 'We start with workshops to understand your sales motion, service workflows, and reporting needs — before touching the org.',
    bullets: [
      'Stakeholder workshops',
      'Process mapping & gap analysis',
      'CRM strategy & roadmap'
    ],
    icon: Search
  },
  {
    eyebrow: 'Assessment',
    title: 'Org Health Assessment',
    desc: 'A deep audit of your existing org: technical debt, security, data quality, and optimization opportunities.',
    bullets: [
      'Technical debt & code review',
      'Security & sharing model audit',
      'Data quality & deduplication'
    ],
    icon: ShieldCheck
  },
  {
    eyebrow: 'Delivery',
    title: 'Delivery & Enablement',
    desc: 'Agile implementation with user training, change management, and post-launch hypercare to drive adoption.',
    bullets: [
      'Agile sprints with demos',
      'User training & enablement',
      'Post-launch hypercare & support'
    ],
    icon: ClipboardCheck
  }
];
</script>