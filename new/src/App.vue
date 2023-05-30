<script setup>
import './main.css'
import { RouterLink, RouterView } from 'vue-router'
import NavigationSection from '@/components/NavigationSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<template>
  <NavigationSection/>
  <main class="relative z-10 px-fit">
    <RouterView />
  </main>
  <FooterSection/>
  <aside class="absolute z-0 top-0 bg-white w-full h-full"></aside>
</template>

<style>
</style>
