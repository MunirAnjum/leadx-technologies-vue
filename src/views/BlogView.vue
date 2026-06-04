<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-brand-light/20 text-brand-dark font-sans pb-20 relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-red/5 blur-[120px]"></div>
      <div class="absolute top-[40%] -left-40 w-[500px] h-[500px] rounded-full bg-brand-dark/5 blur-[100px]"></div>
    </div>
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-16">
        <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          <BookOpen class="w-3.5 h-3.5" />
          Resources & Insights
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight">Technical Insights</h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          Deep dives into software engineering, scalable multi-cloud architectures, SOC 2 compliance, and enterprise AI integrations.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="(post, index) in posts" :key="index"
          class="bg-white border border-brand-light rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-dark/5 transition-all duration-500 group">
          <div class="flex flex-col">
            <div class="h-48 w-full bg-gradient-to-br from-brand-dark to-brand-dark/95 p-6 flex flex-col justify-between relative overflow-hidden">
              <div class="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <component :is="post.icon" class="absolute right-4 bottom-4 w-24 h-24 text-white/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700" />
              <span class="text-[10px] font-bold tracking-wider text-brand-red uppercase bg-brand-red/10 border border-brand-red/20 px-2.5 py-1 rounded w-fit">
                {{ post.category }}
              </span>
              <span class="inline-flex items-center gap-1 text-[10px] font-bold text-white/50 tracking-wide">
                <Clock class="w-3 h-3" /> {{ post.readTime }}
              </span>
            </div>
            <div class="p-8 flex flex-col gap-4">
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gray">
                <Calendar class="w-3.5 h-3.5" /> {{ post.date }}
              </span>
              <h3 class="font-display text-xl font-bold group-hover:text-brand-red transition-colors duration-200 leading-tight">
                {{ post.title }}
              </h3>
              <p class="text-brand-gray text-sm leading-relaxed">{{ post.summary }}</p>
            </div>
          </div>
          <div class="px-8 pb-8 pt-4 border-t border-brand-dark/5 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red text-[10px] font-bold">LX</div>
              <span class="text-xs font-bold">By {{ post.author }}</span>
            </div>
            <router-link to="/contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:gap-2.5 transition-all duration-200">
              Read Article <ArrowRight class="w-3.5 h-3.5" />
            </router-link>
          </div>
        </article>
      </div>
    </div>
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