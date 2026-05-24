<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-gradient-to-b from-brand-light/30 via-white to-brand-light/20 text-brand-dark font-sans pb-20">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Top Header Text -->
      <div class="flex flex-col items-center text-center max-w-2xl mx-auto gap-4 mb-16">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          Let's Collaborate
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          Get in Touch
        </h1>
        <p class="text-brand-gray text-base sm:text-lg leading-relaxed">
          Tell us about your scaling targets, engineering backlogs, or architecture goals, and our Solutions Architects will advise the ideal deployment.
        </p>
      </div>

      <!-- Main Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- COLUMN 1: CONTACT CARD & DETAILS -->
        <div class="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-28">
          
          <!-- Contact Details Panel -->
          <div class="bg-brand-dark text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            <!-- Background Glow -->
            <div class="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-red/20 blur-3xl pointer-events-none"></div>

            <h3 class="font-display text-2xl font-bold text-white mb-6 tracking-tight">
              Corporate Headquarters
            </h3>

            <!-- Address Block -->
            <address class="not-italic text-brand-gray text-sm flex flex-col gap-6">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-red flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <strong class="text-white block font-semibold text-base mb-0.5">LeadX Technologies Inc.</strong>
                  <span>6640 Carothers Pkwy, Suite 150</span>
                  <span class="block">Franklin, TN 37067</span>
                </div>
              </div>

              <!-- Phone number block -->
              <a href="tel:8665435323" class="flex items-start gap-4 group focus:outline-none focus:text-white">
                <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 10.5a8.25 8.25 0 0 0-16.5 0c0 4.556 3.694 8.25 8.25 8.25a8.25 8.25 0 0 0 8.25-8.25Z" />
                  </svg>
                </div>
                <div>
                  <strong class="text-white block font-semibold text-base mb-0.5">Direct Inquiry Line</strong>
                  <span class="group-hover:underline text-sm font-semibold tabular-nums">866.543.LEAD (5323)</span>
                </div>
              </a>

              <!-- Email support block -->
              <a href="mailto:info@leadx.tech" class="flex items-start gap-4 group focus:outline-none focus:text-white">
                <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <strong class="text-white block font-semibold text-base mb-0.5">Enterprise Solutions Support</strong>
                  <span class="group-hover:underline text-sm font-medium">info@leadx.tech</span>
                </div>
              </a>
            </address>
          </div>

          <!-- Trust Callout Card -->
          <div class="bg-white rounded-3xl p-8 border border-brand-light shadow-sm flex flex-col gap-4 select-none">
            <h4 class="font-display font-bold text-lg text-brand-dark">Our Guarantee</h4>
            <ul class="flex flex-col gap-3 text-sm text-brand-gray">
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                <span>SLA-backed 24-hour response matrix</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                <span>SOC 2 Type II verified encrypted handling</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-brand-red flex-shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                <span>Direct advisory with Enterprise cloud architects</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- COLUMN 2: INTERACTIVE CONTACT FORM -->
        <div class="lg:col-span-7 bg-white border border-brand-light rounded-3xl p-8 md:p-12 shadow-sm relative min-h-[500px]">
          
          <transition name="fade-scale" mode="out-in">
            <!-- Form Block -->
            <div v-if="!submitted" key="form-view">
              <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
                
                <!-- Name Field -->
                <div class="relative">
                  <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    required
                    class="peer w-full bg-brand-light/50 border border-brand-dark/15 rounded-xl px-4 py-4 pt-6 text-sm text-brand-dark font-medium placeholder-transparent focus:outline-none focus:border-brand-red focus:bg-white transition-all duration-200"
                    placeholder="Full Name"
                  />
                  <label
                    for="name"
                    class="absolute left-4 top-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-gray peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-placeholder-shown:text-brand-gray/80 peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal transition-all duration-200 pointer-events-none"
                  >
                    Full Name
                  </label>
                </div>

                <!-- Email Field -->
                <div class="relative">
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    required
                    class="peer w-full bg-brand-light/50 border border-brand-dark/15 rounded-xl px-4 py-4 pt-6 text-sm text-brand-dark font-medium placeholder-transparent focus:outline-none focus:border-brand-red focus:bg-white transition-all duration-200"
                    placeholder="Business Email"
                  />
                  <label
                    for="email"
                    class="absolute left-4 top-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-gray peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-placeholder-shown:text-brand-gray/80 peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal transition-all duration-200 pointer-events-none"
                  >
                    Business Email
                  </label>
                </div>

                <!-- Company Field -->
                <div class="relative">
                  <input
                    type="text"
                    id="company"
                    v-model="formData.company"
                    class="peer w-full bg-brand-light/50 border border-brand-dark/15 rounded-xl px-4 py-4 pt-6 text-sm text-brand-dark font-medium placeholder-transparent focus:outline-none focus:border-brand-red focus:bg-white transition-all duration-200"
                    placeholder="Company Name"
                  />
                  <label
                    for="company"
                    class="absolute left-4 top-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-gray peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-placeholder-shown:text-brand-gray/80 peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal transition-all duration-200 pointer-events-none"
                  >
                    Company Name
                  </label>
                </div>

                <!-- Message Field -->
                <div class="relative">
                  <textarea
                    id="message"
                    v-model="formData.message"
                    required
                    rows="5"
                    class="peer w-full bg-brand-light/50 border border-brand-dark/15 rounded-xl px-4 py-4 pt-6 text-sm text-brand-dark font-medium placeholder-transparent focus:outline-none focus:border-brand-red focus:bg-white transition-all duration-200 resize-none"
                    placeholder="Message / Project Scope"
                  ></textarea>
                  <label
                    for="message"
                    class="absolute left-4 top-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-gray peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-placeholder-shown:text-brand-gray/80 peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal transition-all duration-200 pointer-events-none"
                  >
                    Message / Project Scope
                  </label>
                </div>

                <!-- Action Button -->
                <button
                  type="submit"
                  :disabled="loading"
                  class="w-full inline-flex items-center justify-center gap-2 bg-brand-red text-white py-4 rounded-xl text-base font-bold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-98 disabled:bg-brand-red/60 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none"
                >
                  <span v-if="loading" class="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin inline-block"></span>
                  <span v-else>Send Project Inquiries</span>
                </button>
                
              </form>
            </div>

            <!-- Success Overlay Block -->
            <div 
              v-else 
              key="success-view"
              class="flex flex-col items-center justify-center text-center py-10 px-4 min-h-[400px]"
            >
              <div class="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center text-green-500 mb-6 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              
              <h3 class="font-display text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
                Inquiry Received
              </h3>
              
              <p class="text-brand-gray text-base leading-relaxed max-w-md mb-8">
                Thank you, <strong class="text-brand-dark">{{ formData.name }}</strong>! An Enterprise Solutions Architect from LeadX will review your project details and reach out within 24 hours.
              </p>
              
              <button 
                @click="resetForm" 
                class="inline-flex items-center justify-center border border-brand-dark/10 hover:border-brand-dark/30 hover:bg-brand-light text-brand-dark px-6 py-3 rounded-full text-sm font-semibold transition duration-200"
              >
                Send Another Message
              </button>
            </div>
          </transition>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import {sendContactForm} from '@/Api/contactApi';
import { ref, reactive } from 'vue';

const loading = ref(false);
const submitted = ref(false);

const formData = ref({
  name: '',
  email: '',
  company: '',
  message: ''
});

const handleSubmit = async () => {
  try {
    loading.value = true;

    const payload = {
      name: formData.value.name,
      email: formData.value.email,
      company: formData.value.company,
      message: formData.value.message
    };  

    const response = await sendContactForm(payload);

    console.log("success", response.data);

    setTimeout(() => {
      loading.value = false;
      submitted.value = true;
    }, 1000);

    // reset form
    formData.value = {
      name: "",
      email: "",
      company: "",
      message: ""
    };

  } catch(error) {
    console.error("API Error:", error.response?.data || error.message);
    alert("Failed to send message. Try again.");
  } finally{
    loading.value = false;
  }


};

// const resetForm = () => {
//   submitted.value = false;
//   formData.name = '';
//   formData.email = '';
//   formData.company = '';
//   formData.message = '';
// };
</script>

<style scoped>
input:focus ~ label,
input:not(:placeholder-shown) ~ label,
textarea:focus ~ label,
textarea:not(:placeholder-shown) ~ label {
  top: 6px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: #E63329;
}
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.96);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>