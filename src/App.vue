<script setup lang="ts"></script>

<template>
  <TheHeader />
  <main class="pt-[110px]">
    <RouterView />
  </main>
  <TheFooter />
</template>

<style scoped></style>

<script setup>
import { RouterView } from 'vue-router'
import UtilityBar from '@/components/UtilityBar.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>