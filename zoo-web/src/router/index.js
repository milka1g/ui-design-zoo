import { createRouter, createWebHistory } from 'vue-router'
import PrijavaView from '../views/PrijavaView.vue'

const routes = [
  {
    path: '/',
    name: 'prijava',
    component: PrijavaView
  },
  {
    path: '/pocetna',
    name: 'Pocetna',
    component: () => import('../views/PocetnaView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/paketi',
    name: 'Paketi',
    component: () => import('../views/PaketiView.vue')
  },
  {
    path: '/obavestenja',
    name: 'Obavestenja',
    component: () => import('../views/ObavestenjaView.vue')
  },
  {
    path: '/desavanja',
    name: 'Desavanja',
    component: () => import('../views/DesavanjaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
