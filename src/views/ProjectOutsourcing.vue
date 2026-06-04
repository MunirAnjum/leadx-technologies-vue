<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-white text-brand-dark font-sans pb-20">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-20">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          What We Do
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          Project Outsourcing
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          Hand us the roadmap — we deliver the team. Architects, developers, designers, and project managers working as a full-service unit to ship your product on time and on budget.
        </p>
        <router-link to="/contact" class="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-200 mt-4">
          Build A Full-Service Team
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div v-for="(p, i) in pillars" :key="i" class="p-8 rounded-3xl bg-brand-light border border-brand-light flex flex-col gap-4 hover:shadow-md transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center">
            <component :is="p.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-display text-xl font-bold">{{ p.title }}</h3>
          <p class="text-brand-gray text-sm leading-relaxed">{{ p.desc }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-24 lg:gap-32">
        <div v-for="(s, index) in sections" :key="index" class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div :class="['lg:col-span-6 flex flex-col items-start gap-6', index % 2 === 1 ? 'lg:order-last' : '']">
            <span class="text-[10px] font-bold tracking-widest text-brand-red uppercase">{{ s.eyebrow }}</span>
            <h3 class="font-display text-3xl font-bold text-brand-dark tracking-tight leading-tight">{{ s.title }}</h3>
            <p class="text-brand-gray text-sm sm:text-base leading-relaxed">{{ s.desc }}</p>
            <ul class="flex flex-col gap-3.5 text-sm text-brand-dark font-medium w-full">
              <li v-for="b in s.bullets" :key="b" class="flex items-center gap-3">
                <Check class="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>{{ b }}</span>
              </li>
            </ul>
          </div>
          <div class="lg:col-span-6 bg-brand-light rounded-3xl p-8 border border-brand-light flex flex-col gap-6 relative overflow-hidden group min-h-[300px] justify-center shadow-inner">
            <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
            <div class="flex flex-col gap-4 relative z-10 text-center items-center">
              <span class="text-[10px] font-bold tracking-widest text-brand-red uppercase">Team Standard</span>
              <h4 class="font-display font-semibold text-lg max-w-sm text-brand-dark">{{ s.visualTitle }}</h4>
              <p class="text-brand-gray text-xs max-w-xs leading-relaxed">{{ s.visualDesc }}</p>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white text-[10px] font-bold text-brand-dark border border-brand-dark/5 shadow-sm mt-2">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                Sprint In Progress
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-24 bg-brand-red rounded-3xl p-10 md:p-16 text-white text-center flex flex-col items-center gap-5">
        <h2 class="font-display text-3xl sm:text-4xl font-bold">Scale your delivery team in days</h2>
        <p class="max-w-2xl text-white/90 text-sm sm:text-base">Senior engineers and product specialists ready to plug into your roadmap.</p>
        <router-link to="/contact" class="inline-flex items-center gap-2 bg-white text-brand-red px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-light transition-all">Get In Touch</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Landmark,
  Truck,
  Users,
  Compass,
  Code,
  PenTool,
  FileText,
  ClipboardList,
  Settings,
  Check
} from 'lucide-vue-next';

const StrategyIcon = Compass;
const TruckIcon = Truck;
const UsersIcon = Users;

const pillars = [
  {
    title: 'Strategy',
    desc: 'Product strategy, discovery workshops, and roadmap planning aligned to business outcomes.',
    icon: StrategyIcon
  },
  {
    title: 'Delivery',
    desc: 'Senior cross-functional teams shipping production-grade software on agile cadences.',
    icon: TruckIcon
  },
  {
    title: 'Management',
    desc: 'Dedicated PMs, daily standups, and transparent reporting from kickoff to launch.',
    icon: UsersIcon
  }
];

const sections = [
  {
    eyebrow: 'Architects',
    title: 'Solution Architects',
    desc: 'Senior architects design systems built to scale — choosing the right patterns, platforms, and integrations.',
    bullets: [
      'Domain-driven design',
      'Cloud-native blueprints',
      'Performance & security reviews'
    ],
    icon: Landmark
  },
  {
    eyebrow: 'Developers',
    title: 'Engineers & Developers',
    desc: 'Full-stack engineers across web, mobile, backend, and data — vetted for quality and communication.',
    bullets: [
      'Senior-only engineering teams',
      'Test-driven development',
      'Code reviews on every PR'
    ],
    icon: Code
  },
  {
    eyebrow: 'Designers',
    title: 'Product Designers',
    desc: 'UX research, interaction design, and visual systems crafted to delight users and meet business goals.',
    bullets: [
      'User research & journey mapping',
      'High-fidelity prototypes',
      'Design systems & handoff'
    ],
    icon: PenTool
  },
  {
    eyebrow: 'Business Analysts',
    title: 'Business Analysts',
    desc: 'Bridge product and engineering with clear requirements, acceptance criteria, and stakeholder alignment.',
    bullets: [
      'Requirements elicitation',
      'User stories & acceptance criteria',
      'Stakeholder facilitation'
    ],
    icon: FileText
  },
  {
    eyebrow: 'Project Managers',
    title: 'Project Managers',
    desc: 'Experienced PMs run the rhythm — planning, risk management, and transparent status throughout.',
    bullets: [
      'Agile / scrum facilitation',
      'Risk & dependency tracking',
      'Weekly executive reporting'
    ],
    icon: ClipboardList
  },
  {
    eyebrow: 'Tech Stack',
    title: 'Modern Tech Stack',
    desc: 'We work across the modern ecosystem and pick the right tool for the job, not the trend.',
    bullets: [
      'React, Vue, Node, .NET, Python',
      'AWS, Azure, GCP',
      'Postgres, MongoDB, Redis, Kafka'
    ],
    icon: Settings
  }
];
</script>