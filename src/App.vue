<script setup lang="ts"></script>

<template>
  <UtilityBar />
  <TheHeader />
  <main><RouterView /></main>
  <TheFooter />
</template>

<style scoped></style>

<script setup>
import { RouterView } from 'vue-router'
import UtilityBar from '@/components/layout/UtilityBar.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>