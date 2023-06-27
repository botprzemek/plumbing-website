<script setup>
import {contacts, routes} from '@/data';
</script>

<template>
  <header class="">
    <p>+10 lat doświadczenia</p>
    <p>Ponad 1243 zadowolonych klientów</p>
    <p>Profesjonalne instalacje i montaż</p>
  </header>
  <nav class="fixed z-30 w-screen select-none px-phone sm:px-fit flex flex-row justify-center sm:justify-between h-20 bg-white shadow-sm">
    <RouterLink to="/" class="flex flex-row items-center gap-4">
      <img src="@/assets/logo_menu.webp" class="py-2 h-full"/>
      <section>
        <h6 class="text-black font-semibold text-3xl hover:text-blue transition-colors duration-200 ease-in">Pan od Rurek</h6>
        <a :href="`tel:${contacts.phone.link}`" class="text-sm sm:text-base text-black"></a>
      </section>
    </RouterLink>
    <ul class="hidden sm:flex flex-row gap-4 items-center">
      <li>
        <RouterLink to="/" class="text-black text-base hover:text-blue transition-colors duration-200 ease-in">
          <p>Start</p>
        </RouterLink>
      </li>
      <li v-for="route in routes" :key="route">
        <RouterLink :to="route.link" class="text-black text-base hover:text-blue transition-colors duration-200 ease-in">
          <p>{{ route.name }}</p>
        </RouterLink>
      </li>
      <li>
        <button class="px-8 py-1 bg-blue h-fit w-fit rounded-full border-2 border-blue text-white text-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <a :href="`tel:${contacts.phone.link}`" class="text-base sm:text-base">
            <p>Zadzwoń do nas!</p>
          </a>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style>
</style>