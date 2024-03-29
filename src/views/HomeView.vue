<script>
import '@justinribeiro/lite-youtube'
import { certificates, clientAmount, photos } from '@/data'
import { mobileCheck, observe, scrollInto } from '@/methods'
import IboLogo from '@/components/logo/IboLogo.vue'
import FernoxLogo from '@/components/logo/FernoxLogo.vue'
import SaunierLogo from '@/components/logo/SaunierLogo.vue'
import VaillantLogo from '@/components/logo/VaillantLogo.vue'
import KanLogo from '@/components/logo/KanLogo.vue'

export default {
  name: 'HomeView',
  components: { VaillantLogo, SaunierLogo, FernoxLogo, IboLogo, KanLogo },
  methods: {
    photos() {
      return photos
    },
    certificates() {
      return certificates
    },
    getImageUrl(path) {
      return new URL(`../assets/${path}`, import.meta.url).href
    },
    scrollInto(element, where) {
      scrollInto(element, where)
    },
    changeImage() {
      if (this.animating) return
      this.animating = true
      const photos = Object.keys(this.photos())
      const images = document.querySelectorAll('.gallery')
      this.imageState[0] = this.imageState[0] === photos.length - 1 ? 0 : this.imageState[0] + 1
      this.imageState[1] = this.imageState[1] === photos.length - 1 ? 0 : this.imageState[1] + 1
      images.forEach((image) =>
        image.classList.add('transition-transform', 'duration-500', 'ease-in-out')
      )
      images[0].classList.toggle('-translate-x-[100%]')
      images[1].classList.toggle('translate-x-[100%]')
      setTimeout(() => {
        images[0].src = this.getImageUrl(`images/${photos[this.imageState[0]]}_1.webp`)
        images[1].src = this.getImageUrl(`images/${photos[this.imageState[1]]}_1.webp`)
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
      counter: Math.floor(clientAmount / 1000) * 1000,
      mobile: mobileCheck(),
      imageState: [0, 1],
      animating: false
    }
  },
  mounted() {
    observe()
    setInterval(() => {
      if (this.counter !== clientAmount) this.counter++
    }, 0)
  }
}
</script>
<template>
  <section
    v-if="mobile"
    class="relative w-full h-fit flex flex-col place-content-between items-center"
  >
    <aside
      class="absolute z-20 w-full h-full bg-gradient-to-b from-black/60 to-black/0 bg-cover"
    ></aside>
    <aside class="absolute z-10 w-full h-full">
      <img
        :src="getImageUrl(`images/montaz_pomp_ciepla_1.webp`)"
        alt="Montaż pomp ciepła"
        rel="preload"
        class="w-full h-full object-cover"
      />
    </aside>
    <RouterLink to="/" class="relative z-20 w-fit h-fit p-4 text-white text-center">
      <h1 class="font-semibold text-3xl mt-16">Pan od Rurek</h1>
      <p class="mb-8">Profesjonalne instalacje i montaż</p>
    </RouterLink>
    <section class="relative z-20 w-full h-fit grid place-items-center sm:place-items-start mb-16">
      <button
        class="px-8 py-2 sm:py-1 bg-blue h-fit w-fit rounded-full border-2 border-blue text-white hover:scale-105 group-hover:cursor-pointer transition-transform duration-300 ease-in-out"
      >
        <RouterLink to="/o-nas" tabindex="-1">
          <p class="text-lg sm:text-base">Przekonaj się sam</p>
        </RouterLink>
      </button>
    </section>
  </section>
  <section
    v-else
    class="relative w-full h-[32rem] gap-4 sm:gap-12 content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all start"
  >
    <section class="absolute grid place-items-center w-full h-full">
      <section class="relative aspect-auto w-full h-full overflow-hidden">
        <img
          :src="getImageUrl(`images/${Object.keys(photos())[0]}_1.webp`)"
          alt="Montaż pomp ciepła"
          rel="preload"
          class="gallery first absolute object-cover w-full h-full transition-transform duration-500 ease-in-out"
        />
      </section>
    </section>
    <section class="relative w-full h-full flex justify-end px-phone sm:px-fit">
      <section class="flex flex-col gap-3 justify-center px-8 w-fit h-full bg-white/80">
        <h1 class="text-black font-semibold text-2xl sm:text-6xl text-left">
          Profesjonalny<br />
          montaż
        </h1>
        <ul class="list-[circle] list-inside">
          <li>
            <span
              >Pompy ciepła <span class="text-blue font-semibold">Vaillant</span> oraz
              <span class="text-blue font-semibold">Saunier Duval,</span>
            </span>
          </li>
          <li>
            <span
              >Kotły gazowe <span class="text-blue font-semibold">Vaillant</span> oraz
              <span class="text-blue font-semibold">Saunier Duval,</span></span
            >
          </li>
          <li>
            <span
              >Systemowe ogrzewanie marki
              <span class="text-blue font-semibold">KAN-Therm,</span></span
            >
          </li>
          <li>
            <span
              >Chemiczne czyszczenie instalacji
              <span class="text-blue font-semibold">grzewczych,</span></span
            >
          </li>
        </ul>
        <section class="w-full h-fit grid place-items-center sm:place-items-start">
          <button
            @click="scrollInto('offer', 'center')"
            class="px-8 py-1 bg-blue h-fit w-fit rounded-full border-2 border-blue text-white hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
          >
            <span class="text-base">Przekonaj się sam</span>
          </button>
        </section>
      </section>
    </section>
  </section>
  <section
    class="grid py-8 sm:py-16 px-phone sm:px-fit bg-blue content opacity-0 ease-in-out duration-[1000ms] transition-all trust"
  >
    <section class="flex flex-col gap-4 items-center">
      <h2
        class="text-white font-semibold text-3xl sm:text-6xl text-center sm:text-left leading-relaxed sm:leading-none sm:mb-4"
      >
        Zaufały nam
        <br v-if="mobile" />
        <span class="bg-white rounded-full text-blue px-8">
          {{ counter }}
        </span>
        osoby
      </h2>
      <p class="text-white text-base sm:text-lg text-center">
        Przez wszystkie lata działalności zrealizowaliśmy dziesiątki inwestycji związanych z
        instalacjami.<br />
        Firma została stworzona by realizować marzenia ludzi, posiadamy wieloletnie doświadczenie w
        budowie.
      </p>
      <h2
        class="text-white font-semibold text-xl text-center sm:text-left leading-relaxed sm:leading-none"
      >
        Swoje instalacje opieramy na systemach:
      </h2>
      <section
        class="w-full h-fit grid grid-rows-2 grid-cols-3 sm:grid-rows-none sm:grid-cols-5 gap-4 sm:gap-8 px-2 sm:px-0 sm:pb-8 place-items-center"
      >
        <aside class="w-full h-full">
          <IboLogo />
        </aside>
        <aside class="w-full h-full">
          <SaunierLogo />
        </aside>
        <aside class="w-full h-full">
          <VaillantLogo />
        </aside>
        <aside class="w-full h-full">
          <FernoxLogo />
        </aside>
        <aside class="w-full h-full">
          <KanLogo />
        </aside>
      </section>
    </section>
  </section>
  <section
    class="grid py-8 sm:py-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all offer"
  >
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h2 class="text-black font-semibold text-3xl sm:text-6xl">Nasza oferta</h2>
      <p class="text-black text-base sm:text-lg">
        Świadczymy kompleksowe usługi w zakresie instalacji hydraulicznych i gazowych oraz montażu
        kotłowni/maszynowni, pomp ciepła, ogrzewania podłogowego i czyszczenie chemiczne instalacji.
      </p>
      <section class="grid grid-cols-2 sm:grid-cols-2 sm:grid-rows-2 gap-4 w-full h-fit">
        <RouterLink
          v-for="photo in Object.keys(photos())"
          to="/uslugi"
          :key="photo"
          :class="`relative grid grid-rows-2 w-full h-full rounded-2xl overflow-hidden group hover:cursor-pointer`"
        >
          <img
            :src="getImageUrl(`images/${photo}_1.webp`)"
            :alt="`Zdjęcie - ${photos()[photo].name}`"
            loading="lazy"
            class="object-cover absolute w-full h-full group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-300 ease-in-out"
          />
          <section></section>
          <section class="w-full h-full grid place-items-end">
            <section class="relative h-full bg-blue pb-4 pt-4 px-4 w-full">
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
        </RouterLink>
      </section>
    </section>
  </section>
  <section
    class="grid py-8 sm:py-16 px-phone sm:px-fit bg-blue content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all certificates"
  >
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h2 class="text-white font-semibold text-3xl sm:text-6xl">Certyfikaty</h2>
      <p class="text-white text-base sm:text-lg">
        Jesteśmy autoryzowanym instalatorem kotłow gazowych, pomp ciepła, systemów grzewczych,
        należymy do ogólnopolskiego stowarzyszenie firm instalacyjnych i serwisowych a naszym
        głównym atutem jest certyfikacja VAILLANT oraz SAUNIER DUVAL.
      </p>
      <section
        class="relative grid grid-rows-5 sm:grid-rows-none sm:grid-cols-5 gap-4 sm:gap-4 w-full h-phone sm:h-64"
      >
        <a
          v-for="certificate in Object.keys(certificates())"
          :key="certificate"
          :href="certificates()[certificate].link"
          target="_blank"
          class="relative w-full h-full rounded-2xl overflow-hidden group"
        >
          <img
            :src="getImageUrl(`images/${certificate}.webp`)"
            :alt="`Certyfikat firmy ${certificates()[certificate].name}`"
            loading="lazy"
            class="object-cover absolute w-full h-full group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-300 ease-in-out"
          />
          <section class="relative bg-white flex flex-col-reverse py-3 w-full shadow-md">
            <p
              class="text-black font-semibold text-xl text-center group-hover:text-blue transition-colors duration-300 ease-in-out"
            >
              {{ certificates()[certificate].name }}
            </p>
          </section>
        </a>
      </section>
    </section>
  </section>
  <section
    class="grid py-8 sm:py-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all video"
  >
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <section class="grid sm:grid-cols-[4fr,1fr] sm:gap-12">
        <section
          v-if="!mobile"
          class="relative grid place-items-center aspect-video sm:aspect-auto sm:w-full sm:h-full rounded-2xl overflow-hidden"
        >
          <lite-youtube
            videotitle="Pan od Rurek"
            videoid="qhkCIk3yJvE"
            playlistid="UULFbMZ-mKfXFLL73mE6DYa5Bg"
            params="playnext=1"
            loading="lazy"
            nocookie
            autoload
            class="absolute aspect-video sm:aspect-auto sm:w-full sm:h-full"
          ></lite-youtube>
        </section>
        <section class="flex flex-col gap-4 items-start">
          <h2 class="text-black font-semibold text-2xl sm:text-6xl">Prezentacja wideo</h2>
          <p class="text-black text-base sm:text-lg">
            Kanał poświęcony zagadnieniom instalacyjnym oraz hydraulicznym, pokazujemy tajniki z
            naszej pracy, oraz poradniki jak dobrze wykonać instalacje sanitarne, grzewcze, solarne,
            lub klimatyzacyjne.
          </p>
          <section class="w-full h-fit grid place-items-center sm:place-items-start">
            <button
              class="px-8 py-2 sm:py-1 bg-blue h-fit w-fit rounded-full border-2 border-blue text-white hover:scale-105 group-hover:cursor-pointer transition-transform duration-300 ease-in-out"
            >
              <a href="https://www.youtube.com/@PanOdRurek" target="_blank" tabindex="-1">
                <p class="text-lg sm:text-base">Subskrybuj!</p>
              </a>
            </button>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>
