<template>
  <div class="pt-[110px] md:pt-[130px] overflow-hidden bg-white text-brand-dark font-sans">
    
    <!-- SECTION 1: HERO SECTION -->
    <section class="relative py-16 lg:py-24 xl:py-28 bg-gradient-to-b from-brand-light/50 to-white">
      <!-- Ambient Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-red/5 blur-[120px]"></div>
        <div class="absolute top-[60%] -left-40 w-[500px] h-[500px] rounded-full bg-brand-dark/5 blur-[100px]"></div>
        <!-- Dot Matrix Pattern -->
        <div class="absolute right-10 top-20 w-44 h-44 opacity-[0.03] bg-[radial-gradient(#0A0A0A_2px,transparent_2px)] [background-size:16px_16px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Hero Text Content -->
          <div class="lg:col-span-6 flex flex-col items-start gap-6 transform transition-all duration-700">
            <!-- Premium Tag -->
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-brand-red/10 text-brand-red uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5 animate-bounce">
                <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
              Elite Enterprise Software Architects
            </div>
            
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tight leading-[1.1]">
              Expert Engineers Delivering 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600 block sm:inline">Superior Software</span>
            </h1>
            
            <p class="text-brand-gray text-base sm:text-lg max-w-lg leading-relaxed">
              We help forward-thinking companies build secure, scalable solutions that streamline operations, modernize legacy systems, and accelerate digital transformation.
            </p>
            
            <!-- CTA Actions -->
            <div class="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <router-link 
                to="/contact" 
                class="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-full font-bold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-200"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </router-link>
              <router-link 
                to="/services" 
                class="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 border-2 border-brand-dark/10 hover:border-brand-dark/30 text-brand-dark px-8 py-3.5 rounded-full font-semibold transition active:scale-95 duration-200"
              >
                Explore Pillars
              </router-link>
            </div>
          </div>

          <!-- Hero Visual: Mock Terminal Code Window -->
          <div class="lg:col-span-6">
            <div class="relative w-full max-w-lg lg:max-w-none mx-auto group">
              <!-- Background Glow -->
              <div class="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-brand-red to-brand-dark/20 opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
              
              <!-- Outer Container -->
              <div class="relative rounded-2xl bg-brand-dark border border-white/10 shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-500">
                
                <!-- Mock Titlebar -->
                <div class="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-white/5">
                  <div class="flex items-center gap-1.5">
                    <span class="w-3 h-3 rounded-full bg-[#FF5F56] inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-[#27C93F] inline-block"></span>
                  </div>
                  <span class="text-[10px] text-white/40 font-mono tracking-wider">leadx-core.js</span>
                  <div class="w-12"></div>
                </div>

                <!-- Code Block Content -->
                <div class="p-6 font-mono text-[11px] sm:text-xs leading-relaxed text-white/90 overflow-x-auto select-none">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-pink-500">import</span> 
                    <span class="text-blue-300">Vue</span> 
                    <span class="text-pink-500">from</span> 
                    <span class="text-green-400">'vue'</span>;
                  </div>
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-pink-500">import</span> 
                    <span>{</span> 
                    <span class="text-yellow-400">CloudArchitect</span> 
                    <span>}</span> 
                    <span class="text-pink-500">from</span> 
                    <span class="text-green-400">'leadx-framework'</span>;
                  </div>
                  <div class="h-4"></div>
                  <div class="mb-2">
                    <span class="text-blue-400">const</span> 
                    <span class="text-purple-400">leadXConfig</span> 
                    <span class="text-pink-500">=</span> 
                    <span>{</span>
                  </div>
                  <div class="pl-4 mb-1">
                    <span class="text-white/60">scale:</span> 
                    <span class="text-green-400">"enterprise"</span>,
                  </div>
                  <div class="pl-4 mb-1">
                    <span class="text-white/60">security:</span> 
                    <span class="text-green-400">"soc2-compliant"</span>,
                  </div>
                  <div class="pl-4 mb-1">
                    <span class="text-white/60">infrastructure:</span> 
                    <span class="text-green-400">"multi-cloud"</span>,
                  </div>
                  <div class="pl-4 mb-1">
                    <span class="text-white/60">reactive:</span> 
                    <span class="text-orange-400">true</span>
                  </div>
                  <div class="mb-2">
                    <span>};</span>
                  </div>
                  <div class="h-4"></div>
                  <div class="mb-2">
                    <span class="text-pink-500">export default</span> 
                    <span class="text-blue-400">async function</span> 
                    <span class="text-yellow-400">initializeProject</span><span>() {</span>
                  </div>
                  <div class="pl-4 mb-1">
                    <span class="text-blue-400">const</span> 
                    <span>system</span> 
                    <span class="text-pink-500">=</span> 
                    <span class="text-pink-500">await</span> 
                    <span class="text-yellow-400">CloudArchitect</span><span>.</span><span class="text-yellow-300">build</span><span>(</span><span class="text-purple-400">leadXConfig</span><span>);</span>
                  </div>
                  <div class="pl-4 mb-1 text-brand-gray">
                    // Deployment automation initialized
                  </div>
                  <div class="pl-4 mb-1">
                    <span>system.</span><span class="text-yellow-300">optimizeDelivery</span><span>();</span>
                  </div>
                  <div class="pl-4 mb-1">
                    <span class="text-pink-500">return</span> 
                    <span>system.</span><span class="text-blue-300">status</span><span>;</span>
                  </div>
                  <div>
                    <span>}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 2: CLIENT MARQUEE SECTION -->
    <section class="border-y border-brand-light py-10 bg-brand-light/20 relative z-10 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 mb-6">
        <h2 class="text-center font-display text-xs font-semibold tracking-widest text-brand-gray uppercase">
          Trusted By Industry Leaders & Innovative Teams
        </h2>
      </div>

      <!-- Infinite Rolling Marquee Wrapper -->
      <div class="w-full overflow-hidden relative flex py-4 select-none">
        <div class="flex items-center gap-12 sm:gap-16 min-w-full animate-marquee whitespace-nowrap">
          <div v-for="(client, index) in clients" :key="'marquee-1-'+index" class="flex items-center gap-2">
            <component :is="client.icon" class="w-5 h-5 text-brand-gray flex-shrink-0" />
            <span class="font-display font-bold text-sm tracking-wide text-brand-gray hover:text-brand-red transition-colors duration-200 cursor-default">
              {{ client.name }}
            </span>
          </div>
        </div>
        <!-- Duplicated for seamless infinite rolling effect -->
        <div class="flex items-center gap-12 sm:gap-16 min-w-full animate-marquee whitespace-nowrap" aria-hidden="true">
          <div v-for="(client, index) in clients" :key="'marquee-2-'+index" class="flex items-center gap-2">
            <component :is="client.icon" class="w-5 h-5 text-brand-gray flex-shrink-0" />
            <span class="font-display font-bold text-sm tracking-wide text-brand-gray hover:text-brand-red transition-colors duration-200 cursor-default">
              {{ client.name }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: TESTIMONIAL SLIDER SECTION -->
    <section class="py-16 md:py-24 bg-white relative">
      <div class="max-w-4xl mx-auto px-6">
        
        <!-- Header -->
        <div class="flex flex-col items-center text-center gap-2 mb-12">
          <span class="text-xs font-semibold text-brand-red uppercase tracking-widest">Client Feedback</span>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight">Our Clients</h2>
        </div>

        <!-- Slider Container -->
        <div class="relative rounded-2xl bg-brand-light p-8 md:p-12 border border-brand-light shadow-sm">
          <!-- Quote Icon -->
          <div class="text-brand-red opacity-10 absolute top-6 left-6 md:top-8 md:left-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          <!-- Active Testimonial Slot -->
          <transition 
            name="fade-slide" 
            mode="out-in"
          >
            <div :key="activeSlide" class="relative z-10 flex flex-col gap-6">
              <p class="font-sans text-lg sm:text-xl text-brand-dark/90 leading-relaxed italic">
                {{ testimonials[activeSlide].quote }}
              </p>
              
              <div class="flex items-center justify-between border-t border-brand-dark/10 pt-6">
                <div>
                  <span class="font-display font-bold text-base block text-brand-dark">
                    {{ testimonials[activeSlide].name }}
                  </span>
                  <span class="text-xs font-semibold text-brand-gray tracking-wide">
                    {{ testimonials[activeSlide].role }}
                  </span>
                </div>

                <!-- Navigation Buttons -->
                <div class="flex items-center gap-2">
                  <button 
                    @click="prevSlide" 
                    class="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors duration-200 focus:outline-none"
                    aria-label="Previous Testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button 
                    @click="nextSlide" 
                    class="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors duration-200 focus:outline-none"
                    aria-label="Next Testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </div>

      </div>
    </section>

    <!-- SECTION 4: CERTIFICATIONS & SECURITY -->
    <section class="py-16 md:py-24 bg-brand-light/30 border-t border-brand-light">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- Header -->
        <div class="flex flex-col items-center text-center gap-2 mb-12 md:mb-16">
          <span class="text-xs font-semibold text-brand-red uppercase tracking-widest">Security & Compliance</span>
          <h3 class="font-display text-2xl sm:text-3xl font-bold text-brand-dark tracking-tight">
            Awards, Certifications & Partnerships
          </h3>
        </div>

        <!-- Partnerships Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div 
            v-for="(partner, index) in certifications" 
            :key="index"
            class="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-brand-light shadow-sm text-center gap-4 group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-full bg-brand-red/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
              <component :is="partner.icon" class="w-6 h-6 flex-shrink-0" />
            </div>
            <span class="font-display font-semibold text-xs tracking-wider text-brand-dark uppercase">
              {{ partner.title }}
            </span>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION 5: CALL TO ACTION -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="relative rounded-3xl bg-brand-dark p-8 md:p-16 border border-white/10 overflow-hidden shadow-2xl">
          <!-- Geometric Accent Patterns -->
          <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
            <div class="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full border border-white"></div>
            <div class="absolute bottom-[-40%] left-[-10%] w-[350px] h-[350px] rounded-full border border-white"></div>
          </div>

          <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <div class="flex flex-col gap-4 text-center lg:text-left">
              <h2 class="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Have a project in mind? Let's talk.
              </h2>
              <p class="text-brand-gray text-base sm:text-lg max-w-xl leading-relaxed">
                Our seasoned professionals are ready to help your business devise and implement scaling digital solutions.
              </p>
            </div>
            
            <div class="flex-shrink-0 w-full sm:w-auto">
              <router-link 
                to="/contact" 
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red text-white px-10 py-4 rounded-full text-base font-bold hover:bg-red-700 hover:shadow-xl hover:shadow-brand-red/35 active:scale-95 transition-all duration-200"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, h } from 'vue';

const activeSlide = ref(0);

const HospitalIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z' })
]);
const TruckIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25M13.5 18.75V8.25m0 10.5H18m0-10.5h1.875c.621 0 1.125.504 1.125 1.125v3M13.5 8.25h-9.75V14.25M13.5 14.25h6.75m0 0-1.875-3.375m0 0h-.375' })
]);
const PlaneIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L6 12Zm0 0h7.5' })
]);
const CpuIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M8.25 3v1.5M12 3v1.5m3.75-1.5v1.5M8.25 19.5V21M12 19.5V21m3.75-1.5V21m-12-12.75h1.5m-1.5 3h1.5m-1.5 3h1.5m16.5-9h-1.5m1.5 3h-1.5m1.5 3h-1.5M21 8.25a.75.75 0 0 0-.75-.75h-3.75V3.75a.75.75 0 0 0-.75-.75H8.25a.75.75 0 0 0-.75.75v3.75H3.75a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 .75.75h3.75v3.75a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75v-3.75h3.75a.75.75 0 0 0 .75-.75V8.25ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z' })
]);
const ServerIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M5.25 14.25h13.5m-13.5 3h13.5m-13.5-9h13.5m-13.5 3h13.5M21 12c0 4.418-4.03 8.25-9 8.25a9.864 9.864 0 0 1-4.853-1.248L3.75 20.25l.823-3.372A8.256 8.256 0 0 1 3 12c0-4.418 4.03-8.25 9-8.25s9 3.832 9 8.25Z' })
]);
const NetworkIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m0 12.798-9.566-5.314m9.566 5.314a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.798a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z' })
]);

const ShieldIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z' })
]);
const AwsIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A9.004 9.004 0 0 1 12 14.25a9.004 9.004 0 0 1-7.843-6.668m15.686 0h-15.686' })
]);
const MicrosoftIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13.5 3h7.125C21.22 3 21 3.28 21 3.625v7.125a.625.625 0 0 1-.625.625H13.5V3Zm0 18h7.125c.345 0 .625-.28.625-.625v-7.125a.625.625 0 0 1-.625-.625H13.5V21Zm-10.5 0H10.125C10.47 21 10.75 20.72 10.75 20.375v-7.125a.625.625 0 0 0-.625-.625H3V20.375c0 .345.28.625.625.625ZM3 3h7.125C10.47 3 10.75 3.28 10.75 3.625v7.125a.625.625 0 0 1-.625.625H3V3.625C3 3.28 3.28 3 3.625 3Z' })
]);
const AwardIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0V9.75m-5.007 0V9.75m5.007 0a3 3 0 1 1-6 0m6 0h-6m9-1.5a3 3 0 1 0-6 0v3h6v-3Z' })
]);
const BankIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z' })
]);

const clients = [
  { name: 'HCA Healthcare', icon: HospitalIcon },
  { name: 'Volvo Group', icon: TruckIcon },
  { name: 'L3Harris', icon: PlaneIcon },
  { name: 'Quantum ERP', icon: CpuIcon },
  { name: 'Cybera Tech', icon: ServerIcon },
  { name: 'NDC Networks', icon: NetworkIcon }
];

const certifications = [
  { title: 'SOC 2 Type II', icon: ShieldIcon },
  { title: 'AWS Advanced', icon: AwsIcon },
  { title: 'MS Gold Partner', icon: MicrosoftIcon },
  { title: 'ISO 27001 Sec', icon: AwardIcon },
  { title: 'SAM Certified', icon: BankIcon }
];

const testimonials = [
  {
    quote: "“When tackling a high-risk enterprise cloud project, you obviously need both raw talent and seasoned experience. The LeadX team has these skills in spades, and they have been invaluable in advising our architecture journey to secure computing.”",
    name: "Russell Meade",
    role: "Director of ERP Systems, Quantum"
  },
  {
    quote: "“We embedded three LeadX full-stack developers into our scrum teams. Within a single sprint, our delivery rate climbed by 30%. Their engineers communicate clearly and code beautifully.”",
    name: "Marcus Aurel",
    role: "Lead Systems Architect, Volvo Group"
  },
  {
    quote: "“LeadX helped us modernise our legacy reporting architecture, turning a complex, batch-based system into a real-time reactive streaming portal in AWS. Incredible execution.”",
    name: "Sarah Lin",
    role: "Product Management Principal, NDC Solutions"
  }
];

const nextSlide = () => {
  activeSlide.value = (activeSlide.value === testimonials.length - 1) ? 0 : activeSlide.value + 1;
};

const prevSlide = () => {
  activeSlide.value = (activeSlide.value === 0) ? testimonials.length - 1 : activeSlide.value - 1;
};
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
.logo-cursor {
  font-family: monospace;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  from, to { color: transparent }
  50% { color: #E63329 }
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>