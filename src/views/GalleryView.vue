<script>
import { photos } from '@/data'
import { scrollInto, observe } from '@/methods'

export default {
  name: 'GalleryView',
  methods: {
    photos() {
      return photos
    },
    getImageUrl(path) {
      return new URL(`../assets/${path}`, import.meta.url).href
    },
    scrollInto(element, where) {
      scrollInto(element, where)
    },
    changeImage(index) {
      if (this.animating) return
      this.animating = true
      const photos = Object.keys(this.photos())
      const images = document.querySelectorAll(`.gallery-${index + 1}`)
      this.imageState[index][0] =
        this.imageState[index][0] === 5 ? 1 : this.imageState[index][0] + 1
      this.imageState[index][1] =
        this.imageState[index][1] === 5 ? 1 : this.imageState[index][1] + 1
      images.forEach((image) => {
        image.classList.add('transition-transform', 'duration-500', 'ease-in-out')
      })
      images[0].classList.toggle('-translate-x-[100%]')
      images[1].classList.toggle('translate-x-[100%]')
      setTimeout(() => {
        images[0].src = this.getImageUrl(
          `images/${photos[index]}_${this.imageState[index][0]}.webp`
        )
        images[1].src = this.getImageUrl(
          `images/${photos[index]}_${this.imageState[index][1]}.webp`
        )
        images.forEach((image) =>
          image.classList.remove('transition-transform', 'duration-500', 'ease-in-out')
        )
        images[0].classList.toggle('-translate-x-[100%]')
        images[1].classList.toggle('translate-x-[100%]')
        this.animating = false
      }, 750)
    }
  },
  data() {
    return {
      imageState: [
        [1, 2],
        [1, 2],
        [1, 2],
        [1, 2],
        [1, 2]
      ],
      animating: false
    }
  },
  mounted() {
    observe()
  }
}
</script>
<template>
  <section
    class="w-full h-full grid pt-8 sm:pt-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all"
  >
    <section class="w-full h-full flex flex-col gap-4 items-center">
      <h1 class="text-black font-semibold text-2xl sm:text-6xl">Galeria</h1>
      <section class="grid grid-cols-2 sm:grid-cols-2 sm:grid-rows-2 gap-4 w-full h-fit">
        <section
          v-for="(photo, index) in Object.keys(photos())"
          :key="photo"
          @click="scrollInto(`gallery-${index + 1}`, 'center')"
          :class="`relative grid grid-rows-2 w-full h-full rounded-2xl overflow-hidden group hover:cursor-pointer`"
        >
          <img
            :src="getImageUrl(`images/${photo}_1.webp`)"
            :alt="photos()[photo]"
            loading="lazy"
            class="object-cover absolute w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <section></section>
          <section class="w-full h-full grid place-items-end">
            <section class="relative bg-blue pb-4 pt-4 px-4 w-full">
              <p class="text-white sm:font-semibold text-base sm:text-xl">
                {{ photos()[photo].name }}
              </p>
              <hr class="my-2 border-1" />
              <section class="h-[3em] overflow-hidden">
                <span class="text-white leading-[1.5em]">
                  {{ photos()[photo].description }}
                </span>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  </section>
  <section
    v-for="index1 in 4"
    :key="index1"
    @click="changeImage(index1 - 1)"
    class="grid place-items-center w-full h-full py-4 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all"
  >
    <section
      class="relative aspect-video w-full h-full rounded-2xl overflow-hidden group hover:cursor-pointer"
    >
      <img
        :src="getImageUrl(`images/${Object.keys(photos())[index1 - 1]}_1.webp`)"
        alt="Montaż pomp ciepła"
        rel="preload"
        :class="`gallery-${index1} first absolute object-cover w-full h-full transition-transform duration-500 ease-in-out`"
      />
      <img
        :src="getImageUrl(`images/${Object.keys(photos())[index1 - 1]}_2.webp`)"
        alt="Montaż pomp ciepła"
        :class="`gallery-${index1} second absolute object-cover w-full h-full translate-x-[100%] transition-transform duration-500 ease-in-out`"
      />
      <aside class="w-full h-full absolute grid justify-center items-end">
        <section class="w-fit h-fit grid grid-cols-5 mb-4 gap-3">
          <aside v-for="index2 in 5" :key="index2" class="w-2 h-2 aspect-square">
            <section
              v-if="index2 === imageState[index1 - 1][0]"
              class="w-full h-full bg-white rounded-full"
            ></section>
            <section v-else class="w-full h-full bg-white/50 rounded-full"></section>
          </aside>
        </section>
      </aside>
    </section>
  </section>
  <aside class="w-screen pt-8 sm:pt-16"></aside>
</template>
