import Vue from 'vue'
import VueRouter from 'vue-router'
import AstronomiaView from '../views/AstronomiaView.vue'
import CategoriasView from '../views/CategoriasView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'categorias',
    component: CategoriasView
  },
  {
    path: '/astronomia',
    name: 'astronomia',
    component: AstronomiaView
  },
]

const router = new VueRouter({
  routes
})

export default router
