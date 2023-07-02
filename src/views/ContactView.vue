<script>
import {contacts} from '@/data';
import {observer} from '@/methods';
import PhoneIcon from '@/components/icons/PhoneIcon.vue';
import MailIcon from '@/components/icons/MailIcon.vue';
import MapIcon from '@/components/icons/MapIcon.vue';
import SendIcon from '@/components/icons/SendIcon.vue';

export default {
  name: 'ContactView',
  components: {
    MapIcon,
    MailIcon,
    PhoneIcon,
    SendIcon,
  },
  methods: {
    contacts() {
      return contacts;
    },
  },
  mounted() {
    setTimeout(async () => document.querySelectorAll('.content').forEach(element => observer.observe(element)));
  },
}
</script>
<template>
  <section class="w-full flex flex-col sm:grid gap-4 sm:gap-12 py-8 sm:py-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all">
    <form class="w-full flex flex-col gap-4 items-center sm:items-start">
      <h1 class="text-black font-semibold text-2xl sm:text-6xl">Kontakt</h1>
      <p class="text-black text-base sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>
      <section class="w-full grid grid-cols-[3fr,1fr] gap-4">
        <section class="w-full">
          <textarea class="w-full h-full border-black border-2 rounded-2xl resize-none"/>
        </section>
        <section class="w-full">
          <section class="w-full grid grid-rows-3 gap-4">
            <button class="grid place-items-center h-fit w-full px-6 py-1.5 bg-blue rounded-full text-white hover:scale-105 transition-transform duration-300 ease-in-out">
              <a :href="`tel:${contacts().phone.link}`" class="text-base sm:text-base flex gap-2 place-items-center" tabindex="-1">
                <p class="text-sm sm:text-base text-white">{{ contacts().phone.name }}</p>
                <PhoneIcon/>
              </a>
            </button>
            <button class="grid place-items-center h-fit w-full px-6 py-1.5 bg-blue rounded-full text-white hover:scale-105 transition-transform duration-300 ease-in-out">
              <a :href="`tel:${contacts().email.link}`" class="text-base sm:text-base flex gap-2 place-items-center" tabindex="-1">
                <p class="text-sm sm:text-base text-white">{{ contacts().email.name }}</p>
                <MailIcon/>
              </a>
            </button>
            <button class="grid place-items-center h-fit w-full px-6 py-1.5 bg-blue rounded-full text-white hover:scale-105 transition-transform duration-300 ease-in-out">
              <a :href="`tel:${contacts().address.link}`" class="text-base sm:text-base flex gap-2 place-items-center" tabindex="-1">
                <p class="text-sm sm:text-base text-white">{{ contacts().address.name }}</p>
                <MapIcon/>
              </a>
            </button>
          </section>
        </section>
      </section>
      <button type="submit" class="w-full grid place-items-center h-fit px-6 py-1.5 bg-blue rounded-full text-white hover:scale-105 transition-transform duration-300 ease-in-out">
        <a :href="`tel:${contacts().address.link}`" class="text-base sm:text-base flex gap-2 place-items-center" tabindex="-1">
          <p class="text-sm sm:text-base text-white">Wyślij formularz</p>
          <SendIcon/>
        </a>
      </button>
    </form>
  </section>
</template>