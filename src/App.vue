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
import UtilityBar from '@/components/layout/UtilityBar.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>