<script setup>
import './main.css'
import { RouterView } from 'vue-router'
import NavigationSection from '@/components/NavigationSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<template>
  <NavigationSection/>
  <main class="relative z-10 select-none px-phone sm:px-fit grid box-contents place-content-center scroll-smooth m-auto">
    <RouterView />
  </main>
  <FooterSection/>
</template>

<style>
</style>
