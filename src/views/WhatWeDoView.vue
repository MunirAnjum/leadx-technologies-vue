<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-brand-light/30 text-brand-dark font-sans pb-20">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Top Title Header -->
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-16 md:mb-20">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          Our Capabilities
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          Proven Engineering Specialists
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          Build a balanced, high-velocity engineering squad from our proven technology experts. Embed supplemental developers to support internal staffs, or secure a full managed delivery team.
        </p>
      </div>

      <!-- Expert Deck Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(expert, index) in experts" 
          :key="index"
          class="bg-white border border-brand-light rounded-3xl p-8 shadow-sm flex flex-col justify-between gap-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
        >
          <div class="flex flex-col gap-6">
            <!-- Icon and Onboarding Tag -->
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-brand-red/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <component :is="expert.icon" class="w-6 h-6 flex-shrink-0" />
              </div>
              <span class="text-[10px] font-bold tracking-wider text-brand-gray uppercase bg-brand-light px-2.5 py-1 rounded-full select-none">
                {{ expert.experience }} Avg Exp
              </span>
            </div>

            <!-- Content -->
            <div class="flex flex-col gap-2">
              <h3 class="font-display text-xl font-bold text-brand-dark group-hover:text-brand-red transition-colors duration-200">
                {{ expert.title }}
              </h3>
              <p class="text-brand-gray text-sm leading-relaxed">
                {{ expert.desc }}
              </p>
            </div>

            <!-- Tech Tags -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span 
                v-for="tech in expert.tech" 
                :key="tech"
                class="text-[10px] font-semibold text-brand-dark/70 bg-brand-light/60 px-2 py-0.5 rounded"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Bottom CTA link -->
          <div class="border-t border-brand-dark/5 pt-4">
            <router-link 
              to="/contact" 
              class="w-full inline-flex items-center justify-center gap-2 border border-brand-dark/10 hover:border-brand-red hover:bg-brand-red/5 text-brand-dark hover:text-brand-red py-3 rounded-xl text-xs font-bold transition-all duration-200"
            >
              Consult With An Expert
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue';

const ChessIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0V9.75m-5.007 0V9.75m5.007 0a3 3 0 1 1-6 0m6 0h-6m9-1.5a3 3 0 1 0-6 0v3h6v-3Z' })
]);
const TerminalIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5' })
]);
const PaintIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9.53 16.122A3 3 0 0 0 12 20.25a3 3 0 0 0 2.47-4.128M9.53 16.122a3 3 0 0 1 4.94 0m-4.94 0-.497-.497A3.75 3.75 0 0 1 9.53 11.25V9.75a3.75 3.75 0 0 1 3-3.675v.006A3.75 3.75 0 0 1 15 9.75v1.5a3.75 3.75 0 0 1-.47 1.875l-.497.497Z' })
]);
const BrainIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925-3.546 5.974 5.974 0 0 0-4.133-1.488A5.986 5.986 0 0 0 3 9.75a3.75 3.75 0 0 0 2.72 3.633A3.75 3.75 0 0 0 12 18Z' })
]);
const ChartIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z' })
]);
const ClipboardIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 0A48.536 48.536 0 0 1 12 3c1.03 0 1.9.693 2.166 1.638m-7.377 0a48.11 48.11 0 0 1-3.478-.397m-1.2 13.562c.183.3.461.547.792.686m-1.2-.686a2.25 2.25 0 0 1-.225-1.926l1.242-4.7c.08-.303.26-.572.508-.75l3.52-2.518c.248-.178.55-.262.85-.236l4.75.4a2.25 2.25 0 0 1 1.942 2.656L14 20.25H6Z' })
]);

const experts = [
  {
    title: 'Enterprise Architects',
    desc: 'A seasoned cloud and systems architect establishes a solid technical approach for your application roadmap, tailored to high scalability metrics and zero data bottlenecks.',
    experience: '12+ Years',
    icon: ChessIcon,
    tech: ['AWS Cloud', 'Multi-tenant systems', 'Docker/K8s', 'Security']
  },
  {
    title: 'Full-Stack Developers',
    desc: 'Senior developers specialized in building front-to-back software components strictly aligned with architectural requirements, producing clean and efficient code.',
    experience: '8+ Years',
    icon: TerminalIcon,
    tech: ['React / Vue', 'Node.js', 'PostgreSQL', 'TypeScript']
  },
  {
    title: 'UI/UX Designers',
    desc: 'From wireframes to final interaction mockups, our designers coordinate with product managers to deliver slick, premium, and frictionless user flows.',
    experience: '7+ Years',
    icon: PaintIcon,
    tech: ['Figma', 'Prototyping', 'Design Systems', 'Micro-interactions']
  },
  {
    title: 'AI Consultants',
    desc: 'Identify automation pipelines inside your workflow, training models, implementing large language models, and developing clean machine learning components.',
    experience: '6+ Years',
    icon: BrainIcon,
    tech: ['Python', 'PyTorch / TensorFlow', 'OpenAI APIs', 'LLM Tuning']
  },
  {
    title: 'Systems Analysts',
    desc: 'Closely dissect business operations, designing clear technical integration roadmaps and functional requirements to accelerate engineering backlogs.',
    experience: '9+ Years',
    icon: ChartIcon,
    tech: ['System flowcharts', 'Data mapping', 'API specifications']
  },
  {
    title: 'Agile Project Managers',
    desc: 'Expertly versed in agile delivery metrics, sprint management, and cross-functional coordination to keep engineering pipelines moving on time and on budget.',
    experience: '8+ Years',
    icon: ClipboardIcon,
    tech: ['Scrum / Kanban', 'Jira / Linear', 'KPI Reporting', 'Risk Matrix']
  }
];
</script>