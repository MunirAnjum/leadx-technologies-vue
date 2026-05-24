<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-[#0A0A0A] text-white font-sans pb-20 relative overflow-hidden">
    <!-- Ambient glowing background blobs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] rounded-full bg-brand-red/10 blur-[130px]"></div>
      <div class="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]"></div>
      <div class="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]"></div>
      <!-- Futuristic Dot Matrix Grid -->
      <div class="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Top Title Header -->
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-20">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/20 text-brand-red border border-brand-red/30 uppercase tracking-wider">
          Futuristic Tech
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">
          Artificial Intelligence Solutions
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed max-w-2xl">
          Identify and implement automated machine learning pipelines, fine-tuned neural models, and secure large language models to automate operations cleanly.
        </p>
      </div>

      <!-- Main AI Capabilities Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div 
          v-for="(cap, index) in capabilities" 
          :key="index"
          class="bg-white/5 border border-white/10 hover:border-brand-red/50 hover:bg-white/[0.07] rounded-3xl p-8 sm:p-10 transition-all duration-300 group flex flex-col justify-between gap-8 relative overflow-hidden"
        >
          <div class="flex flex-col gap-6">
            <!-- Icon -->
            <div class="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <component :is="cap.icon" class="w-6 h-6" />
            </div>
            
            <div class="flex flex-col gap-3">
              <h3 class="font-display text-2xl font-bold text-white tracking-tight">
                {{ cap.title }}
              </h3>
              <p class="text-brand-gray text-sm leading-relaxed">
                {{ cap.desc }}
              </p>
            </div>
          </div>

          <!-- Bottom Check List -->
          <div class="border-t border-white/5 pt-6 flex flex-col gap-3">
            <div 
              v-for="bullet in cap.bullets" 
              :key="bullet"
              class="flex items-center gap-2.5 text-xs text-white/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3.5 h-3.5 text-brand-red flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span>{{ bullet }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Box -->
      <div class="relative rounded-3xl bg-gradient-to-r from-brand-red/20 to-purple-900/20 border border-white/10 p-8 sm:p-12 text-center flex flex-col items-center gap-6 max-w-4xl mx-auto shadow-xl backdrop-blur-md">
        <h3 class="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
          Ready to supercharge workflows with custom AI?
        </h3>
        <p class="text-brand-gray text-sm sm:text-base max-w-xl leading-relaxed">
          Set up an interactive advisory sprint with our leading Machine Learning consultants to design your internal automations.
        </p>
        <router-link 
          to="/contact" 
          class="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/35 active:scale-95 transition-all duration-200 mt-2"
        >
          Book AI Advisory Call
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { h } from 'vue';

const CpuIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M8.25 3v1.5M12 3v1.5m3.75-1.5v1.5M8.25 19.5V21M12 19.5V21m3.75-1.5V21m-12-12.75h1.5m-1.5 3h1.5m-1.5 3h1.5m16.5-9h-1.5m1.5 3h-1.5m1.5 3h-1.5M21 8.25a.75.75 0 0 0-.75-.75h-3.75V3.75a.75.75 0 0 0-.75-.75H8.25a.75.75 0 0 0-.75.75v3.75H3.75a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 .75.75h3.75v3.75a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75v-3.75h3.75a.75.75 0 0 0 .75-.75V8.25ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z' })
]);
const BoltIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'm3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' })
]);
const AdjustmentsIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75' })
]);
const ShieldIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z' })
]);

const capabilities = [
  {
    title: 'LLM Fine-Tuning & Integration',
    desc: 'Integrate pre-trained language models (like Claude or GPT-4) or deploy fine-tuned local models (Llama 3) configured directly for your proprietary datasets.',
    icon: CpuIcon,
    bullets: [
      'Retrieval-Augmented Generation (RAG) architecture',
      'Context window optimization & token pricing control',
      'Proprietary training sets creation'
    ]
  },
  {
    title: 'Agentic Process Automation',
    desc: 'Devise fully autonomous multi-agent pipelines that interact, trigger API hooks, analyze incoming files, and complete recursive task backlogs with zero manual friction.',
    icon: BoltIcon,
    bullets: [
      'Self-healing analytical workflows',
      'Fully automated customer support agent layers',
      'Real-time database triggers & integrations'
    ]
  },
  {
    title: 'Custom Machine Learning Systems',
    desc: 'Train dedicated neural pipelines, classification models, or regression analytics engines designed strictly to process high-throughput predictive data streams.',
    icon: AdjustmentsIcon,
    bullets: [
      'Data preparation & ETL pipelines automation',
      'Custom regression & classification modelling',
      'High-throughput real-time deployment'
    ]
  },
  {
    title: 'AI Governance & Safety Auditing',
    desc: 'Implement strict filters, guardrails, and compliance matrices ensuring your AI systems are fully SOC 2 secure and respect customer confidentiality metrics.',
    icon: ShieldIcon,
    bullets: [
      'Data leakage prevention structures',
      'Prompt injection defenses auditing',
      'Model performance drift tracking'
    ]
  }
];
</script>