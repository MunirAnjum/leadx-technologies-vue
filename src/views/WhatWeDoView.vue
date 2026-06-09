<template>
  <div class="page-wrap">

    <!-- HERO -->
    <section class="hero-dark">
      <div class="container-x pt-20 relative z-10">
        <div class="max-w-4xl mx-auto">
          <span class="eyebrow-dark mb-6">
            <Layers class="w-3.5 h-3.5" /> What We Do
          </span>
          <h1 class="h-hero text-white mb-6">
            Strategy. Technology.
            <span class="text-gradient-red">Transformation.</span>
          </h1>
          <p class="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed mt-5">
            A three-phase approach that turns business goals into production software — and keeps it running at peak.
          </p>
          <router-link to="/contact" class="btn-secondary mt-6">
            Get Started <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- APPROACH -->
    <section id="approach" class="section bg-white">
      <div class="container-x">
        <div class="text-center mb-14">
          <span class="eyebrow-line">Our Approach</span>
          <h2 class="h-section mt-3">A Roadmap to Reality</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(p, i) in approach" :key="i" class="card card-hover relative group">
            <span class="absolute top-6 right-6 font-display font-bold text-5xl text-brand-light group-hover:text-brand-red/20 transition-colors">
              0{{ i + 1 }}
            </span>
            <div class="icon-badge mb-6">
              <component :is="p.icon" class="w-7 h-7" />
            </div>
            <h3 class="h-card mb-3">{{ p.title }}</h3>
            <p class="text-brand-gray text-sm leading-relaxed mb-6">{{ p.desc }}</p>
            <ul class="flex flex-col gap-2.5">
              <li v-for="b in p.bullets" :key="b" class="flex items-center gap-2.5 text-sm font-medium">
                <Check class="w-4 h-4 text-brand-red flex-shrink-0" :stroke-width="3" />
                <span>{{ b }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- INDUSTRIES -->
    <section class="section-sm section-muted">
      <div class="container-x">
        <div class="text-center mb-14">
          <span class="eyebrow-line">Industries</span>
          <h2 class="h-section mt-3">Where We Deliver</h2>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(ind, i) in industries" :key="i"
            class="bg-white rounded-2xl p-8 border border-brand-light flex flex-col items-center text-center gap-3 card-hover-sm transition-all duration-300">
            <div class="icon-badge"><component :is="ind.icon" class="w-7 h-7" /></div>
            <h3 class="font-display text-lg font-bold">{{ ind.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- OUTCOMES -->
    <section class="section bg-white">
      <div class="container-x">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(o, i) in outcomes" :key="i"
            class="rounded-3xl bg-brand-dark text-white p-10 flex flex-col gap-4 relative overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div class="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-brand-red/20 blur-3xl"></div>
            <component :is="o.icon" class="w-10 h-10 text-brand-red relative z-10" />
            <h3 class="h-card relative z-10">{{ o.title }}</h3>
            <p class="text-white/70 text-sm leading-relaxed relative z-10">{{ o.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TECH STACK -->
    <section class="section section-muted">
      <div class="container-x">
        <div class="text-center mb-14">
          <span class="eyebrow-line">Toolbelt</span>
          <h2 class="h-section mt-3">Technology Stack</h2>
          <p class="text-brand-gray max-w-2xl mx-auto mt-4">
            From backend frameworks to local LLMs — the stack we use to ship.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(s, i) in stacks" :key="i"
            class="bg-white rounded-2xl border border-brand-light p-6 hover:shadow-md transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center">
                <component :is="s.icon" class="w-5 h-5" />
              </div>
              <h3 class="font-display font-bold text-base">{{ s.title }}</h3>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="t in s.items" :key="t"
                class="text-[11px] font-semibold text-brand-dark/80 bg-brand-light px-2.5 py-1 rounded">
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="section-sm bg-white">
      <div class="container-narrow">
        <div class="cta-panel">
          <div class="cta-panel__glow"></div>
          <h2 class="cta-title">
            Have a project in mind? We're ready. Let's talk.
          </h2>
          <p class="cta-subtitle">
            Tell us about your roadmap — we'll bring the team to execute it.
          </p>
          <router-link to="/contact" class="btn-secondary">
            Contact Us <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  Layers, ArrowRight, Check,
  Map, Cpu, Repeat,
  HeartPulse, Landmark, Shield, Car,
  Lightbulb, Sparkles, TrendingUp,
  Server, Database, Layout, Palette, Cloud, FlaskConical, Wrench, Brain, Terminal, Bot, MessagesSquare, BrainCircuit
} from 'lucide-vue-next';
import bachgroundImage from '@/assets/images/background-image.png'

const approach = [
  { title: 'Strategy',       desc: 'Strategize and create an easy-to-follow roadmap.',   icon: Map,    bullets: ['Business Owner Driven', 'Technical Architecture', 'Phased Approach'] },
  { title: 'Technology',     desc: 'This is where your roadmap meets reality.',          icon: Cpu,    bullets: ['Artificial Intelligence', 'Integrations', 'Implementations'] },
  { title: 'Transformation', desc: 'The extra layer to help manage and maintain your product.', icon: Repeat, bullets: ['Project Management', 'DevOps', 'Reporting & Analytics'] }
];

const industries = [
  { name: 'Healthcare',          icon: HeartPulse },
  { name: 'Financial',           icon: Landmark },
  { name: 'Defense & Aerospace', icon: Shield },
  { name: 'Automotive',          icon: Car }
];

const outcomes = [
  { title: 'Knowledgeable Leaders', desc: 'Seasoned architects guiding product planning end-to-end.', icon: Lightbulb },
  { title: 'Digital Experiences',   desc: 'Polished, modern interfaces backed by clean engineering.', icon: Sparkles },
  { title: 'Maximize Outcomes',     desc: 'Operations and observability that keep delivery on track.', icon: TrendingUp }
];

const stacks = [
  { title: 'Backend',       icon: Server,        items: ['.NET', '.NET Framework', 'Java', 'FluentMigrator', 'Flurl'] },
  { title: 'ORM',           icon: Database,      items: ['Dapper', 'NHibernate', 'Entity Framework'] },
  { title: 'Frontend',      icon: Layout,        items: ['Angular', 'React', 'Blazor / Razor', 'SwiftUI', 'TypeScript', 'Sass/LESS'] },
  { title: 'Design',        icon: Palette,       items: ['Adobe XD', 'Framer', 'Photoshop', 'Illustrator'] },
  { title: 'Cloud',         icon: Cloud,         items: ['AWS', 'Azure', 'Google Cloud'] },
  { title: 'Testing',       icon: FlaskConical,  items: ['NUnit', 'xUnit', 'Moq', 'Selenium', 'Jasmine', 'Karma', 'Protractor'] },
  { title: 'Databases',     icon: Database,      items: ['SQL Server', 'Postgres', 'MongoDB', 'MySQL'] },
  { title: 'DevOps',        icon: Wrench,        items: ['Docker', 'Kubernetes', 'Azure DevOps', 'Git', 'Jenkins'] },
  { title: 'AI Frameworks', icon: Brain,         items: ['Semantic Kernel', 'LangChain', 'LlamaIndex'] },
  { title: 'Local LLMs',    icon: Terminal,      items: ['Ollama', 'vLLM', 'LLama.cpp', 'ONNX', 'NVIDIA Triton'] },
  { title: 'AI Platforms',  icon: Bot,           items: ['OpenAI', 'Vertex AI', 'Bedrock', 'Hugging Face'] },
  { title: 'AI Assistants', icon: MessagesSquare,items: ['ChatGPT', 'Gemini', 'Grok', 'Claude'] },
  { title: 'Open Models',   icon: BrainCircuit,  items: ['Gpt-oss', 'Gemma', 'Qwen', 'Llama'] }
];
</script>
