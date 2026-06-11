<template>
  <div class="page-wrap">
    <!-- HERO -->
    <section class="relative py-16 lg:py-24 xl:py-28 bg-gradient-to-b from-brand-light to-white">
      <div class="container-x relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div class="lg:col-span-6 flex flex-col items-start gap-6">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-brand-red/10 text-brand-red uppercase">
              <Zap class="w-3.5 h-3.5 animate-bounce" />
              Elite Enterprise Software Architects
            </div>
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tight leading-[1.1]">
              Expert Engineers Delivering
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600 block sm:inline">Superior Software</span>
            </h1>
            <p class="text-brand-gray text-base sm:text-lg max-w-lg leading-relaxed">
              We help forward-thinking companies build secure, scalable solutions that streamline operations, modernize legacy systems, and accelerate digital transformation.
            </p>
            <div class="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <router-link to="/contact" class="btn-primary">
                Get Started 
                <ArrowRight class="w-4 h-4" />
              </router-link>
              <router-link to="/services" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-brand-dark/10 hover:border-brand-dark/30 text-brand-dark px-8 py-3.5 rounded-full font-semibold transition active:scale-95 duration-200">
                Explore Pillars
              </router-link>
            </div>
          </div>
          <!-- Mock Code Window -->
          <div class="lg:col-span-6">
            <div class="relative w-full max-w-lg lg:max-w-none mx-auto group">
              <div class="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-brand-red to-brand-dark/20 opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
              <div class="relative rounded-2xl bg-brand-dark border border-white/10 shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-500">
                <div class="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-white/5">
                  <div class="flex items-center gap-1.5">
                    <span class="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
                    <span class="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                    <span class="w-3 h-3 rounded-full bg-[#27C93F]"></span>
                  </div>
                  <span class="text-[10px] text-white/40 font-mono tracking-wider">leadx-core.js</span>
                  <div class="w-12"></div>
                </div>
                <div class="p-6 font-mono text-[11px] sm:text-xs leading-relaxed text-white/90 overflow-x-auto select-none">
                  <div><span class="text-pink-500">import</span> <span class="text-blue-300">Vue</span> <span class="text-pink-500">from</span> <span class="text-green-400">'vue'</span>;</div>
                  <div><span class="text-pink-500">import</span> { <span class="text-yellow-400">CloudArchitect</span> } <span class="text-pink-500">from</span> <span class="text-green-400">'leadx-framework'</span>;</div>
                  <div class="h-4"></div>
                  <div><span class="text-blue-400">const</span> <span class="text-purple-400">leadXConfig</span> <span class="text-pink-500">=</span> {</div>
                  <div class="pl-4"><span class="text-white/60">scale:</span> <span class="text-green-400">"enterprise"</span>,</div>
                  <div class="pl-4"><span class="text-white/60">security:</span> <span class="text-green-400">"soc2-compliant"</span>,</div>
                  <div class="pl-4"><span class="text-white/60">infrastructure:</span> <span class="text-green-400">"multi-cloud"</span>,</div>
                  <div class="pl-4"><span class="text-white/60">reactive:</span> <span class="text-orange-400">true</span></div>
                  <div>};</div>
                  <div class="h-4"></div>
                  <div><span class="text-pink-500">export default</span> <span class="text-blue-400">async function</span> <span class="text-yellow-400">initializeProject</span>() {</div>
                  <div class="pl-4"><span class="text-blue-400">const</span> system <span class="text-pink-500">=</span> <span class="text-pink-500">await</span> <span class="text-yellow-400">CloudArchitect</span>.<span class="text-yellow-300">build</span>(<span class="text-purple-400">leadXConfig</span>);</div>
                  <div class="pl-4 text-brand-gray">// Deployment automation initialized</div>
                  <div class="pl-4">system.<span class="text-yellow-300">optimizeDelivery</span>();</div>
                  <div class="pl-4"><span class="text-pink-500">return</span> system.<span class="text-blue-300">status</span>;</div>
                  <div>}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   <!-- WHAT WE DO -->
  <section class="section bg-white">
    <div class="container-x">
      <!-- Header -->
      <div class="text-center mb-14">
        <div class="flex items-center justify-center gap-4 mb-5">
          <div class="h-px w-20 bg-brand-dark/10"></div>
          <span class="text-xs uppercase tracking-[0.3em] text-brand-gray font-semibold">
            Our Services
          </span>
          <div class="h-px w-20 bg-brand-dark/10"></div>
        </div>

        <h2 class="font-display text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5">
          What We Do
        </h2>

        <p class="max-w-3xl mx-auto text-brand-gray text-lg leading-relaxed">
          LeadX helps organizations transform ideas into successful products through
          strategy, development, and operational excellence.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div
          v-for="(service, index) in whatWeDo"
          :key="index"
          class="card card-hover group"
        >
          <div
            class="icon-badge-lg mb-8"
          >
            <component
              :is="service.icon"
              class="w-9 h-9"
              :stroke-width="2"
            />
          </div>

          <h3 class="h-card mb-5">
            {{ service.title }}
          </h3>

          <p class="text-brand-gray leading-8 mb-8">
            {{ service.description }}
          </p>

          <ul class="space-y-4">
            <li
              v-for="(item, i) in service.items"
              :key="i"
              class="flex items-start gap-3 text-brand-dark font-medium"
            >
              <Check
                class="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0"
                :stroke-width="3"
              />

              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- CTA -->
      <div class="flex justify-center mt-14">
        <router-link
          to="/services"
          class="inline-flex items-center px-10 py-4 rounded-full bg-brand-red text-white font-bold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-300"
        >
          Read More
        </router-link>
      </div>

    </div>
  </section>

  <!-- LEADX AVAILABLE TO YOU -->
  <section class="section section-soft">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5">
          LeadX Available to You
        </h2>

        <p class="max-w-3xl mx-auto text-brand-gray text-lg leading-relaxed">
          Build a team from our proven experts. Whether you need leadership to
          organize digital transformation or engineers to execute your roadmap,
          our specialists are ready to help.
        </p>
      </div>

      <!-- Team Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          v-for="(member, index) in leadxTeam"
          :key="index"
          class="card card-hover"
        >
          <div class="text-brand-red mb-6">
            <component
              :is="member.icon"
              class="w-12 h-12"
              :stroke-width="2"
            />
          </div>

          <h3 class="font-display text-3xl font-bold text-brand-dark mb-4">
            {{ member.title }}
          </h3>

          <p class="text-brand-gray leading-8">
            {{ member.description }}
          </p>
        </div>

      </div>

      <!-- CTA -->
      <div class="flex justify-center mt-14">
        <router-link
          to="/contact"
          class="inline-flex items-center px-10 py-4 rounded-full bg-brand-red text-white font-bold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-300"
        >
          Get Started
        </router-link>
      </div>
    </div>
    </section>
    <!-- CLIENT MARQUEE -->
    <section class="border-y border-brand-light py-10 px-6 sm:px-8 lg:px-16 bg-brand-light/20 overflow-hidden">
      
      <div class="max-w-7xl mx-auto px-6 mb-6">
        <div class="text-center mb-8">
        <h2 class="text-center font-display text-xs font-semibold tracking-widest text-brand-gray uppercase">
          Trusted By Industry Leaders & Innovative Teams
        </h2>
      </div>
      <div class="w-full overflow-hidden relative flex py-4 select-none">
        <div v-for="dup in 2" :key="dup" class="flex items-center gap-12 sm:gap-16 min-w-full animate-marquee whitespace-nowrap" :aria-hidden="dup === 2">
          <div v-for="(client, index) in clients" :key="`m-${dup}-${index}`" class="flex items-center gap-2">
            <component :is="client.icon" class="w-5 h-5 text-brand-gray flex-shrink-0" />
            <span class="font-display font-bold text-sm tracking-wide text-brand-gray hover:text-brand-red transition-colors duration-200 cursor-default">
              {{ client.name }}
            </span>
          </div>
        </div>
      </div>
      </div>
    </section>
    <!-- TESTIMONIALS -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="flex flex-col items-center text-center gap-2 mb-12">
          <span class="text-xs font-semibold text-brand-red uppercase tracking-widest">Client Feedback</span>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight">Our Clients</h2>
        </div>
        <div class="relative rounded-2xl bg-brand-light p-8 md:p-12 border border-brand-light shadow-sm">
          <Quote class="text-brand-red opacity-10 absolute top-6 left-6 md:top-8 md:left-8 w-16 h-16 md:w-20 md:h-20" :stroke-width="1.5" />
          <transition name="fade-slide" mode="out-in">
            <div :key="activeSlide" class="relative z-10 flex flex-col gap-6">
              <p class="text-lg sm:text-xl text-brand-dark/90 leading-relaxed italic">
                {{ testimonials[activeSlide].quote }}
              </p>
              <div class="flex items-center justify-between border-t border-brand-dark/10 pt-6">
                <div>
                  <span class="font-display font-bold text-base block text-brand-dark">{{ testimonials[activeSlide].name }}</span>
                  <span class="text-xs font-semibold text-brand-gray tracking-wide">{{ testimonials[activeSlide].role }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <button @click="prevSlide" aria-label="Previous" class="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition">
                    <ChevronLeft class="w-4 h-4" />
                  </button>
                  <button @click="nextSlide" aria-label="Next" class="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition">
                    <ChevronRight class="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
    <!-- FINAL CTA -->
    <section class="section-sm bg-white">
      <div class="container-narrow">
        <div class="cta-panel">
          <h2 class="cta-title">
            Have a project in mind? Let's talk.
          </h2>
          <p class="cta-subtitle">
            Our seasoned professionals are ready to help your business devise and implement scaling digital solutions.
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import {
  Check, Lightbulb, Code2, Workflow, Building2, Cpu, Palette, Bot, BarChart3, Briefcase, Rocket, Globe, Database, Server,
  ArrowRight, ChevronLeft, ChevronRight, Quote, Zap } from 'lucide-vue-next';

const whatWeDo = [
  {
    title: 'Product Strategy',
    icon: Lightbulb,
    description: 'Strategize and create an easy-to-follow roadmap.',
    items: ['Business Owner Driven', 'Technical Architecture', 'Phased Approach']
  },
  {
    title: 'Product Development',
    icon: Code2,
    description: 'This is where your roadmap meets reality.',
    items: ['Custom AI Solutions', 'Integration & Implementation', 'Quality Assurance']
  },
  {
    title: 'Product Operations',
    icon: Workflow,
    description: 'The extra layer to help manage and maintain your product.',
    items: ['Project Management', 'DevOps', 'Reporting & Analytics']
  }
];

const leadxTeam = [
  { title: 'Architects', icon: Building2, description: 'A seasoned technologist creates the right approach for your solution, turning it into a well-defined roadmap.' },
  { title: 'Developers', icon: Cpu, description: 'Implements your solution based on the software architect roadmap and technical direction.' },
  { title: 'Designers', icon: Palette, description: 'From low to high fidelity wireframes, our designers collaborate to craft beautiful experiences.' },
  { title: 'AI Consultants', icon: Bot, description: 'Identify opportunities to build and implement AI-powered solutions inside your business.' },
  { title: 'Business Analysts', icon: BarChart3, description: 'Work closely with stakeholders to define requirements and guide implementation.' },
  { title: 'Project Managers', icon: Briefcase, description: 'Keep software initiatives organized, aligned, and delivered smoothly.' }
];

const clients = [
  { name: 'Acme Corp', icon: Building2 },
  { name: 'Northwind', icon: Rocket },
  { name: 'Initech', icon: Cpu },
  { name: 'Globex', icon: Globe },
  { name: 'Hooli', icon: Database },
  { name: 'Stark Industries', icon: Server }
];

const testimonials = [
  { quote: 'LeadX rebuilt our reporting platform in 90 days — faster, cheaper, and fully SOC 2 ready.', name: 'Sarah Chen', role: 'VP Engineering, Northwind' },
  { quote: 'Their cloud migration team moved us off legacy infra without a single hour of downtime.', name: 'Marcus Reed', role: 'CTO, Acme Corp' },
  { quote: 'The most professional engineering partner we have worked with. They own outcomes.', name: 'Priya Patel', role: 'Head of Product, Globex' }
];

const activeSlide = ref(0);

let interval;

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % testimonials.length;
};

const prevSlide = () => {
  activeSlide.value = (activeSlide.value - 1 + testimonials.length) % testimonials.length;
};

onMounted(() => {
  interval = setInterval(nextSlide, 6000);
});

onBeforeUnmount(() => clearInterval(interval));
</script>
<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
.animate-marquee { animation: marquee 30s linear infinite; }
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.4s cubic-bezier(0.4,0,0.2,1); }
.fade-slide-enter-from { opacity: 0; transform: translateX(10px); }
.fade-slide-leave-to { opacity: 0; transform: translateX(-10px); }
</style>