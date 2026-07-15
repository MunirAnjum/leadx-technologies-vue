<template>
  <div class="pt-[110px] md:pt-[130px] min-h-screen bg-white text-brand-dark font-sans pb-20 flex items-start justify-center">
    <div class="w-full max-w-md mx-auto px-6">
      <div class="flex flex-col items-center text-center gap-3 mb-8">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red uppercase tracking-wider">
          Admin Area
        </span>
        <h1 class="font-display text-3xl sm:text-4xl font-bold tracking-tight">Sign in</h1>
        <p class="text-brand-gray text-sm">Access the contact submissions dashboard.</p>
      </div>
      <form
        @submit.prevent="onSubmit"
        class="p-8 rounded-3xl bg-brand-light border border-brand-light flex flex-col gap-5"
      >
        <div class="flex flex-col gap-2">
          <label class="text-sm font-semibold" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            autocomplete="username"
            class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition"
            placeholder="[email protected]"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-semibold" for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            autocomplete="current-password"
            class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition"
            placeholder="••••••••"
          />
        </div>
        <p v-if="error" class="text-sm text-brand-red font-medium">{{ error }}</p>
        <button
          type="submit"
          :disabled="loading"
          class="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span v-if="loading">Signing in…</span>
          <span v-else>Sign In</span>
        </button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { api, auth } from '@/utils/apiClient';
const router = useRouter();
const route = useRoute();
const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');
async function onSubmit() {
  error.value = '';
  loading.value = true;
  try {
    const { token, user } = await api.login(email.value.trim(), password.value);
    auth.setToken(token);
    auth.setUser(user);
    const redirect = (route.query.redirect as string) || {name: 'dashboard-home'};
    router.push(redirect);
  } catch (e: any) {
    error.value = e?.message || 'Login failed';
  } finally {
    loading.value = false;
  }
}
</script>