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
              <Check class="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
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
          <arrow-right class="w-4 h-4"/>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { Cpu, Zap, SlidersHorizontal, ShieldCheck, Check, ArrowRight } from 'lucide-vue-next';

const capabilities = [
  {
    title: 'LLM Fine-Tuning & Integration',
    desc: 'Integrate pre-trained language models (like Claude or GPT-4) or deploy fine-tuned local models (Llama 3) configured directly for your proprietary datasets.',
    icon: Cpu,
    bullets: [
      'Retrieval-Augmented Generation (RAG) architecture',
      'Context window optimization & token pricing control',
      'Proprietary training sets creation'
    ]
  },
  {
    title: 'Agentic Process Automation',
    desc: 'Devise fully autonomous multi-agent pipelines that interact, trigger API hooks, analyze incoming files, and complete recursive task backlogs with zero manual friction.',
    icon: Zap,
    bullets: [
      'Self-healing analytical workflows',
      'Fully automated customer support agent layers',
      'Real-time database triggers & integrations'
    ]
  },
  {
    title: 'Custom Machine Learning Systems',
    desc: 'Train dedicated neural pipelines, classification models, or regression analytics engines designed strictly to process high-throughput predictive data streams.',
    icon: SlidersHorizontal,
    bullets: [
      'Data preparation & ETL pipelines automation',
      'Custom regression & classification modelling',
      'High-throughput real-time deployment'
    ]
  },
  {
    title: 'AI Governance & Safety Auditing',
    desc: 'Implement strict filters, guardrails, and compliance matrices ensuring your AI systems are fully SOC 2 secure and respect customer confidentiality metrics.',
    icon: ShieldCheck,
    bullets: [
      'Data leakage prevention structures',
      'Prompt injection defenses auditing',
      'Model performance drift tracking'
    ]
  }
];
</script>