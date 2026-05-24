<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-brand-light/20 text-brand-dark font-sans pb-20 relative overflow-hidden">
    <!-- Background Ambient Glow -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-red/5 blur-[120px]"></div>
      <div class="absolute top-[40%] -left-40 w-[500px] h-[500px] rounded-full bg-brand-dark/5 blur-[100px]"></div>
    </div>
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Header Section -->
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-16">
        <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
          </svg>
          Resources & Insights
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          Technical Insights
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          Deep dives into software engineering, scalable multi-cloud architectures, SOC 2 compliance, and enterprise AI integrations.
        </p>
      </div>
      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="(post, index) in posts" 
          :key="index"
          class="bg-white border border-brand-light rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-dark/5 transition-all duration-500 group"
        >
          <div class="flex flex-col">
            <!-- Premium top banner with visual abstract SVG pattern -->
            <div class="h-48 w-full bg-gradient-to-br from-brand-dark to-brand-dark/95 p-6 flex flex-col justify-between relative overflow-hidden">
              <!-- Decorative Grid overlay -->
              <div class="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <!-- Abstract geometric lines background -->
              <svg class="absolute right-0 bottom-0 w-36 h-36 text-white/5 opacity-10 transform translate-x-6 translate-y-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" fill="currentColor" viewBox="0 0 100 100">
                <path d="M0,100 C30,40 70,60 100,0 L100,100 Z" />
              </svg>
              
              <span class="text-[10px] font-bold tracking-wider text-brand-red uppercase bg-brand-red/10 border border-brand-red/20 px-2.5 py-1 rounded w-fit select-none">
                {{ post.category }}
              </span>
              <span class="text-[10px] font-bold text-white/50 tracking-wide">{{ post.readTime }}</span>
            </div>
            <!-- Content Area -->
            <div class="p-8 flex flex-col gap-4">
              <span class="text-xs font-semibold text-brand-gray">{{ post.date }}</span>
              <h3 class="font-display text-xl font-bold text-brand-dark group-hover:text-brand-red transition-colors duration-200 leading-tight">
                {{ post.title }}
              </h3>
              <p class="text-brand-gray text-sm leading-relaxed">
                {{ post.summary }}
              </p>
            </div>
          </div>
          <!-- Bottom Footer -->
          <div class="px-8 pb-8 pt-4 border-t border-brand-dark/5 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red text-[10px] font-bold">
                LX
              </div>
              <span class="text-xs font-bold text-brand-dark">By {{ post.author }}</span>
            </div>
            <router-link 
              to="/contact" 
              class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:gap-2.5 transition-all duration-200 group-hover:translate-x-0.5"
            >
              Read Article
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script setup>
const posts = [
  {
    title: 'The Path to SOC 2 Type II: An Engineering Roadmap',
    summary: 'A detailed breakdown of infrastructure compliance requirements, continuous vulnerability logging, and automated configurations checking.',
    category: 'Security',
    date: 'May 18, 2026',
    readTime: '6 min read',
    author: 'LeadX Architects',
  },
  {
    title: 'RAG vs Fine-Tuning: Structuring Enterprise AI Data',
    summary: 'Assess when to utilize Retrieval-Augmented Generation workflows versus training custom models, contrasting performance, token pricing, and data latency.',
    category: 'Artificial Intelligence',
    date: 'May 12, 2026',
    readTime: '8 min read',
    author: 'AI Advisory Lead',
  },
  {
    title: 'Transitioning to Event-Driven Systems Integration',
    summary: 'How to replace batch-processing legacy synchronization pipelines with real-time broker middleware (RabbitMQ/SQS) maintaining zero transaction bottlenecks.',
    category: 'Systems Integration',
    date: 'April 28, 2026',
    readTime: '5 min read',
    author: 'Systems Architect',
  }
];
</script>