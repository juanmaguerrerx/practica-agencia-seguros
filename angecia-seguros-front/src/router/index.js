// router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/Home.vue'
import Clientes from '../views/Clientes.vue'



const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/home', component: Home },
      { path: '/polizas', component: Home },
      { path: '/clientes', component: Clientes}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
