<script setup>
import {contacts,routes,socials} from '@/data';
</script>

<template>
  <footer class="relative z-30 select-none h-fit bg-black px-phone sm:px-fit py-12 flex flex-col sm:flex-row justify-between">
    <section class="flex flex-col w-full justify-between gap-2 sm:gap-0">
      <h4 class="text-white font-semibold text-center sm:text-left text-4xl sm:text-4xl">Pan od Rurek</h4>
      <p class="text-white text-sm text-center sm:text-left sm:text-base flex flex-col sm:flex-row break-all gap-1">
        <span>
          Wykonanie
          <a href="https://botprzemek.pl/" target="_blank" class="font-semibold">botprzemek.pl</a>
        </span>
        <span>Wszelkie prawa zastrzeżone</span>
      </p>
    </section>
    <section class="flex flex-col sm:flex-row gap-4 sm:gap-12">
      <section class="grid grid-cols-2 sm:flex sm:flex-row gap-4 w-full sm:w-fit sm:gap-12 pt-4 sm:pt-0">
        <section>
          <h5 class="text-white font-semibold text-md sm:text-lg">Sociale</h5>
          <ul>
            <li v-for="social in socials" :key="social.name">
              <a :href="social.link" target="_blank">
                <p class="text-sm sm:text-base text-white">{{ social.name }}</p>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h5 class="text-white font-semibold text-md sm:text-lg">Kontakt</h5>
          <ul>
            <li>
              <a :href="`tel:${contacts.phone.link}`">
                <p class="text-sm sm:text-base text-white">{{ contacts.phone.link }}</p>
              </a>
            </li>
            <li>
              <a :href="`mailto:${contacts.email.link}`">
                <p class="text-sm sm:text-base text-white">{{ contacts.email.link }}</p>
              </a>
            </li>
            <li>
              <a :href="`https://www.google.com/maps/place/${contacts.address.link}`" target="_blank">
                <p class="text-sm sm:text-base text-white">{{ contacts.address.link }}</p>
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section class="flex flex-col sm:flex-row gap-4 w-full sm:w-fit sm:gap-12 pt-4 sm:pt-0">
        <section class="w-full sm:w-fit">
          <h5 class="text-white font-semibold text-xl sm:text-lg text-center sm:text-left mb-2 sm:mb-0">Nawigacja</h5>
          <ul class="grid grid-flow-col sm:grid-flow-row w-full sm:w-fit gap-2 sm:gap-0">
            <li v-for="route in routes" :key="route.name">
              <RouterLink :to="route.link">
                <p class="text-md sm:text-md text-blue sm:text-white text-center sm:text-left bg-white sm:bg-transparent rounded-full sm:rounded-none py-1.5 sm:py-0">{{ route.name }}</p>
              </RouterLink>
            </li>
          </ul>
        </section>
      </section>
    </section>
  </footer>
</template>

<style>
</style>