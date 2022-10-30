import Vue from 'vue'
import VueRouter from 'vue-router'
import ModernaView from '../views/ModernaView.vue'
import CategoriasView from '../views/CategoriasView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'categorias',
    component: CategoriasView
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
