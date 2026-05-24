<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-white text-brand-dark font-sans pb-20">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Top Title Header -->
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-20">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          Proven Success
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          Our Case Studies
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          See how our enterprise architects and supplemental developers partnered with leading organizations to deploy scalable systems and streamline digital transformations.
        </p>
      </div>
      <!-- Case Studies Grid -->
      <div class="flex flex-col gap-16 md:gap-24">
        <div 
          v-for="(study, index) in studies" 
          :key="index"
          class="bg-brand-light/40 border border-brand-light rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col gap-10 hover:shadow-md transition-all duration-300 relative group overflow-hidden"
        >
          <!-- Header and Metric Callout -->
          <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-brand-dark/5">
            <div class="flex flex-col gap-3">
              <span class="text-xs font-bold text-brand-red uppercase tracking-wider">
                {{ study.client }}
              </span>
              <h3 class="font-display text-2xl sm:text-3xl font-bold text-brand-dark tracking-tight leading-tight">
                {{ study.title }}
              </h3>
            </div>
            
            <!-- Metric badge -->
            <div class="bg-brand-red/10 text-brand-red px-6 py-4 rounded-2xl flex flex-col items-center justify-center text-center min-w-[140px] select-none">
              <span class="font-display text-3xl font-bold leading-none">{{ study.metricVal }}</span>
              <span class="text-[10px] font-bold tracking-wider uppercase mt-1 text-brand-dark/80">{{ study.metricLabel }}</span>
            </div>
          </div>
          <!-- Grid: Challenge, Solution, Result -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="flex flex-col gap-3">
              <h4 class="font-display font-bold text-base text-brand-dark flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                The Challenge
              </h4>
              <p class="text-brand-gray text-sm leading-relaxed">
                {{ study.challenge }}
              </p>
            </div>
            
            <div class="flex flex-col gap-3">
              <h4 class="font-display font-bold text-base text-brand-dark flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                Our Solution
              </h4>
              <p class="text-brand-gray text-sm leading-relaxed">
                {{ study.solution }}
              </p>
            </div>
            
            <div class="flex flex-col gap-3">
              <h4 class="font-display font-bold text-base text-brand-dark flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                The Result
              </h4>
              <p class="text-brand-gray text-sm leading-relaxed">
                {{ study.result }}
              </p>
            </div>
          </div>
          <!-- Bottom Footer Link -->
          <div class="flex justify-end pt-4 border-t border-brand-dark/5">
            <router-link 
              to="/contact" 
              class="inline-flex items-center gap-2 text-brand-red font-bold hover:gap-3 transition-all duration-200"
            >
              Partner With Us
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const studies = [
  {
    client: 'Quantum ERP Systems',
    title: 'Secure Cloud Architecture Migration & ERP Integration',
    challenge: 'Quantum needed to migrate high-risk enterprise ERP datasets to the cloud without violating complex compliance structures or introducing synchronization latency.',
    solution: 'LeadX Architects designed a fully SOC 2 compliant, multi-tenant AWS cloud framework utilizing Infrastructure as Code (Terraform) and secure event streams.',
    result: 'Zero transaction data lost, complete SOC 2 Type II verification, and average data synchronization latencies dropped below 200 milliseconds.',
    metricVal: '< 200ms',
    metricLabel: 'Sync Latency'
  },
  {
    client: 'Volvo Group',
    title: 'Supplemental Agile Augmentation & Delivery Velocity',
    challenge: 'Volvo Group required immediate developer resources to tackle critical feature backlogs in their internal logistics orchestration portals on a strict deadline.',
    solution: 'Embedded three LeadX senior full-stack developers into internal logistics scrum pipelines within 5 business days, fully matching Volvo\'s tooling sets.',
    result: 'Logistics sprint velocity climbed by 30% inside the first sprint. Clean, robust commits were introduced with zero friction, allowing Volvo to hit their product deadline.',
    metricVal: '+30%',
    metricLabel: 'Sprint Velocity'
  },
  {
    client: 'NDC Solutions',
    title: 'Transforming Legacy Batch Reporting to AWS Reactive Portals',
    challenge: 'NDC had a batch-based legacy pipeline that ran complex reports overnight, leaving staff with stale daily analytics and high compute loads.',
    solution: 'Designed and deployed a modern reactive streaming architecture using AWS Lambda and real-time WebSockets, turning batch pipelines into streaming portals.',
    result: 'Nightly compute bottlenecks were eliminated, and NDC administrators secured access to live analytical dashboards running dynamic data.',
    metricVal: '100%',
    metricLabel: 'Real-Time Data'
  }
];
</script>