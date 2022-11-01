import Vue from 'vue'
import VueRouter from 'vue-router'
import GetStartingView from '../views/GetStartingView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import ModernaView from '../views/equacoes/ModernaView.vue'
import MecanicaView from '../views/equacoes/MecanicaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'getstarting',
    component: GetStartingView
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: CategoriasView
  },
  {
    path: '/mecanica',
    name: 'mecanica',
    component: MecanicaView
  },
  {
    path: '/moderna',
    name: 'moderna',
    component: ModernaView
  },
]

const router = new VueRouter({
  routes
})

export default router
