<template>
  <div class="page-wrap">

    <!-- HERO -->
    <section class="hero-dark">
      <div class="container-x relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="eyebrow-dark mb-6">
            <Cpu class="w-4 h-4" /> Artificial Intelligence Solutions
          </div>
          <h1 class="h-hero text-white mb-6">
            Build Smarter Products With
            <span class="text-gradient-red">Enterprise AI</span>
          </h1>
          <p class="text-white/70 text-lg leading-relaxed max-w-3xl">
            We help organizations leverage machine learning, large language models, intelligent automation,
            and AI-driven analytics to reduce operational costs, accelerate growth, and create competitive advantages.
          </p>
          <div class="flex flex-wrap gap-4 mt-10">
            <router-link to="/contact" class="btn-secondary">
              Get Started <ArrowRight class="w-4 h-4" />
            </router-link>
            <router-link to="/services" class="btn-outline-light">
              Explore Services
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CAPABILITIES -->
    <section class="section bg-white">
      <div class="container-x">
        <div class="text-center mb-16">
          <h2 class="h-section mb-5">AI Capabilities</h2>
          <p class="max-w-3xl mx-auto text-brand-gray text-lg leading-relaxed">
            From intelligent assistants to advanced machine learning pipelines, we design AI systems
            that create measurable business value.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(cap, i) in capabilities" :key="i" class="group card card-hover p-10">
            <div class="icon-badge-lg mb-8">
              <component :is="cap.icon" class="w-8 h-8" />
            </div>
            <h3 class="h-card mb-4">{{ cap.title }}</h3>
            <p class="text-brand-gray leading-7 mb-8">{{ cap.desc }}</p>
            <ul class="space-y-4">
              <li v-for="bullet in cap.bullets" :key="bullet" class="feature-li">
                <Check class="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" :stroke-width="3" />
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY AI -->
    <section class="section section-soft">
      <div class="container-x">
        <div class="text-center mb-16">
          <h2 class="h-section mb-5">Why Invest In AI?</h2>
          <p class="max-w-3xl mx-auto text-brand-gray text-lg leading-relaxed">
            Modern AI technologies help businesses automate repetitive work, improve decision-making,
            and deliver exceptional customer experiences.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(b, i) in benefits" :key="i" class="card">
            <component :is="b.icon" class="w-10 h-10 text-brand-red mb-5" />
            <h3 class="h-card mb-3">{{ b.title }}</h3>
            <p class="text-brand-gray leading-relaxed">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-sm section-soft">
      <div class="container-narrow">
        <div class="cta-panel">
          <h2 class="cta-title">
            Ready To Build AI-Powered Solutions?
          </h2>
          <p class="cta-subtitle">
            Work with LeadX AI consultants to design, develop, and deploy intelligent systems
            tailored to your business goals.
          </p>
          <router-link to="/contact" class="btn-secondary">
            Get Started <ArrowRight class="w-4 h-4" />
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
    bullets: ['Retrieval-Augmented Generation (RAG) architecture', 'Context window optimization & token pricing control', 'Proprietary training sets creation']
  },
  {
    title: 'Agentic Process Automation',
    desc: 'Devise fully autonomous multi-agent pipelines that interact, trigger API hooks, analyze incoming files, and complete recursive task backlogs with zero manual friction.',
    icon: Zap,
    bullets: ['Self-healing analytical workflows', 'Fully automated customer support agent layers', 'Real-time database triggers & integrations']
  },
  {
    title: 'Custom Machine Learning Systems',
    desc: 'Train dedicated neural pipelines, classification models, or regression analytics engines designed strictly to process high-throughput predictive data streams.',
    icon: SlidersHorizontal,
    bullets: ['Data preparation & ETL pipelines automation', 'Custom regression & classification modelling', 'High-throughput real-time deployment']
  },
  {
    title: 'AI Governance & Safety Auditing',
    desc: 'Implement strict filters, guardrails, and compliance matrices ensuring your AI systems are fully SOC 2 secure and respect customer confidentiality metrics.',
    icon: ShieldCheck,
    bullets: ['Data leakage prevention structures', 'Prompt injection defenses auditing', 'Model performance drift tracking']
  }
];

const benefits = [
  { title: 'Faster Operations',  desc: 'Reduce manual effort through workflow automation and intelligent decision support systems.', icon: Zap },
  { title: 'Better Insights',    desc: 'Transform large datasets into actionable intelligence with custom predictive analytics solutions.', icon: BarChart3 },
  { title: 'Secure Deployment',  desc: 'Enterprise-grade governance, compliance controls, and security standards built into every AI implementation.', icon: ShieldCheck }
];
</script>
