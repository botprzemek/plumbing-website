<script setup>
import {routes} from '@/methods/data';
</script>

<template>
  <nav class="relative z-30 px-fit">
    <ul class="grid grid-flow-col">
      <li class="">
        <a href="#">
          <img src="@/assets/logo_menu.webp" />
        </a>
      </li>
      <li v-for="route in routes" :key="route">
        <RouterLink :to="route.link" class="text-black font-semibold">
          <p>{{ route.name }}</p>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
</style>