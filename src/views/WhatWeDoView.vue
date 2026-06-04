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
                <component :is="expert.icon" class="w-6 h-6" />
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
import {
  Crown,
  Terminal,
  Paintbrush,
  Brain,
  BarChart3,
  ClipboardList
} from 'lucide-vue-next';

const experts = [
  {
    title: 'Enterprise Architects',
    desc: 'A seasoned cloud and systems architect establishes a solid technical approach for your application roadmap, tailored to high scalability metrics and zero data bottlenecks.',
    experience: '12+ Years',
    icon: Crown,
    tech: ['AWS Cloud', 'Multi-tenant systems', 'Docker/K8s', 'Security']
  },
  {
    title: 'Full-Stack Developers',
    desc: 'Senior developers specialized in building front-to-back software components strictly aligned with architectural requirements, producing clean and efficient code.',
    experience: '8+ Years',
    icon: Terminal,
    tech: ['React / Vue', 'Node.js', 'PostgreSQL', 'TypeScript']
  },
  {
    title: 'UI/UX Designers',
    desc: 'From wireframes to final interaction mockups, our designers coordinate with product managers to deliver slick, premium, and frictionless user flows.',
    experience: '7+ Years',
    icon: Paintbrush,
    tech: ['Figma', 'Prototyping', 'Design Systems', 'Micro-interactions']
  },
  {
    title: 'AI Consultants',
    desc: 'Identify automation pipelines inside your workflow, training models, implementing large language models, and developing clean machine learning components.',
    experience: '6+ Years',
    icon: Brain,
    tech: ['Python', 'PyTorch / TensorFlow', 'OpenAI APIs', 'LLM Tuning']
  },
  {
    title: 'Systems Analysts',
    desc: 'Closely dissect business operations, designing clear technical integration roadmaps and functional requirements to accelerate engineering backlogs.',
    experience: '9+ Years',
    icon: BarChart3,
    tech: ['System flowcharts', 'Data mapping', 'API specifications']
  },
  {
    title: 'Agile Project Managers',
    desc: 'Expertly versed in agile delivery metrics, sprint management, and cross-functional coordination to keep engineering pipelines moving on time and on budget.',
    experience: '8+ Years',
    icon: ClipboardList,
    tech: ['Scrum / Kanban', 'Jira / Linear', 'KPI Reporting', 'Risk Matrix']
  }
];
</script>