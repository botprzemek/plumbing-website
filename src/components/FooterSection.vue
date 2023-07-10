<script setup>
import { contacts, routes, socials } from '@/data'
</script>

<template>
  <footer
    class="relative z-30 select-none h-fit bg-black px-phone sm:px-fit py-12 flex flex-col gap-3"
  >
    <section class="flex flex-col sm:flex-row justify-between gap-3 sm:gap-9">
      <section class="flex flex-col w-full justify-between gap-2 sm:gap-0">
        <p class="text-white font-semibold text-center sm:text-left text-4xl sm:text-4xl">
          Pan od Rurek
        </p>
        <p
          class="text-white text-base sm:text-sm text-center sm:text-left flex flex-col sm:flex-row break-all gap-1"
        >
          Spółka z o.o. NIP: 9372743179
        </p>
        <a
          href="https://botprzemek.pl/"
          target="_blank"
          class="text-white text-base sm:text-sm text-center sm:text-left flex justify-center sm:justify-start break-all gap-1"
        >
          Wykonanie
          <span class="font-semibold text-blue transition-colors duration-200 ease-in"
            >botprzemek.pl</span
          >
          © 2023
        </a>
      </section>
      <section class="flex flex-col sm:flex-row gap-3 sm:gap-9">
        <section class="grid grid-cols-2 sm:flex sm:flex-row gap-4 w-full sm:w-fit sm:gap-12">
          <section>
            <p class="text-blue font-semibold text-lg mb-2">Sociale</p>
            <ul class="grid grid-flow-row gap-1">
              <li v-for="social in socials" :key="social.name">
                <a :href="social.link" target="_blank">
                  <p
                    class="text-base text-white hover:text-blue transition-colors duration-200 ease-in"
                  >
                    {{ social.name }}
                  </p>
                </a>
              </li>
            </ul>
          </section>
          <section>
            <p class="text-blue font-semibold text-lg mb-2">Kontakt</p>
            <ul class="grid grid-flow-row gap-1">
              <li>
                <a :href="`tel:${contacts.phone.link}`">
                  <p
                    class="text-base text-white hover:text-blue transition-colors duration-200 ease-in"
                  >
                    {{ contacts.phone.link }}
                  </p>
                </a>
              </li>
              <li>
                <a :href="`mailto:${contacts.email.link}`">
                  <p
                    class="text-base text-white hover:text-blue transition-colors duration-200 ease-in"
                  >
                    {{ contacts.email.link }}
                  </p>
                </a>
              </li>
              <li>
                <a
                  :href="`https://www.google.com/maps/place/${contacts.address.link}`"
                  target="_blank"
                >
                  <p
                    class="text-base text-white hover:text-blue transition-colors duration-200 ease-in"
                  >
                    {{ contacts.address.link }}
                  </p>
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section class="flex flex-col sm:flex-row gap-4 w-full sm:w-fit sm:gap-12">
          <section class="w-full sm:w-fit">
            <p class="text-blue font-semibold text-lg hidden sm:inline">Nawigacja</p>
            <ul class="grid grid-flow-col sm:grid-flow-row w-full sm:w-fit gap-2 sm:gap-0">
              <li v-for="route in routes" :key="route.name">
                <RouterLink :to="route.link">
                  <p
                    class="text-lg sm:text-base text-black sm:text-white text-center sm:text-left bg-white sm:bg-transparent rounded-full sm:rounded-none py-1.5 sm:py-0 hover:text-blue transition-colors duration-200 ease-in"
                  >
                    {{ route.name }}
                  </p>
                </RouterLink>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
    <hr class="border-blue border-2" />
  </footer>
</template>

<style></style>
