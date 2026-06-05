<template>
  <div class="overflow-hidden bg-white px-4 sm:px-16 lg:px-14 text-brand-dark font-sans">
    <!-- HERO -->
    <section class="relative py-32 bg-brand-dark overflow-hidden rounded-b-[50px]">
      <!-- Background Effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-brand-red/15 blur-[140px]"></div>
        <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]"></div>
        <div
          class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto pt-20 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="inline-flex gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-brand-red/15 border border-brand-red/20 text-brand-red uppercase mb-6"
          >
            <Cpu class="w-4 h-4" />
            Artificial Intelligence Solutions
          </div>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Build Smarter Products With
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-orange-400">
              Enterprise AI
            </span>
          </h1>

          <p class="text-white/70 text-lg leading-relaxed max-w-3xl">
            We help organizations leverage machine learning, large language
            models, intelligent automation, and AI-driven analytics to reduce
            operational costs, accelerate growth, and create competitive
            advantages.
          </p>

          <div class="flex flex-wrap gap-4 mt-10">
            <router-link
              to="/contact"
              class="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-full font-bold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/30 transition-all duration-300"
            >
              Get Started
              <ArrowRight class="w-4 h-4" />
            </router-link>

            <router-link
              to="/services"
              class="inline-flex items-center gap-2 border border-white/15 text-white hover:bg-white/5 px-8 py-3.5 rounded-full font-semibold transition-all duration-300"
            >
              Explore Services
            </router-link>
          </div>

        </div>
      </div>
    </section>
    <!-- <div class="h-5 bg-gradient-to-b from-brand-dark to-white"></div> -->

    <!-- CAPABILITIES -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2
            class="font-display text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5"
          >
            AI Capabilities
          </h2>

          <p
            class="max-w-3xl mx-auto text-brand-gray text-lg leading-relaxed"
          >
            From intelligent assistants to advanced machine learning pipelines,
            we design AI systems that create measurable business value.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div
            v-for="(cap, index) in capabilities"
            :key="index"
            class="group rounded-3xl border border-brand-dark/10 bg-white p-10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-brand-red/5 flex items-center justify-center text-brand-red mb-8 group-hover:bg-brand-red group-hover:text-white transition-all duration-300"
            >
              <component
                :is="cap.icon"
                class="w-8 h-8"
              />
            </div>

            <h3
              class="font-display text-2xl font-bold text-brand-dark mb-4"
            >
              {{ cap.title }}
            </h3>

            <p
              class="text-brand-gray leading-7 mb-8"
            >
              {{ cap.desc }}
            </p>

            <ul class="space-y-4">
              <li
                v-for="bullet in cap.bullets"
                :key="bullet"
                class="flex items-start gap-3"
              >
                <Check
                  class="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0"
                  :stroke-width="3"
                />

                <span class="text-brand-dark font-medium">
                  {{ bullet }}
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <!-- WHY AI -->
    <section class="py-20 md:py-28 bg-brand-light/20">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2
            class="font-display text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5"
          >
            Why Invest In AI?
          </h2>

          <p
            class="max-w-3xl mx-auto text-brand-gray text-lg leading-relaxed"
          >
            Modern AI technologies help businesses automate repetitive work,
            improve decision-making, and deliver exceptional customer
            experiences.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div
            class="bg-white border border-brand-dark/10 rounded-3xl p-8"
          >
            <Zap class="w-10 h-10 text-brand-red mb-5" />
            <h3 class="font-display text-2xl font-bold mb-3">
              Faster Operations
            </h3>
            <p class="text-brand-gray leading-relaxed">
              Reduce manual effort through workflow automation and intelligent
              decision support systems.
            </p>
          </div>

          <div
            class="bg-white border border-brand-dark/10 rounded-3xl p-8"
          >
            <BarChart3 class="w-10 h-10 text-brand-red mb-5" />
            <h3 class="font-display text-2xl font-bold mb-3">
              Better Insights
            </h3>
            <p class="text-brand-gray leading-relaxed">
              Transform large datasets into actionable intelligence with custom
              predictive analytics solutions.
            </p>
          </div>

          <div
            class="bg-white border border-brand-dark/10 rounded-3xl p-8"
          >
            <ShieldCheck class="w-10 h-10 text-brand-red mb-5" />
            <h3 class="font-display text-2xl font-bold mb-3">
              Secure Deployment
            </h3>
            <p class="text-brand-gray leading-relaxed">
              Enterprise-grade governance, compliance controls, and security
              standards built into every AI implementation.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-5xl mx-auto px-6">

        <div
          class="rounded-3xl bg-brand-dark text-white p-10 md:p-16 text-center flex flex-col items-center gap-5 relative overflow-hidden"
        >
          <div
            class="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-red/20 blur-3xl pointer-events-none"
          ></div>

          <h2
            class="font-display text-3xl sm:text-4xl font-bold relative z-10"
          >
            Ready To Build AI-Powered Solutions?
          </h2>

          <p
            class="max-w-2xl text-white/80 text-sm sm:text-base relative z-10"
          >
            Work with LeadX AI consultants to design, develop, and deploy
            intelligent systems tailored to your business goals.
          </p>

          <router-link
            to="/contact"
            class="relative z-10 inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-full font-bold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-300"
          >
            Get Started
            <ArrowRight class="w-4 h-4" />
          </router-link>

        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { Cpu, Zap, SlidersHorizontal, ShieldCheck, Check, ArrowRight, BarChart3 } from 'lucide-vue-next';

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