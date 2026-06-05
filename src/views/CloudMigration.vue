<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-white text-brand-dark font-sans pb-20">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-20">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          What We Do
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          Cloud Migration
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          Modernize your stack with secure, cost-efficient cloud architecture on AWS, Azure, or Google Cloud. From assessment to cutover, we deliver migrations with zero data loss and minimal downtime.
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-200 mt-4"
        >
          Plan Your Migration
          <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div
          v-for="(p, i) in pillars"
          :key="i"
          class="p-8 rounded-3xl bg-brand-light border border-brand-light flex flex-col gap-4 hover:shadow-md transition-all duration-300"
        >
          <div class="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center">
            <component :is="p.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-display text-xl font-bold">{{ p.title }}</h3>
          <p class="text-brand-gray text-sm leading-relaxed">{{ p.desc }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-24 lg:gap-32">
        <div
          v-for="(s, index) in sections"
          :key="index"
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
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
              <span class="text-[10px] font-bold tracking-widest text-brand-red uppercase">Cloud Standard</span>
              <h4 class="font-display font-semibold text-lg max-w-sm text-brand-dark">{{ s.visualTitle }}</h4>
              <p class="text-brand-gray text-xs max-w-xs leading-relaxed">{{ s.visualDesc }}</p>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white text-[10px] font-bold text-brand-dark border border-brand-dark/5 shadow-sm mt-2">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                Active Migration
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-24 bg-brand-dark rounded-3xl p-10 md:p-16 text-white text-center flex flex-col items-center gap-5">
        <h2 class="font-display text-3xl sm:text-4xl font-bold">Move to cloud with confidence</h2>
        <p class="max-w-2xl text-white/90 text-sm sm:text-base">Let us assess your environment and design a migration plan that fits your budget and timeline.</p>
        <router-link to="/contact" class="relative z-10 inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-full font-bold hover:bg-red-700 active:scale-95 transition">
          Get Started 
          <ArrowRight class="w-4 h-4" />
        </router-link>      
      </div>
    </div>
  </div>
</template>

<script setup>
import { Cloud, Cog, ShieldCheck, Network, ArrowRight, Check } from 'lucide-vue-next';

const pillars = [
  {
    title: 'Architecture',
    desc: 'Right-sized cloud designs that balance performance, resilience, and cost from day one.',
    icon: Cloud
  },
  {
    title: 'Process',
    desc: 'Phased migration playbooks with rollback safety, validation gates, and zero-downtime cutovers.',
    icon: Cog
  },
  {
    title: 'Security',
    desc: 'IAM, encryption, and SOC 2 aligned controls baked into every layer of the deployment.',
    icon: ShieldCheck
  }
];

const sections = [
  { eyebrow: 'Architecture',
   icon: Cloud,
    title: 'Cloud Architecture',
    desc: 'We design multi-region, multi-AZ environments tuned for your workloads using AWS, Azure, or GCP best practices.',
    bullets: ['Well-Architected Framework reviews', 'Infrastructure as Code (Terraform/CDK)', 'Auto-scaling & cost optimization'],
    visualTitle: 'Right-Sized Environments',
    visualDesc: 'Performance baselines, cost projections, and reserved capacity planning before a single byte moves.' },
  { eyebrow: 'Process',
   icon: Network,
    title: 'Migration Process',
    desc: 'A clear, staged path: assess, plan, lift, refactor, validate, and cut over with confidence.',
    bullets: ['Application discovery & dependency mapping', 'Wave-based migration planning', 'Automated validation suites'],
    visualTitle: 'Zero-Downtime Cutovers',
    visualDesc: 'Blue/green deployments, traffic-shifting, and rehearsed rollback procedures for every workload.' },
  { eyebrow: 'Security',
   icon: ShieldCheck, 
   title: 'Security & Compliance', 
   desc: 'Identity, encryption, network segmentation, and monitoring built into the platform from the start.',
    bullets: ['Zero-trust IAM & SSO', 'KMS encryption at rest and in transit', 'Continuous compliance monitoring'],
    visualTitle: 'Compliance-Ready Cloud', 
    visualDesc: 'SOC 2, HIPAA, and GDPR aligned configurations with audit trails ready for review.' },
  { eyebrow: 'Infrastructure', 
  icon: Cog, 
  title: 'Managed Infrastructure', 
  desc: 'Day-2 operations, observability, and continuous optimization to keep your cloud running clean.',
    bullets: ['24/7 monitoring & alerting', 'Cost governance & FinOps', 'Patch & upgrade automation'],
    visualTitle: 'Run-It-For-You Operations', 
    visualDesc: 'Proactive issue detection, response runbooks, and continuous tuning by senior cloud engineers.' }
];
</script>