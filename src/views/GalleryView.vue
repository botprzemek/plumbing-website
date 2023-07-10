<script>
import { photos, clientAmount } from '@/data'
import { scrollInto, observer } from '@/methods'

export default {
  name: 'GalleryView',
  methods: {
    photos() {
      return photos
    },
    getImageUrl(path) {
      return new URL(`../assets/${path}`, import.meta.url).href
    },
    scrollInto(element) {
      scrollInto(element)
    }
  },
  mounted() {
    setTimeout(async () =>
      document.querySelectorAll('.content').forEach((element) => observer.observe(element))
    )
    setInterval(() => {
      if (this.counter !== clientAmount) this.counter++
    }, 0)
  }
}
</script>
<template>
  <section
    class="grid py-8 sm:py-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all"
  >
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h1 class="text-black font-semibold text-2xl sm:text-6xl">Galeria</h1>
      <p class="text-black text-base sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>
      <section class="grid grid-cols-2 sm:grid-cols-2 sm:grid-rows-2 gap-4 w-full h-fit">
        <section
          @click="scrollInto(photo)"
          v-for="(photo, index) in photos()"
          :key="photo"
          :class="`relative flex flex-col-reverse w-full h-48 rounded-2xl overflow-hidden group hover:cursor-pointer`"
        >
          <img
            :src="getImageUrl(`images/photo_${index + 1}.webp`)"
            :alt="photo.charAt(0).toUpperCase() + photo.replaceAll('_', ' ').slice(1)"
            loading="lazy"
            class="object-cover absolute w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <section class="relative bg-blue pb-4 pt-4 px-4 w-full">
            <p class="text-white sm:font-semibold text-base sm:text-xl">
              {{ photo.charAt(0).toUpperCase() + photo.replaceAll('_', ' ').slice(1) }}
            </p>
            <hr class="my-2 border-1" />
            <span class="text-white">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </span>
          </section>
        </section>
      </section>
    </section>
  </section>
  <section
    v-for="photo in photos()"
    :key="photo"
    :class="`grid py-8 sm:py-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all ${photo}`"
  >
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h2 class="text-black font-semibold text-2xl sm:text-6xl text-left">
        {{ photo.charAt(0).toUpperCase() + photo.replaceAll('_', ' ').slice(1) }}
      </h2>
      <p class="text-black text-base sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>
    </section>
  </section>
</template>
