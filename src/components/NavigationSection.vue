<script>
import { contacts, routes, clientAmount } from '@/data'
import { scrollInto, mobileCheck } from '@/methods'
import CheckIcon from '@/components/icon/CheckIcon.vue'
import PhoneIcon from '@/components/icon/PhoneIcon.vue'
import TimeIcon from '@/components/icon/TimeIcon.vue'
import UserIcon from '@/components/icon/UserIcon.vue'

export default {
  name: 'NavigationSection',
  components: {
    CheckIcon,
    PhoneIcon,
    TimeIcon,
    UserIcon
  },
  methods: {
    scrollTo(element, where) {
      scrollInto(element, where)
    },
    contacts() {
      return contacts
    },
    routes() {
      return routes
    },
    clientAmount() {
      return clientAmount
    }
  },
  data() {
    return {
      path: window.location.pathname,
      mobile: mobileCheck()
    }
  },
  mounted() {
    this.$watch(
      () => this.$route.path,
      (to) => (this.path = to)
    )
  }
}
</script>

<template>
  <header
    class="header z-40 w-full select-none h-fit bg-blue text-sm px-phone sm:px-fit"
    tabindex="-1"
  >
    <ul v-if="!mobile" class="h-full flex flex-row justify-between items-center my-3">
      <li class="flex items-center gap-2">
        <CheckIcon />
        <p class="text-white">Profesjonalne instalacje i montaż</p>
      </li>
      <li class="flex items-center gap-2">
        <UserIcon />
        <p class="text-white">Ponad {{ clientAmount() }} zadowolonych klientów</p>
      </li>
      <li class="flex items-center gap-2">
        <TimeIcon />
        <p class="text-white">+10 lat doświadczenia</p>
      </li>
    </ul>
  </header>
  <nav
    v-if="!mobile"
    class="sticky top-0 z-30 px-phone sm:px-fit flex flex-row justify-center sm:justify-between h-16 bg-white shadow-sm"
  >
    <RouterLink v-if="path !== '/'" to="/" class="flex flex-row items-center gap-4 group">
      <img src="../assets/images/logo.webp" class="py-2 h-full w-fit" alt="Logo Pan od Rurek" />
      <section>
        <span
          class="text-black font-semibold text-2xl group-hover:text-blue transition-colors duration-200 ease-in"
          >Pan od Rurek</span
        >
      </section>
    </RouterLink>
    <button v-else @click="scrollTo('header', 'start')" class="flex flex-row items-center gap-4">
      <img src="../assets/images/logo.webp" class="py-2 h-full w-fit" alt="Logo Pan od Rurek" />
      <span
        class="text-black font-semibold text-2xl hover:text-blue transition-colors duration-200 ease-in"
        >Pan od Rurek</span
      >
    </button>
    <ul class="hidden sm:flex flex-row gap-4 items-center">
      <li>
        <button
          v-if="path === '/'"
          @click="scrollTo('header')"
          class="text-blue text-base udr-anim"
        >
          <span>Start</span>
        </button>
        <RouterLink
          v-else
          to="/"
          class="text-black text-base hover:text-blue transition-colors duration-200 ease-in udr-anim"
        >
          <span>Start</span>
        </RouterLink>
      </li>
      <li v-for="route in routes()" :key="route">
        <button v-if="path === route.link" class="text-blue text-base udr-anim">
          <span>{{ route.name }}</span>
        </button>
        <RouterLink
          v-else
          :to="route.link"
          class="text-black text-base hover:text-blue transition-colors duration-200 ease-in udr-anim"
        >
          <span>{{ route.name }}</span>
        </RouterLink>
      </li>
      <li>
        <button
          class="px-6 py-1.5 bg-blue h-fit w-fit rounded-full text-white hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <a
            :href="`tel:${contacts().phone.link}`"
            class="text-base sm:text-base grid grid-flow-col gap-2 place-items-center"
            tabindex="-1"
          >
            <span class="text-white">Zadzwoń teraz!</span>
            <PhoneIcon />
          </a>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style></style>
