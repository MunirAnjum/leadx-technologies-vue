<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-white text-brand-dark font-sans pb-20">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Top Title Header -->
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-20">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          Core Pillars
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          Put Us To Work
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          We've helped companies implement countless solutions and tackle their digital transformation goals. Our seasoned engineers build secure, flexible, and scalable systems.
        </p>
      </div>

      <!-- Services List (Alternating Layouts) -->
      <div class="flex flex-col gap-24 lg:gap-32">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          :class="[
            'grid grid-cols-1 lg:grid-cols-12 gap-12 items-center',
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          ]"
        >
          <!-- Text Content -->
          <div 
            :class="[
              'lg:col-span-6 flex flex-col items-start gap-6',
              index % 2 === 1 ? 'lg:order-last' : ''
            ]"
          >
            <div class="w-12 h-12 rounded-2xl bg-brand-red/5 text-brand-red flex items-center justify-center">
              <component :is="service.icon" class="w-6 h-6" />
            </div>

            <h3 class="font-display text-3xl font-bold text-brand-dark tracking-tight leading-tight">
              {{ service.title }}
            </h3>

            <p class="text-brand-gray text-sm sm:text-base leading-relaxed">
              {{ service.desc }}
            </p>

            <!-- Bullets Checkmark List -->
            <ul class="flex flex-col gap-3.5 text-sm text-brand-dark font-medium w-full">
              <li 
                v-for="bullet in service.bullets" 
                :key="bullet"
                class="flex items-center gap-3"
              >
                <Check class="w-4 h-4 text-brand-red flex-shrink-0" :stroke-width="3" />
                <span>{{ bullet }}</span>
              </li>
            </ul>

            <router-link 
              to="/contact" 
              class="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-200 mt-4"
            >
              Get Started With This Pillar
              <ArrowRight class="h-4 w-4" />
            </router-link>
          </div>
          <div class="lg:col-span-6 bg-brand-light rounded-3xl p-8 border border-brand-light flex flex-col gap-6 relative overflow-hidden group min-h-[300px] justify-center shadow-inner">
            <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

            <div class="flex flex-col gap-4 relative z-10 text-center items-center">
              <span class="text-[10px] font-bold tracking-widest text-brand-red uppercase">Architectural Standard</span>
              <h4 class="font-display font-semibold text-lg max-w-sm text-brand-dark">
                {{ service.visualTitle }}
              </h4>
              <p class="text-brand-gray text-xs max-w-xs leading-relaxed">
                {{ service.visualDesc }}
              </p>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white text-[10px] font-bold text-brand-dark border border-brand-dark/5 shadow-sm mt-2">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                Active Stack Pipeline
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { Code, Network, Cloud, ArrowRight, Check } from 'lucide-vue-next';

const services = [
  {
    title: 'Custom Development',
    desc: 'A collaborative effort to implement the right solution for your business. We craft secure, flexible, and robust web applications specifically aligned with your technical roadmaps.',
    icon: Code,
    bullets: [
      'Modern React & Node.js Architecture',
      'Scalable Enterprise APIs & microservices',
      'Rigorous Automated Testing & Linting Pipelines'
    ],
    visualTitle: 'Clean Code & Full Reactive Systems',
    visualDesc: 'We specialize in implementing fully typed codebases, high performance rendering, and asynchronous event queues that scale seamlessly.'
  },
  {
    title: 'Systems Integration',
    desc: 'Bridge critical business environments seamlessly. Get the exact data you need, in the format you need it, exactly where and when you need it with zero transaction bottlenecks.',
    icon: Network,
    bullets: [
      'Robust Middleware Orchestration',
      'Enterprise Service Bus (ESB) solutions',
      'Data synchronization & automated formats transformation'
    ],
    visualTitle: 'Zero-Bottleneck Middleware Systems',
    visualDesc: 'Keep data moving safely between your ERP, CRM, and cloud servers. We design and monitor fully fail-safe broker pipelines.'
  },
  {
    title: 'Cloud & DevOps Services',
    desc: 'Applications made to fit your business using AWS, Azure, or Google Cloud. Position your workflows as modern, containerized, cloud-first systems that auto-scale securely.',
    icon: Cloud,
    bullets: [
      'Secure Cloud Migration Pathways & Planning',
      'Infrastructure as Code (IaC) using Terraform',
      'SOC 2 Standard deployments and audits preparation'
    ],
    visualTitle: 'Auto-Scaling, Fully Secure Environments',
    visualDesc: 'Build resilient systems utilizing multi-region failovers, continuous threat detection, and container orchestration engines.'
  }
];
</script>