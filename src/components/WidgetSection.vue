<script setup>
import PhoneIcon from '@/components/icon/PhoneIcon.vue'
import { contacts } from '@/data'
import { mobileCheck } from '@/methods'
</script>

<template>
  <aside class="sticky bottom-0 z-50 grid place-items-end">
    <button
      title="Phone widget"
      class="px-6 py-1.5 gap-1 bg-black h-fit w-fit rounded-full hover:scale-105 transition-transform duration-300 ease-in-out -translate-x-3 -translate-y-3 shadow-sm"
    >
      <a
        :href="`tel:${contacts.phone.link}`"
        aria-label="Kliknij, aby zadzwonić do nas"
        class="text-base sm:text-base grid gap-2 grid-flow-col place-items-center"
        tabindex="-1"
      >
        <span v-if="!mobileCheck()" class="text-white">Zadzwoń teraz!</span>
        <PhoneIcon />
      </a>
    </button>
  </aside>
</template>

<style></style>
