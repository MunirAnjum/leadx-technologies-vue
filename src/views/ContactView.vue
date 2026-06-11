<template>
  <div class="page-wrap">
    <!-- HERO -->
    <section class="hero-dark">
      <div class="container-x pt-20 relative z-10">
        <div class="max-w-4xl mx-auto">
          <span class="eyebrow-dark mb-6">
            <Zap class="w-3.5 h-3.5" />
            Let's collaborate
          </span>
          <h1 class="h-hero text-white mb-6">
            Contact
            <span class="text-gradient-red">LeadX</span>
          </h1>
          <p class="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed mt-5">
            We love solving technology problems, and want to become your trusted partner and help you achieve your goals, 
            but that can't start until we've heard from you. Drop us a line about your initiatives and struggles so we can get the conversation started.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Layout Grid -->
    <div class="grid grid-cols-1 py-20 lg:grid-cols-12 gap-12 items-start">
      
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
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <strong class="text-white block font-semibold text-base mb-0.5">LeadX Technologies Inc.</strong>
                <span>LeadX Technologies, Jhardiyan Road, Nawansher</span>
                <span class="block">Abbottabad, KPK, Pakistan</span>
              </div>
            </div>
            <!-- Phone number block -->
            <a href="tel:0312-3456789" class="flex items-start gap-4 group focus:outline-none focus:text-white">
              <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 flex-shrink-0">
                <Phone class="w-5 h-5" />
              </div>
              <div>
                <strong class="text-white block font-semibold text-base mb-0.5">Direct Inquiry Line</strong>
                <span class="group-hover:underline text-sm font-semibold tabular-nums">0312-3456789</span>
              </div>
            </a>
            <!-- Email support block -->
            <a href="mailto:info@leadx.tech" class="flex items-start gap-4 group focus:outline-none focus:text-white">
              <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 flex-shrink-0">
                <Mail class="w-5 h-5" />
              </div>
              <div>
                <strong class="text-white block font-semibold text-base mb-0.5">Enterprise Solutions Support</strong>
                <span class="group-hover:underline text-sm font-medium">info@leadx.tech</span>
              </div>
            </a>
          </address>
        </div>
        <!-- Trust Callout Card -->
        <div class="bg-white border border-brand-dark/5 rounded-3xl p-8">
          <h4 class="font-display text-lg font-bold mb-4">Our Guarantee</h4>
          <ul class="flex flex-col gap-3 text-sm text-brand-dark">
            <li v-for="g in guarantees" :key="g" class="flex items-start gap-3">
              <CheckCircle2 class="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
              <span>{{ g }}</span>
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
              <!-- Consent Field -->
               <div class="text-brand-dark flex items-start gap-3">
                <input
                  id="consent" v-model="formData.consent" type="checkbox" required class="focus:outline-none focus:border-brand-red mt-1 w-4 h-4"
                />
                <label for="consent" class="!text-brand-dark font-semibold text-sm leading-relaxed cursor-pointer">
                  I consent to LeadX Technologies storing and processing my submitted information for the purpose of responding to my inquiry.
                  <span class="wpforms-required-label text-brand-red">*</span>
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
              <CheckCircle2 class="w-5 h-5" />
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
</template>

<script setup>
import {sendContactForm} from '@/Api/contactApi';
import { ref, reactive } from 'vue';
import { MapPin, Phone, Mail, CheckCircle2, Zap, Send, Loader2 } from 'lucide-vue-next';

const loading = ref(false);
const submitted = ref(false);

const formData = ref({
  name: '',
  email: '',
  company: '',
  message: '',
  consent: false
});

const handleSubmit = async () => {
  try {
    loading.value = true;

    const payload = {
      name: formData.value.name,
      email: formData.value.email,
      company: formData.value.company,
      message: formData.value.message,
      consent: formData.value.consent
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
      message: "",
      consent: ""
    };

  } catch(error) {
    console.error("API Error:", error.response?.data || error.message);
    alert("Failed to send message. Try again.");
  } finally{
    loading.value = false;
  }

};

const resetForm = () => {
  submitted.value = false;
  formData.name = '';
  formData.email = '';
  formData.company = '';
  formData.message = '';
  formData.consent = '';
};

const guarantees = [
  'SLA-backed 24-hour response matrix',
  'SOC 2 Type II verified encrypted handling',
  'Direct advisory with Enterprise cloud architects'
];
</script>

<style scoped>
/* input:focus ~ label,
input:not(:placeholder-shown) ~ label,
textarea:focus ~ label,
textarea:not(:placeholder-shown) ~ label {
  top: 6px;
  font-size: 10px;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: #E63329;
} */
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