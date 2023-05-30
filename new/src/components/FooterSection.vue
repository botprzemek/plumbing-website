<script setup>
import {contacts,routes,socials} from "@/methods/data";
</script>

<template>
  <footer class="relative z-30 px-fit bg-black py-12 flex flex-col sm:flex-row justify-between">
    <section class="flex flex-col justify-between">
      <h4 class="text-white font-semibold text-4xl">Pan od Rurek</h4>
      <p class="text-white">
        Wykonanie
        <a href="https://botprzemek.pl/" target="_blank" class="font-semibold">botprzemek.pl</a>
        2023 © Wszelkie prawa zastrzeżone
      </p>
    </section>
    <section class="flex flex-col sm:flex-row gap-4 sm:gap-12 pt-4 sm:pt-0">
      <section>
        <h5 class="text-white font-semibold">Sociale</h5>
        <ul class="">
          <li v-for="social in socials" :key="social.name">
            <a :href="social.link" target="_blank" class="text-white">
              <p>{{ social.name }}</p>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h5 class="text-white font-semibold">Kontakt</h5>
        <ul class="">
          <li>
            <a :href="`tel:${contacts.phone.link}`" class="text-white">
              <p>{{ contacts.phone.link }}</p>
            </a>
          </li>
          <li>
            <a :href="`mailto:${contacts.email.link}`" class="text-white">
              <p>{{ contacts.email.link }}</p>
            </a>
          </li>
          <li>
            <a :href="`https://www.google.com/maps/place/${contacts.address.link}`" target="_blank" class="text-white">
              <p>{{ contacts.address.link }}</p>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h5 class="text-white font-semibold">Nawigacja</h5>
        <ul class="">
          <li v-for="route in routes" :key="route.name">
            <RouterLink :to="route.link" class="text-white">
              <p>{{ route.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </section>
    </section>
  </footer>
</template>

<style>
</style>