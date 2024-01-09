import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/Home.vue'
import transaksi from '../components/Transaksi.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/transaksi',
    name: 'transaksi',
    component: transaksi
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
