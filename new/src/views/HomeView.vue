<script setup>
</script>

<template>
  <section class="grid flex sm:grid-cols-[2fr,1fr] gap-12 py-12">
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
      <p class="text-black text-lg sm:text-xl">
        Szukasz profesjonalnych instalatorów lub hydraulików? Trafiłeś
        w odpowiednie miejsce. Zapraszamy do kontaktu, odpowiemy na
        pytania, wycenimy oraz wykonamy usługę dla Ciebie.
      </p>
      <button class="px-8 py-1 bg-blue h-fit w-fit rounded-full border-2 border-blue text-white text-lg hover:text-blue hover:bg-transparent transition-colors duration-200 ease-in">
        <RouterLink to="/uslugi">
          <p>Przekonaj się sam</p>
        </RouterLink>
      </button>
    </section>
  </section>
</template>
