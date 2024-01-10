import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/Home.vue'
import listproduct from '../components/product/ListProduct.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/listproduct',
    name: 'product',
    component: listproduct
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
