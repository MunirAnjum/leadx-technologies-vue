<template>
  <div class="page-wrap">
    <!-- HERO -->
    <section class="hero-dark">
      <div class="hero-dark__bg">
        <div class="hero-glow-red"></div>
        <div class="hero-glow-white"></div>
      </div>
      <div class="container-x pt-20 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="eyebrow-dark mb-6">
            <BookOpen class="w-3.5 h-3.5" />
            Resources & Insights
          </div>
          <h1 class="h-hero text-white mb-6">
            Technical
            <span class="text-gradient-red">Insights</span>
          </h1>
          <p class="text-white/70 text-lg leading-relaxed max-w-3xl">
            Deep dives into software engineering, scalable cloud systems, SOC 2 compliance, and enterprise AI integrations.
          </p>
        </div>
      </div>
    </section>

    <!-- CONTENT GRID -->
    <section class="section section-soft">
      <div class="container-x">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="(post, index) in posts" :key="index"
            class="group card card-hover overflow-hidden flex flex-col p-0">

            <!-- TOP -->
            <div class="h-48 bg-brand-dark p-6 relative overflow-hidden">
              <div class="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <component :is="iconMap[post.category] || BookOpen"
                class="absolute right-4 bottom-4 w-24 h-24 text-white/10 group-hover:scale-110 transition-transform duration-700" />

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
              <p class="text-brand-gray text-sm leading-relaxed">{{ post.summary }}</p>
            </div>

            <!-- FOOTER -->
            <div class="px-8 pb-8 pt-4 border-t border-brand-dark/5 flex items-center justify-between mt-auto">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red text-[10px] font-bold">
                  LX
                </div>
                <span class="text-xs font-bold">By {{ post.author }}</span>
              </div>
              <router-link to="/contact" class="btn-primary !px-6 !py-2.5 text-sm">
                Get Started <ArrowRight class="w-4 h-4" />
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-sm section-soft">
      <div class="container-narrow">
        <div class="cta-panel">
          <h2 class="cta-title">
            Want more technical insights?
          </h2>
          <p class="cta-subtitle">
            Get updates on architecture, AI engineering, and enterprise-grade system design.
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
import { ref, onMounted } from 'vue';
import { api } from '@/utils/apiClient';
import { BookOpen, ArrowRight, Calendar, Clock, Cloud, Shield, Cpu, Database, Code2, Layers } from 'lucide-vue-next';

const posts = ref([]);
async function loadBlogs() {
  try {
    const data = await api.listBlogs();
    posts.value = data;
  } catch (err) {
    console.error("Failed to load blogs:", err);
  }
}
const iconMap = {
  Cloud,
  Security: Shield,
  AI: Cpu,
  Data: Database,
  Engineering: Code2,
  Architecture: Layers
};
onMounted(loadBlogs);
// const posts = [
//   { category: 'Cloud',        readTime: '6 min read', date: 'May 28, 2026', title: 'Zero-Downtime Cloud Migrations at Scale',     summary: 'Patterns for moving production workloads to AWS, Azure, or GCP without breaking customer experience.', author: 'LeadX Team', icon: Cloud },
//   { category: 'Security',     readTime: '8 min read', date: 'May 14, 2026', title: 'A Practical Guide to SOC 2 for Engineering', summary: 'What auditors actually look for and how to bake controls into your SDLC from day one.',               author: 'LeadX Team', icon: Shield },
//   { category: 'AI',           readTime: '7 min read', date: 'Apr 30, 2026', title: 'Integrating LLMs into Enterprise Workflows',  summary: 'From RAG pipelines to function calling — building production-grade AI features that scale.',          author: 'LeadX Team', icon: Cpu },
//   { category: 'Data',         readTime: '5 min read', date: 'Apr 15, 2026', title: 'Modernizing Legacy Data Pipelines',           summary: 'Replacing nightly batch jobs with event-driven streaming for real-time analytics.',                 author: 'LeadX Team', icon: Database },
//   { category: 'Engineering',  readTime: '9 min read', date: 'Mar 28, 2026', title: 'API Design Principles for Long-Lived Systems',summary: 'Versioning, contracts, and observability — designing APIs your team will love five years from now.', author: 'LeadX Team', icon: Code2 },
//   { category: 'Architecture', readTime: '6 min read', date: 'Mar 12, 2026', title: 'Microservices vs Modular Monoliths in 2026',  summary: 'When to split, when to consolidate, and how to choose without regret.',                              author: 'LeadX Team', icon: Layers }
// ];
</script>
