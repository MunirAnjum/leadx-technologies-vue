<template>
  <div class="overflow-hidden bg-white px-4 sm:px-16 lg:px-14 text-brand-dark font-sans">
    <!-- Hero -->
    <section class="hero-dark">
      <!-- <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-brand-red/15 blur-[140px]"></div>
        <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]"></div>
      </div> -->
      <div class="max-w-7xl mx-auto px-6 pt-20 relative z-10">
        <div class="max-w-4xl mx-auto">
          <span class="inline-flex gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-brand-red/15 border border-brand-red/20 text-brand-red uppercase mb-6">
            <Sparkles class="w-3.5 h-3.5" /> Proven Success
          </span>
          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Our Case Studies
          </h1>
          <p class="text-white/70 text-lg leading-relaxed max-w-3xl">
            See how we partner with forward-thinking organizations to modernize platforms, integrate complex systems, and deliver measurable business outcomes.
          </p>
        </div>
      </div>
    </section>
    <!-- Case Studies -->
    <div class="flex flex-col gap-28 md:gap-36">
      <section
        v-for="(study, index) in studies"
        :key="index"
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-6"
      >
        <!-- Left: Title + Description + CTA -->
        <div :class="['lg:col-span-5 flex flex-col gap-6', index % 2 === 1 ? 'lg:order-last' : '']">
          <span class="text-xs font-bold text-brand-red uppercase tracking-[0.2em]">
            {{ study.client }}
          </span>
          <h2 class="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-brand-dark">
            {{ study.title }}
          </h2>
          <p class="text-brand-gray text-base leading-relaxed">
            {{ study.description }}
          </p>
          <router-link
            to="/contact"
            class="btn-primary"
          >
            Learn More <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
        <!-- Right: Outcome cards with offset grid -->
        <div class="lg:col-span-7 relative">
          <!-- decorative dots -->
          <div
            class="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 w-32 h-32 opacity-60 pointer-events-none bg-[radial-gradient(circle,#E63329_1.2px,transparent_1.2px)] [background-size:10px_10px]"
            aria-hidden="true"
          ></div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div
              v-for="(o, i) in study.outcomes"
              :key="i"
              :class="[
                'bg-white border border-brand-light rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4',
                i % 2 === 1 ? 'sm:mt-10' : ''
              ]"
            >
              <div class="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center">
                <component :is="o.icon" class="w-6 h-6" />
              </div>
              <h3 class="font-display font-bold text-lg text-brand-dark leading-snug">
                {{ o.title }}
              </h3>
              <p class="text-brand-gray text-sm leading-relaxed">
                {{ o.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Final CTA -->
    <section class="py-16 md:py-24 bg-brand-light/20">
      <div class="max-w-5xl mx-auto px-6">
        <div class="mt-28 bg-brand-dark rounded-3xl p-10 md:p-16 text-white text-center flex flex-col items-center gap-5 relative overflow-hidden">
          <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-red/20 blur-3xl pointer-events-none"></div>
          <h2 class="font-display text-3xl sm:text-4xl font-bold relative z-10">
            Want to learn more about how we help clients achieve their goals?
          </h2>
          <p class="max-w-2xl text-white/80 text-sm sm:text-base relative z-10">
            Let's talk through your roadmap and explore how our team can accelerate your next initiative.
          </p>
          <router-link to="/contact" class="btn-secondary">
            Get Started 
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ArrowRight, Sparkles, Wrench, Users, Copy, Cloud, TrendingUp,
  DollarSign, ShieldCheck, Mic, Layers, Trophy, Brain, Plug,
  GitMerge, Rocket, FileSearch, Map, Presentation
} from 'lucide-vue-next';
const studies = [
  {
    client: 'Proxy Voting & Investor Communications',
    title: 'Modernizing a Critical Operational and Reporting Platform',
    description:
      'How we helped a leading proxy voting and investor communications company develop a modern, efficient, and secure solution that revolutionized their operations and set the stage for sustained success.',
    outcomes: [
      { icon: Wrench, title: 'Complete System Modernization', desc: 'Legacy applications were replaced with new technologies like .NET Core and Blazor, ensuring scalability and operational continuity.' },
      { icon: Users, title: 'User-Friendly Design', desc: 'Intuitive interfaces reduced training time, enabling seasonal staff to onboard quickly and perform tasks efficiently.' },
      { icon: Copy, title: 'Streamlined Ballot Processes', desc: 'The redesigned system introduced real-time previews and database-driven print settings, reducing errors and saving significant time during critical operations.' }
    ]
  },
  {
    client: 'Insurance & Salesforce',
    title: 'Streamlined Salesforce Integrations & Reduced Technical Debt',
    description:
      'Seamless connections between Salesforce and external systems delivered real-time data on licensing, enrollment, and compliance — while a system cleanup eliminated redundant automations and outdated fields.',
    outcomes: [
      { icon: Plug, title: 'Streamlined Salesforce Integrations', desc: 'Seamless connections between Salesforce and external systems, such as NIPR and SunFire, deliver real-time data on licensing, enrollment, and compliance.' },
      { icon: GitMerge, title: 'Reduced Technical Debt', desc: 'System cleanup eliminated redundant automations and outdated fields, improving platform stability and user confidence across departments.' },
      { icon: Rocket, title: 'Accelerated Implementation', desc: 'Integration timelines dropped by 80%, transforming multi-month projects into scalable, repeatable solutions delivered in just weeks.' }
    ]
  },
  {
    client: 'FinTech Technology Assessment',
    title: 'Comprehensive Legacy System Assessment & Modernization Roadmap',
    description:
      'A deep architectural assessment of a complex legacy estate, paired with a cloud-focused roadmap and a board-ready narrative that secured executive buy-in for modernization.',
    outcomes: [
      { icon: FileSearch, title: 'Comprehensive Legacy System Assessment', desc: 'Conducted a deep architectural assessment of the company\'s massive and complex legacy systems.' },
      { icon: Map, title: 'Delivered a Cloud-Focused Roadmap', desc: 'Delivered a detailed modernization plan tailored for cloud transformation, focused on scalability, performance and minimal business disruption.' },
      { icon: Presentation, title: 'Board-Ready Modernization Pitch', desc: 'Created a compelling visual and strategic narrative to help their CTO gain board-level buy-in for modernization efforts.' }
    ]
  },
  {
    client: 'Collectors Workbench',
    title: 'Cloud-First Claims Platform Driving Revenue Growth',
    description:
      'A secure, flexible Azure-native solution that empowered collection teams to work claims faster — driving a significant lift in quarterly collections and revenue.',
    outcomes: [
      { icon: Cloud, title: 'Cloud First', desc: 'A secure and flexible solution made for Azure.' },
      { icon: TrendingUp, title: 'Performance Boost', desc: 'Collected 47% more insurance claims in the quarter following deployment vs. the prior quarter.' },
      { icon: DollarSign, title: 'Increased Revenue', desc: 'Collection teams swiftly worked claims and revenue increased by $3.3M per quarter.' }
    ]
  },
  {
    client: '2024 TN HIMSS Hackathon',
    title: 'Generative AI Model for Nurse Training — CARE',
    description:
      'Competing against 15 other teams, we won first place with our AI-powered virtual patient interaction and coaching platform, CARE, aimed at revolutionizing nurse training.',
    outcomes: [
      { icon: Trophy, title: '1st Place Overall', desc: 'Our AI solution placed first among 15 teams, showcasing our expertise and knowledge of healthcare and gen AI.' },
      { icon: Mic, title: 'Text-to-Voice', desc: 'The solution has text-to-voice, which enhances realism by providing human-like responses in nurse-patient simulations.' },
      { icon: Layers, title: 'Multiple Scenarios', desc: 'The CARE program has specific multiple scenarios to represent common yet challenging situations nurses frequently encounter.' }
    ]
  },
  {
    client: 'Generative AI Model',
    title: 'HIPAA-Compliant, Fine-Tuned Generative AI Platform',
    description:
      'An enterprise-grade generative AI solution, fully encrypted and HIPAA compliant, tailored to each patient\'s unique history and continuously improving the more it is used.',
    outcomes: [
      { icon: ShieldCheck, title: 'HIPAA Compliant', desc: 'The AI solution is encrypted, HIPAA compliant, and protected by multi-factor authentication.' },
      { icon: Brain, title: 'Fine-Tuned and Trained', desc: 'The program is tailored to each patient\'s unique history, and it can learn and improve the more it is used and trained.' },
      { icon: Sparkles, title: 'Adaptive Intelligence', desc: 'Continuously adapts to new data and clinical scenarios, delivering reliable insights that scale with the organization.' }
    ]
  }
];
</script>