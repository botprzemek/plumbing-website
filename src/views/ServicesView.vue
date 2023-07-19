<script>
import { photos } from '@/data'
import { observe } from '@/methods'

export default {
  name: 'ContactView',
  methods: {
    photos() {
      return photos
    }
  },
  mounted() {
    observe()
  }
}
</script>
<template>
  <section
    class="w-full flex flex-col sm:grid gap-4 sm:gap-12 py-8 sm:py-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all"
  >
    <section class="w-full flex flex-col gap-4 items-center sm:items-start">
      <h1 class="text-black font-semibold text-2xl sm:text-6xl">Usługi</h1>
      <p class="text-black text-base sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>
    </section>
  </section>
  <section
    v-for="photo in Object.keys(photos())"
    :key="photo"
    :class="`grid py-8 sm:py-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all ${
      photos()[photo]
    }`"
  >
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h2 class="text-black font-semibold text-2xl sm:text-6xl text-left">
        {{ photos()[photo].name }}
      </h2>
      <span class="text-black text-base sm:text-lg">
        {{ photos()[photo].description }}
      </span>
    </section>
  </section>
  <aside class="w-screen pt-8 sm:pt-16"></aside>
</template>
