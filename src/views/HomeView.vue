<script>
export default {
  data() {
    return {
      counter: 23453,
    }
  }
}
</script>

<template>
  <section class="grid sm:grid-cols-[2fr,1fr] gap-12 py-12 sm:px-fit">
    <section class="relative grid place-items-center w-full h-full">
      <div class="absolute w-1/2 h-auto background_right">
        <img src="@/assets/blob.svg"/>
      </div>
      <div class="relative aspect-video sm:aspect-auto sm:w-full sm:h-full">
        <iframe src="https://www.youtube.com/embed/qhkCIk3yJvE" frameborder="0" class="aspect-video sm:aspect-auto sm:w-full sm:h-full rounded-2xl"></iframe>
      </div>
    </section>
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h1 class="text-black font-semibold text-6xl text-center sm:text-left">Profesjonalny montaż</h1>
      <p class="text-black text-base sm:text-lg">
        Szukasz profesjonalnych instalatorów lub hydraulików?
        Trafiłeś w odpowiednie miejsce.
        Zapraszamy do kontaktu, odpowiemy na pytania,
        wycenimy oraz wykonamy usługę dla Ciebie.
      </p>
      <button class="px-8 py-1 bg-blue h-fit w-fit rounded-full border-2 border-blue text-white text-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <RouterLink to="/o-nas">
          <p>Przekonaj się sam</p>
        </RouterLink>
      </button>
    </section>
  </section>
  <section class="w-full grid gap-12 py-12 px-phone sm:px-fit bg-blue">
    <section class="flex flex-col gap-4 items-center">
      <h1 @click="window.scrollTo({top: 0, left: 0, behavior: `smooth`})" class="text-white font-semibold text-6xl text-center sm:text-left">
        Zaufały nam
        <span class="bg-white rounded-full text-blue px-8">{{ counter }}</span>
        osoby
      </h1>
      <p class="text-white text-base sm:text-lg text-center">
        Firma została stworzona by realizować marzenia ludzi,
        posiadamy wieloletnie doświadczenie w budowie.
      </p>
      <button class="px-8 py-1 bg-white h-fit w-fit rounded-full border-2 border-white text-black text-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <RouterLink to="/uslugi">
          <p>Nasza oferta</p>
        </RouterLink>
      </button>
    </section>
  </section>
  <section class="grid gap-12 py-12 sm:px-fit">
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h1 class="text-black font-semibold text-6xl text-center sm:text-left">Nasza oferta</h1>
      <p class="text-black text-base sm:text-lg">
        Świadczymy kompleksowe usługi w zakresie instalacji hydraulicznych.
      </p>
      <section class="sm:grid-cols-[2fr,1fr] gap-12">
      </section>
    </section>
  </section>
  <section class="grid gap-12 py-12 sm:px-fit">
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h1 class="text-black font-semibold text-6xl text-center sm:text-left">Galeria</h1>
      <p class="text-black text-base sm:text-lg">
        Test 1
      </p>
      <section class="sm:grid-cols-[2fr,1fr] gap-12">
      </section>
    </section>
  </section>
  <section class="grid gap-12 py-12 sm:px-fit">
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h1 class="text-black font-semibold text-6xl text-center sm:text-left">Prezentacja wideo</h1>
      <p class="text-black text-base sm:text-lg">
        Kanał poświęcony zagadnieniom instalacyjnym oraz hydraulicznym,
        pokazujemy tajniki z naszej pracy,
        oraz poradniki jak dobrze wykonać instalacje sanitarne, grzewcze, solarne, lub klimatyzacyjne.
      </p>
      <section class="sm:grid-cols-[2fr,1fr] gap-12">
      </section>
    </section>
  </section>
  <section class="grid gap-12 py-12 sm:px-fit">
    <section class="flex flex-col gap-4 items-center sm:items-start">
      <h1 class="text-black font-semibold text-6xl text-center sm:text-left">Certyfikaty</h1>
      <p class="text-black text-base sm:text-lg">
        Test 3
      </p>
      <section class="sm:grid-cols-[2fr,1fr] gap-12">
      </section>
    </section>
  </section>
</template>