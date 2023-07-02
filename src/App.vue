<script setup>
import './main.css'
import {RouterView} from 'vue-router'
import NavigationSection from '@/components/NavigationSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import WidgetSection from '@/components/WidgetSection.vue';
</script>

<template>
  <NavigationSection/>
  <main class="relative z-10 select-none grid box-contents place-content-center scroll-smooth my-auto">
    <RouterView />
  </main>
  <WidgetSection/>
  <FooterSection/>
</template>

<style>
</style>
