<script>
import {certificates, photos, clientAmount} from '@/data';
import {scrollInto, mobileCheck, observer} from '@/methods';

export default {
  name: 'HomeView',
  methods: {
    photos() {
      return photos;
    },
    certificates() {
      return certificates;
    },
    getImageUrl(path) {
      return new URL(`../assets/${path}`, import.meta.url).href;
    },
    scrollInto(element) {
      scrollInto(element);
    }
  },
  data() {
    return {
      counter: Math.floor(clientAmount/1000)*1000,
      mobile: mobileCheck(),
    }
  },
  mounted() {
    setTimeout(async () => document.querySelectorAll('.content').forEach(element => observer.observe(element)));
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
      <img :src="getImageUrl(`images/photo_3.jpg`)" alt="Montaż pomp ciepła" loading="lazy" class="w-full h-full object-cover">
    </aside>
    <RouterLink to="/" class="relative z-20 w-fit h-fit text-white text-center">
      <h1 class="font-semibold text-3xl mt-16">Pan od Rurek</h1>
      <p class="mb-8">Profesjonalne instalacje i montaż</p>
    </RouterLink>
    <section class="relative z-20 w-full h-fit grid place-items-center sm:place-items-start mb-16">
      <button class="px-8 py-1 bg-blue h-fit w-fit rounded-full border-2 border-blue text-white hover:scale-105 group-hover:cursor-pointer transition-transform duration-300 ease-in-out">
        <RouterLink to="/o-nas" tabindex="-1">
          <p class="text-base">Przekonaj się sam</p>
        </RouterLink>
      </button>
    </section>
  </section>
  <section v-else class="flex flex-col sm:grid sm:grid-cols-[3fr,1fr] gap-4 sm:gap-12 py-8 sm:py-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all start">
    <section class="grid place-items-center w-full h-full">
      <section class="relative aspect-auto w-full h-full rounded-2xl overflow-hidden group hover:cursor-pointer">
        <img :src="getImageUrl(`images/photo_2.jpg`)" alt="Montaż pomp ciepła" loading="lazy" class="absolute object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out">
        <aside class="w-full h-full absolute grid justify-center items-end">
          <section class="w-fit h-fit grid grid-cols-3 mb-4 gap-3">
            <section v-for="index in 3" :key="index" class="w-3 h-3 aspect-square bg-white rounded-full"></section>
          </section>
        </aside>
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
        <button @click="scrollInto('offer')" class="px-8 py-1 bg-blue h-fit w-fit rounded-full border-2 border-blue text-white hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out">
          <span class="text-base">Przekonaj się sam</span>
        </button>
      </section>
    </section>
  </section>
  <section class="grid py-8 sm:py-16 px-phone sm:px-fit bg-blue content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all trust">
    <section class="flex flex-col gap-4 items-center">
      <h2 class="text-white font-semibold text-2xl sm:text-6xl text-center sm:text-left leading-relaxed sm:leading-none sm:mb-4">
        Zaufały nam
        <br v-if="mobile">
        <span class="bg-white rounded-full text-blue px-8">
          {{ counter }}
        </span>
        osoby
      </h2>
      <p class="text-white text-base sm:text-lg text-center">
        Przez wszystkie lata działalności zrealizowaliśmy dziesiątki inwestycji związanych z instalacjami.<br>
        Firma została stworzona by realizować marzenia ludzi,
        posiadamy wieloletnie doświadczenie w budowie.
      </p>
    </section>
  </section>
  <section class="grid py-8 sm:py-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all offer">
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h2 class="text-black font-semibold text-2xl sm:text-6xl">Nasza oferta</h2>
      <p class="text-black text-base sm:text-lg">
        Świadczymy kompleksowe usługi w zakresie instalacji hydraulicznych
        i gazowych oraz montażu kotłowni/maszynowni, pomp ciepła,
        ogrzewania podłogowego i czyszczenie chemiczne instalacji.
      </p>
      <section class="grid grid-cols-2 sm:grid-cols-2 sm:grid-rows-2 gap-4 w-full h-fit">
        <RouterLink v-for="(photo, index) in photos()" to="/uslugi" :key="photo" :class="`relative flex flex-col-reverse w-full h-48 rounded-2xl overflow-hidden group`">
          <img :src="getImageUrl(`images/photo_${index + 1}.jpg`)" :alt="photo.charAt(0).toUpperCase() + photo.replaceAll('_', ' ').slice(1)" loading="lazy" class="object-cover absolute w-full h-full group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-300 ease-in-out">
          <section class="relative bg-blue pb-4 pt-4 px-4 w-full">
            <p class="text-white sm:font-semibold text-base sm:text-xl">{{ photo.charAt(0).toUpperCase() + photo.replaceAll('_', ' ').slice(1) }}</p>
            <hr class="my-2 border-1">
            <span class="text-white">
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </section>
        </RouterLink>
      </section>
    </section>
  </section>
  <section class="grid py-8 sm:py-16 px-phone sm:px-fit bg-blue content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all certificates">
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h2 class="text-white font-semibold text-2xl sm:text-6xl">Certyfikaty</h2>
      <p class="text-white text-base sm:text-lg">
        Jesteśmy autoryzowanymi instalatorami kotłów, pomp,
        kanalizacji i rekuperacji w ogólnopolskim stowarzyszeniu firm instalacyjnych i serwisowych
        oraz certyfikowani do użytku urządzeń firmy Vaillant oraz Saunier.
      </p>
      <section class="relative grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 gap-4 sm:gap-4 w-full h-phone sm:h-64">
        <a v-for="certificate in Object.keys(certificates())" :key="certificate" :href="certificates()[certificate].link" target="_blank" class="relative w-full h-full rounded-2xl overflow-hidden group">
          <img :src="getImageUrl(`images/${certificate}.jpg`)" :alt="`Certyfikat firmy ${certificate.charAt(0).toUpperCase() + certificate.slice(1)}`" loading="lazy" class="object-cover absolute w-full h-full group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-300 ease-in-out">
          <section class="relative bg-white flex flex-col-reverse py-3 w-full shadow-md">
            <p class="text-black font-semibold text-xl text-center">{{ certificate.charAt(0).toUpperCase() + certificate.slice(1) }}</p>
          </section>
        </a>
      </section>
    </section>
  </section>
  <section class="grid py-8 sm:py-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all video">
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <section class="grid sm:grid-cols-[2fr,1fr] sm:gap-12">
        <section v-if="!mobile" class="relative aspect-video sm:aspect-auto sm:w-full sm:h-full">
          <iframe title="Film Youtube" src="https://www.youtube.com/embed/qhkCIk3yJvE" class="aspect-video sm:aspect-auto sm:w-full sm:h-full rounded-2xl"></iframe>
        </section>
        <section class="flex flex-col gap-4 items-start">
          <h2 class="text-black font-semibold text-2xl sm:text-6xl">Prezentacja wideo</h2>
          <p class="text-black text-base sm:text-lg">
            Kanał poświęcony zagadnieniom instalacyjnym oraz hydraulicznym,
            pokazujemy tajniki z naszej pracy,
            oraz poradniki jak dobrze wykonać instalacje sanitarne, grzewcze, solarne, lub klimatyzacyjne.
          </p>
          <section class="w-full h-fit grid place-items-center sm:place-items-start">
            <button class="px-8 py-1 bg-blue h-fit w-fit rounded-full border-2 border-blue text-white hover:scale-105 group-hover:cursor-pointer transition-transform duration-300 ease-in-out">
              <a href="https://www.youtube.com/@PanOdRurek" target="_blank" tabindex="-1">
                <p class="text-base">Subskrybuj!</p>
              </a>
            </button>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>