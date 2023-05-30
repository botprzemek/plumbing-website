<script setup>
import {contacts, routes} from '@/data';
</script>

<template>
  <nav class="relative z-30 select-none px-phone sm:px-fit flex flex-row justify-center sm:justify-between h-24 bg-white shadow-sm">
    <RouterLink to="/" class="flex flex-row items-center gap-4">
      <img src="@/assets/logo_menu.webp" class="py-2 h-full"/>
      <section>
        <h6 class="text-black font-semibold text-2xl">Pan od Rurek</h6>
        <a :href="`tel:${contacts.phone.link}`" class="text-sm sm:text-base text-black">
          <p>Zadzwoń do nas!</p>
        </a>
      </section>
    </RouterLink>
    <ul class="hidden sm:flex flex-row gap-4 items-center">
      <li>
        <RouterLink to="/" class="text-black font-semibold text-xl hover:text-blue transition-colors duration-200 ease-in">
          <p>Start</p>
        </RouterLink>
      </li>
      <li v-for="route in routes" :key="route">
        <RouterLink :to="route.link" class="text-black font-semibold text-xl hover:text-blue transition-colors duration-200 ease-in">
          <p>{{ route.name }}</p>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
</style>