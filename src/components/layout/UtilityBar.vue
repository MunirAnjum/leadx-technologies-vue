<template>
  <div
    class="border-b border-brand-red/30 pt-2 pb-1 text-xs transition-all duration-300"
  >
    <div
      class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0"
    >
      <!-- Left Side -->
      <div class="flex items-center flex-wrap justify-center md:justify-start">

        <!-- Phone -->
        <a
          href="tel:03123456789"
          class="flex items-center gap-2 px-4 text-black transition-colors duration-200"
          title="Call LeadX Support"
        >
          <Phone class="w-4 h-4 text-brand-red" />
          <span class="font-medium">0312-3456789</span>
        </a>

        <!-- Divider -->  
        <span class="hidden sm:block w-px h-5 bg-brand-red/40"></span>

        <!-- Email -->
        <a
          href="mailto:info@leadx.com"
          class="flex items-center gap-2 px-4 text-black transition-colors duration-200"
          title="Email LeadX"
        >
          <Mail class="w-4 h-4 text-brand-red" />
          <span class="font-medium">info@leadx.com</span>
        </a>
      </div>

      <!-- Right Side -->
      <div class="flex items-center">

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/company/leadx"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 text-brand-red hover:text-black transition-colors duration-200"
          title="LinkedIn"
        >
          <Linkedin class="w-4 h-4" />
        </a>

        <span class="w-px h-5 bg-brand-red/40"></span>

        <!-- Twitter/X -->
        <a
          href="https://twitter.com/leadx"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 text-brand-red hover:text-black transition-colors duration-200"
          title="Twitter / X"
        >
          <X class="w-4 h-4"/>
        </a>

        <span class="w-px h-5 bg-brand-red/40"></span>

        <!-- YouTube -->
        <a
          href="https://www.youtube.com/@leadx"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 text-brand-red hover:text-black transition-colors duration-200"
          title="YouTube"
        >
          <Youtube class="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Phone, Mail, Linkedin, Youtube, Menu, ChevronRight, ArrowUpRight, Search, X } from 'lucide-vue-next'
</script>