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
                <ArrowRight class="h-4 w-4"/>
                <span>End-to-end scope management</span>
              </li>
              <li class="flex items-center gap-2.5">
                <ArrowRight class="h-4 w-4"/>
                <span>Rigorous automated QA testing cycles</span>
              </li>
              <li class="flex items-center gap-2.5">
                <ArrowRight class="h-4 w-4"/>
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
              <ArrowRight class="h-4 w-4"/>
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
                <ArrowRight class="h-4 w-4"/>
                <span>Rapid onboarding in under 5 business days</span>
              </li>
              <li class="flex items-center gap-2.5">
                <ArrowRight class="h-4 w-4"/>
                <span>Flexible, month-to-month contracts</span>
              </li>
              <li class="flex items-center gap-2.5">
                <ArrowRight class="h-4 w-4"/>
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
              <ArrowRight class="h-4 w-4"/>
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
import {
  Puzzle,
  Zap,
  Shield,
  Heart,
  ArrowRight
} from 'lucide-vue-next';

const values = [
  {
    title: 'Technical Mastery',
    desc: 'We only hire senior engineers, architects, and product strategists with proven track records.',
    icon: Zap
  },
  {
    title: 'Radical Transparency',
    desc: 'No transaction bottlenecks, hidden fees, or gatekeeping. Open source code standard.',
    icon: Puzzle
  },
  {
    title: 'Security Standard',
    desc: 'All workflows follow rigorous SOC 2 data protection benchmarks natively.',
    icon: Shield
  },
  {
    title: 'Client Longevity',
    desc: 'We develop code structured to facilitate ongoing evolution long after initial deployment.',
    icon: Heart
  }
];
</script>