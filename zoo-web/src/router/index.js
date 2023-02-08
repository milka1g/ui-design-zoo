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
  },
  {
    path: '/zivotinje',
    name: 'Zivotinje',
    component: () => import('../views/ZivotinjeView.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../views/KontaktView.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/ProfilView.vue')
  },
  {
    path: '/zivotinja/:id',
    name: 'Zivotinja',
    component: () => import('../views/ZivotinjaView.vue')
  },
  {
    path: '/ulaznice',
    name: 'Ulaznice',
    component: () => import('../views/UlazniceView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
