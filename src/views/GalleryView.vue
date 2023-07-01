<script>
import {certificates, photos, clientAmount} from '@/data';
import {mobileCheck} from '@/methods';

export default {
  name: 'GalleryView',
  methods: {
    photos() {
      return photos;
    },
    certificates() {
      return certificates;
    },
    getImageUrl(path) {
      return new URL(`../assets/${path}`, import.meta.url).href;
    }
  },
  data() {
    return {
      counter: Math.floor(clientAmount/1000)*1000,
      mobile: mobileCheck(),
    }
  },
  mounted() {
    setInterval(() => {
      if (this.counter !== clientAmount) this.counter++;
    }, 0);
  },
}
</script>
<template>
  <section v-if="mobile" class="relative w-full h-fit flex flex-col place-content-between items-center">
    <aside class="absolute z-20 w-full h-full bg-gradient-to-b from-black/60 to-black/0 bg-cover"></aside>
    <aside class="absolute z-10 w-full h-full">
      <img :src="getImageUrl(`images/photo_3.jpg`)" alt="Montaż pomp ciepła" class="w-full h-full object-cover">
    </aside>
    <RouterLink to="/" class="relative z-20 w-fit h-fit text-white text-center">
      <h1 class="font-semibold text-3xl mt-16">Pan od Rurek</h1>
      <p class="mb-8">Profesjonalne instalacje i montaż</p>
    </RouterLink>
    <section class="relative z-20 w-full h-fit grid place-items-center sm:place-items-start mb-16">
      <button class="px-8 py-1 bg-blue h-fit w-fit rounded-full border-2 border-blue text-white hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out">
        <RouterLink to="/o-nas" tabindex="-1">
          <p class="text-base">Przekonaj się sam</p>
        </RouterLink>
      </button>
    </section>
  </section>
  <section v-else class="flex flex-col sm:grid sm:grid-cols-[3fr,1fr] gap-4 sm:gap-12 py-8 sm:py-16 px-phone sm:px-fit">
    <section class="grid place-items-center w-full h-full">
      <section class="aspect-auto w-full h-full">
        <iframe title="Film Youtube" src="https://www.youtube.com/embed/qhkCIk3yJvE" frameborder="0" class="aspect-video sm:aspect-auto sm:w-full sm:h-full rounded-2xl"></iframe>
      </section>
    </section>
    <section class="flex flex-col gap-4 items-start">
      <h1 class="text-black font-semibold text-2xl sm:text-6xl text-left">Profesjonalny montaż</h1>
      <p class="text-black text-base sm:text-lg">
        Szukasz profesjonalnych instalatorów lub hydraulików?
        Trafiłeś w odpowiednie miejsce.
        Zapraszamy do kontaktu, odpowiemy na pytania,
        wycenimy oraz wykonamy usługę dla Ciebie.
      </p>
      <section class="w-full h-fit grid place-items-center sm:place-items-start">
        <button class="px-8 py-1 bg-blue h-fit w-fit rounded-full border-2 border-blue text-white hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out">
          <RouterLink to="/o-nas" tabindex="-1">
            <p class="text-base">Przekonaj się sam</p>
          </RouterLink>
        </button>
      </section>
    </section>
  </section>
</template>