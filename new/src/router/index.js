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
      path: '/o-nas',
      name: 'O nas',
      meta: {title: 'O nas'},
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/uslugi',
      name: 'Usługi hydrauliczne',
      meta: {title: 'Usługi hydrauliczne'},
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      meta: {title: 'Kontakt'},
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/:catchAll(.*)', redirect: '/'
    },
  ]
})

router.beforeEach(to => {
  window.document.title = to.meta.title ? to.meta.title + ' | Pan od Rurek' : 'Usługi hydrauliczne | Pan od Rurek';
});

export default router
