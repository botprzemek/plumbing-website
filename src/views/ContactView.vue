<script>
import { contacts } from '@/data'
import { observe } from '@/methods'
import PhoneIcon from '@/components/icon/PhoneIcon.vue'
import MailIcon from '@/components/icon/MailIcon.vue'
import MapIcon from '@/components/icon/MapIcon.vue'
import SendIcon from '@/components/icon/SendIcon.vue'

export default {
  name: 'ContactView',
  components: {
    MapIcon,
    MailIcon,
    PhoneIcon,
    SendIcon
  },
  data() {
    return {
      name: null,
      email: null,
      content: null
    }
  },
  methods: {
    contacts() {
      return contacts
    },
    async sendData() {
      if (!this.name || !this.email || !this.content) return
      try {
        const request = await fetch('http://localhost:3001/send/contact', {
          method: 'POST',
          mode: 'cors',
          headers: {
            secret: 'your_api_secret'
          },
          body: JSON.stringify({
            source: 'biuro@panodrurek.pl',
            name: this.name,
            email: this.email,
            content: this.content
          })
        })
        if (request.status === 401) return
      }
      catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    observe()
  }
}
</script>
<template>
  <section
    class="w-full h-full flex flex-col sm:grid gap-4 sm:gap-12 py-8 sm:py-16 px-phone sm:px-fit content -translate-y-3 opacity-0 ease-in-out duration-[1000ms] transition-all"
  >
    <form @keydown.enter.prevent class="w-full h-fit flex flex-col gap-4 items-center sm:items-start">
      <h1 class="text-black font-semibold text-2xl sm:text-6xl">Kontakt</h1>
      <p class="text-black text-base sm:text-lg">
        Zapraszamy do kontaktu odpowiadamy na wszystkie pytania związane z instalacjami oraz
        wykonamy dla ciebie darmową wycenę usługi.
      </p>
      <section class="flex flex-col w-full sm:grid sm:grid-cols-[3fr,1fr] gap-4">
        <section class="w-full h-full flex flex-col gap-4">
          <section class="grow w-full p-4 border-black border-2 rounded-2xl">
            <textarea v-model="content" placeholder="Wprowadź tutaj wszystkie swoje pytania" class="w-full h-full resize-none focus:outline-0" />
          </section>
          <section class="grid grid-flow-row sm:grid-flow-col gap-4">
            <section class="grow w-full px-6 py-1 border-black border-2 rounded-full">
              <input v-model="name" type="text" placeholder="Imię i nazwisko" class="w-full h-full resize-none focus:outline-0">
            </section>
            <section class="grow w-full px-6 py-1 border-black border-2 rounded-full">
              <input v-model="email" type="email" placeholder="Adres mailowy" maxlength="24" minlength="5" pattern="[a-zA-ZZĄĆĘŁŃÓŚŹŻąćęłńóśźż]{5,24}" class="w-full h-full resize-none focus:outline-0">
            </section>
          </section>
        </section>
        <section class="w-full">
          <section class="w-full grid grid-cols-3 sm:grid-cols-none sm:grid-rows-3 gap-3 sm:gap-4">
            <button
              class="grid place-items-center h-fit w-full px-2 sm:px-6 py-1.5 bg-blue rounded-full text-white hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <a
                :href="`tel:${contacts().phone.link}`"
                class="text-base sm:text-base flex gap-2 place-items-center"
                tabindex="-1"
              >
                <p class="text-sm sm:text-base text-white">{{ contacts().phone.name }}</p>
                <PhoneIcon />
              </a>
            </button>
            <button
              class="grid place-items-center h-fit w-full px-2 sm:px-6 py-1.5 bg-blue rounded-full text-white hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <a
                :href="`tel:${contacts().email.link}`"
                class="text-base sm:text-base flex gap-2 place-items-center"
                tabindex="-1"
              >
                <p class="text-sm sm:text-base text-white">{{ contacts().email.name }}</p>
                <MailIcon />
              </a>
            </button>
            <button
              class="grid place-items-center h-fit w-full px-2 sm:px-6 py-1.5 bg-blue rounded-full text-white hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <a
                :href="`tel:${contacts().address.link}`"
                class="text-base sm:text-base flex gap-2 place-items-center"
                tabindex="-1"
              >
                <p class="text-sm sm:text-base text-white">{{ contacts().address.name }}</p>
                <MapIcon />
              </a>
            </button>
          </section>
        </section>
      </section>
      <button
        @click.prevent="sendData()"
        class="w-full flex items-center justify-center gap-2 h-fit px-6 py-1.5 bg-blue rounded-full text-white hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <span class="text-sm sm:text-base text-white">Wyślij formularz</span>
        <SendIcon />
      </button>
    </form>
  </section>
  <aside class="w-screen"></aside>
</template>
