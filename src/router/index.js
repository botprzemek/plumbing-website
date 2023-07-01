import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: HomeView
    },
    {
      path: '/galeria',
      name: 'Galeria',
      meta: { title: 'Galeria' },
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/uslugi',
      name: 'Usługi',
      meta: { title: 'Usługi' },
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      meta: { title: 'Kontakt' },
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/:catchAll(.*)', redirect: '/'
    },
  ]
})

router.beforeEach(to => {
  window.document.title = to.meta.title ? to.meta.title + ' | Pan od Rurek' : 'Strona główna | Pan od Rurek';
});

export default router
