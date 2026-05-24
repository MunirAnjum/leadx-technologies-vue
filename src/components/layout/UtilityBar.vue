<template>
  <div class="bg-brand-dark border-b border-white/10 text-white/80 py-2.5 text-xs transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
      <!-- Certification / Highlight -->
      <div class="flex items-center gap-2 select-none">
        <!-- Phone Link -->
        <a 
          href="tel:8665435323" 
          class="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          title="Call LeadX Support"
        >
          <span class="text-brand-red">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 0 1-7.708-7.708c-.154-.44.01-1.21.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </span>
          <span class="font-semibold tabular-nums">866.543.LEAD</span>
        </a>
        <!-- Divider -->
        <span class="w-px h-3 bg-white/10 hidden sm:inline-block"></span>
        <!-- Email Link -->
        <a 
          href="mailto:info@leadx.tech" 
          class="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          title="Email LeadX Inquiry"
        >
          <span class="text-brand-red">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </span>
        </a> 
      </div>
      <!-- Quick Contact Info -->
      <div class="flex items-center gap-6">
        
          <div class="flex items-center gap-4">
            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/company/leadx"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-white transition-colors duration-200"
              title="LinkedIn"
            >
              <svg class="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7C21 7.5 22 10 22 14.1V24h-5v-8.6c0-2.1 0-4.8-2.9-4.8s-3.3 2.3-3.3 4.7V24h-5V8z"/>
              </svg>
            </a>

            <!-- Twitter / X -->
            <a
              href="https://twitter.com/leadx"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-white transition-colors duration-200"
              title="Twitter / X"
            >
              <svg class="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26L22 21.75h-6.172l-4.833-6.32-5.54 6.32H2.144l7.73-8.835L2 2.25h6.328l4.37 5.752 5.546-5.752z"/>
              </svg>
            </a>

            <!-- YouTube -->
            <a
              href="https://www.youtube.com/@leadx"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-white transition-colors duration-200"
              title="YouTube"
            >
              <svg class="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.99 2.99 0 0 0-2.104-2.117C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.394.569A2.99 2.99 0 0 0 .502 6.186 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .502 5.814 2.99 2.99 0 0 0 2.104 2.117C4.6 20.5 12 20.5 12 20.5s7.4 0 9.394-.569a2.99 2.99 0 0 0 2.104-2.117A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
              </svg>
            </a>
          </div>
        </div>
    </div>
  </div>
</template>
<script setup>
// Component is purely presentational and handles responsive info displays.
</script>