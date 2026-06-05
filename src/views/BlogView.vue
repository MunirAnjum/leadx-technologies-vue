<template>
  <div class="overflow-hidden bg-white px-4 sm:px-16 lg:px-14 text-brand-dark font-sans">

    <!-- HERO -->
    <section class="relative py-32 bg-brand-dark overflow-hidden rounded-b-[50px]">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-brand-red/15 blur-[140px]"></div>
        <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 pt-20 relative z-10">
        <div class="max-w-4xl mx-auto">

          <div class="inline-flex gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-brand-red/15 border border-brand-red/20 text-brand-red uppercase mb-6">
            <BookOpen class="w-3.5 h-3.5" />
            Resources & Insights
          </div>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Technical
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-orange-400">
              Insights
            </span>
          </h1>

          <p class="text-white/70 text-lg leading-relaxed max-w-3xl">
            Deep dives into software engineering, scalable cloud systems, SOC 2 compliance, and enterprise AI integrations.
          </p>
        </div>
      </div>
    </section>

    <!-- CONTENT GRID -->
    <section class="py-20 md:py-28 bg-brand-light/20">
      <div class="max-w-7xl mx-auto px-6">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <article
            v-for="(post, index) in posts"
            :key="index"
            class="group rounded-3xl border border-brand-dark/10 bg-white overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >

            <!-- TOP -->
            <div class="h-48 bg-brand-dark p-6 relative overflow-hidden">
              <div class="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <component
                :is="post.icon"
                class="absolute right-4 bottom-4 w-24 h-24 text-white/10 group-hover:scale-110 transition-transform duration-700"
              />

              <span class="text-[10px] font-bold tracking-wider text-brand-red uppercase bg-brand-red/10 border border-brand-red/20 px-2.5 py-1 rounded w-fit">
                {{ post.category }}
              </span>

              <span class="inline-flex items-center gap-1 text-[10px] font-bold text-white/50 mt-2">
                <Clock class="w-3 h-3" /> {{ post.readTime }}
              </span>
            </div>

            <!-- BODY -->
            <div class="p-8 flex flex-col gap-4">
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gray">
                <Calendar class="w-3.5 h-3.5" /> {{ post.date }}
              </span>

              <h3 class="font-display text-xl font-bold group-hover:text-brand-red transition">
                {{ post.title }}
              </h3>

              <p class="text-brand-gray text-sm leading-relaxed">
                {{ post.summary }}
              </p>
            </div>

            <!-- FOOTER -->
            <div class="px-8 pb-8 pt-4 border-t border-brand-dark/5 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red text-[10px] font-bold">
                  LX
                </div>
                <span class="text-xs font-bold">By {{ post.author }}</span>
              </div>

              <router-link
                to="/contact"
                class="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition"
              >
                Get Started
                <ArrowRight class="w-4 h-4" />
              </router-link>
            </div>

          </article>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-24 bg-brand-light/20">
      <div class="max-w-5xl mx-auto px-6">

        <div class="rounded-3xl bg-brand-dark text-white p-10 md:p-16 text-center flex flex-col items-center gap-5 relative overflow-hidden">
          <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-red/20 blur-3xl"></div>

          <h2 class="font-display text-3xl sm:text-4xl font-bold relative z-10">
            Want more technical insights?
          </h2>

          <p class="max-w-2xl text-white/80 text-sm sm:text-base relative z-10">
            Get updates on architecture, AI engineering, and enterprise-grade system design.
          </p>

          <router-link
            to="/contact"
            class="relative z-10 inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-full font-bold hover:bg-red-700 active:scale-95 transition"
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
import { ArrowRight, BookOpen, Calendar, Clock, ShieldCheck, BrainCircuit, Workflow } from 'lucide-vue-next';
const posts = [
  {
    title: 'The Path to SOC 2 Type II: An Engineering Roadmap',
    summary: 'A detailed breakdown of infrastructure compliance requirements, continuous vulnerability logging, and automated configurations checking.',
    category: 'Security',
    date: 'May 18, 2026',
    readTime: '6 min read',
    author: 'LeadX Architects',
     icon: ShieldCheck
  },
  {
    title: 'RAG vs Fine-Tuning: Structuring Enterprise AI Data',
    summary: 'Assess when to utilize Retrieval-Augmented Generation workflows versus training custom models, contrasting performance, token pricing, and data latency.',
    category: 'Artificial Intelligence',
    date: 'May 12, 2026',
    readTime: '8 min read',
    author: 'AI Advisory Lead',
    icon: BrainCircuit
  },
  {
    title: 'Transitioning to Event-Driven Systems Integration',
    summary: 'How to replace batch-processing legacy synchronization pipelines with real-time broker middleware (RabbitMQ/SQS) maintaining zero transaction bottlenecks.',
    category: 'Systems Integration',
    date: 'April 28, 2026',
    readTime: '5 min read',
    author: 'Systems Architect',
     icon: Workflow
  }
];
</script>