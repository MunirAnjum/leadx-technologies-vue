<template>
  <div class="page-wrap">

    <!-- HERO -->
    <section class="hero-dark">
      <div class="container-x relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="eyebrow-dark mb-6">
            <Compass class="w-3.5 h-3.5" /> Who We Are
          </div>
          <h1 class="h-hero text-white mb-6">
            Strong teams.
            <span class="text-gradient-red">Exceptional software.</span>
          </h1>
          <p class="text-white/70 text-lg leading-relaxed max-w-3xl">
            Our purpose is to solve our client's business needs by developing exceptional software.
            We achieve this by assembling strong and balanced teams that are knowledgeable, trustworthy, and reliable.
          </p>
        </div>
      </div>
    </section>

    <!-- ROLES -->
    <section class="section-sm bg-white">
      <div class="container-x">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(role, i) in roles" :key="i" class="card card-hover-sm">
            <div class="icon-badge mb-6">
              <component :is="role.icon" class="w-7 h-7" />
            </div>
            <h3 class="h-card mb-3">{{ role.title }}</h3>
            <p class="text-brand-gray text-sm leading-relaxed">{{ role.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE VALUES -->
    <section class="section section-muted">
      <div class="container-x">
        <div class="text-center mb-14">
          <div class="divider-row">
            <div class="divider-row__line"></div>
            <span class="divider-row__label">Our Beliefs</span>
            <div class="divider-row__line"></div>
          </div>
          <h2 class="h-section">Core Values</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(v, i) in values" :key="i"
            class="bg-white rounded-2xl p-7 border border-brand-light flex flex-col gap-3 hover:border-brand-red/30 hover:shadow-md transition-all duration-300 group">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-brand-red/5 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors">
                <component :is="v.icon" class="w-5 h-5" />
              </div>
              <h3 class="font-display text-lg font-bold">{{ v.title }}</h3>
            </div>
            <p class="text-brand-gray text-sm leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- LEADERSHIP -->
    <section class="section bg-white">
      <div class="container-x">
        <div class="text-center mb-14">
          <span class="eyebrow-line">Ownership</span>
          <h2 class="h-section mt-3">Leadership</h2>
          <p class="text-brand-gray max-w-2xl mx-auto mt-4">
            The architects and operators who shape every engagement.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(p, i) in leadership" :key="i"
            class="rounded-3xl border border-brand-dark/10 bg-brand-light/30 p-8 flex flex-col items-center text-center card-hover-sm transition-all duration-300">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-brand-red to-red-700 text-white flex items-center justify-center font-display font-bold text-2xl mb-5 shadow-lg shadow-brand-red/20">
              {{ p.initials }}
            </div>
            <h3 class="font-display font-bold text-lg">{{ p.name }}</h3>
            <p class="text-brand-gray text-xs mt-1 uppercase tracking-wider font-semibold">{{ p.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SENIOR TEAM -->
    <section class="section section-muted">
      <div class="container-x">
        <div class="text-center mb-14">
          <span class="eyebrow-line">Builders</span>
          <h2 class="h-section mt-3">Senior Team</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(p, i) in senior" :key="i"
            class="rounded-3xl bg-white border border-brand-dark/10 p-8 flex items-center gap-5 hover:shadow-md transition-all duration-300">
            <div class="w-16 h-16 flex-shrink-0 rounded-2xl bg-brand-dark text-white flex items-center justify-center font-display font-bold text-lg">
              {{ p.initials }}
            </div>
            <div>
              <h3 class="font-display font-bold text-base">{{ p.name }}</h3>
              <p class="text-brand-gray text-xs mt-1 uppercase tracking-wider font-semibold">{{ p.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CLIENTS -->
    <section class="py-16 bg-white border-y border-brand-light">
      <div class="container-x">
        <h2 class="text-center font-display text-xs font-semibold tracking-widest text-brand-gray uppercase mb-10">
          Trusted By Industry Leaders
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div v-for="(c, i) in clients" :key="i"
            class="flex items-center justify-center gap-2 p-4 rounded-xl bg-brand-light/40 hover:bg-brand-light transition">
            <component :is="c.icon" class="w-5 h-5 text-brand-gray" />
            <span class="font-display font-bold text-sm text-brand-gray">{{ c.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="section-sm section-soft">
      <div class="container-narrow">
        <div class="cta-panel">
          <h2 class="cta-title">
            Have a project in mind? Let's talk.
          </h2>
          <p class="cta-subtitle">
            We are seasoned professionals ready to help your business achieve its goals.
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
import {
  Compass, ArrowRight, Ear, GraduationCap, HandHeart,
  Handshake, Swords, GitFork, MessageSquareCheck, Scale, RefreshCcw,
  Building2, Rocket, Cpu, Globe, Database, Server
} from 'lucide-vue-next';

const roles = [
  { title: 'Listeners',  desc: "We're well-versed in hearing and understanding the value our talent and clients want to provide.", icon: Ear },
  { title: 'Mentors',    desc: 'We guide and teach best practices, helping teams and clients chart the right approach to their goals.', icon: GraduationCap },
  { title: 'Supporters', desc: 'We provide opportunities for growth and the right resources to make every engagement possible.', icon: HandHeart }
];

const values = [
  { title: 'Foster lasting relationships',     desc: 'Lasting relationships are born from trust, communication, and mutual support.', icon: Handshake },
  { title: 'Face challenges head-on',          desc: 'Being challenged promotes self-confidence and accountability.', icon: Swords },
  { title: 'All paths lead to progress',       desc: 'Given a fork in the road, committing to a path is invaluable experience — even if it means doubling back and trying again.', icon: GitFork },
  { title: 'Words backed by action',           desc: 'Words should be backed by action, showing commitment and follow-through.', icon: MessageSquareCheck },
  { title: 'Own your strengths and weaknesses',desc: 'We believe in owning your experience. The goal is to become a better version of yourself.', icon: Scale },
  { title: 'Keep a tight feedback loop',       desc: 'To finely tune our craft, we consistently review and incorporate feedback from peers and clients.', icon: RefreshCcw }
];

const leadership = [
  { name: 'Byron McClain', role: 'Owner / Enterprise Software Architect', initials: 'BM' },
  { name: 'Ryan Kettrey',  role: 'Owner / Enterprise Software Architect', initials: 'RK' },
  { name: 'Chuck Harris',  role: 'Owner / Business Architect',            initials: 'CH' },
  { name: 'Guy Edwards',   role: 'Owner / COO',                            initials: 'GE' }
];

const senior = [
  { name: 'Brian Weiss',  role: 'UI/UX Architect',          initials: 'BW' },
  { name: 'Sean Thurman', role: 'Senior Software Engineer', initials: 'ST' },
  { name: 'Derek Adams',  role: 'Senior Software Engineer', initials: 'DA' }
];

const clients = [
  { name: 'Newport Health', icon: Building2 },
  { name: 'HCA',            icon: Rocket },
  { name: 'L3Harris',       icon: Cpu },
  { name: 'GoEngineer',     icon: Server },
  { name: 'Quantum',        icon: Database },
  { name: 'Volvo',          icon: Globe }
];
</script>
