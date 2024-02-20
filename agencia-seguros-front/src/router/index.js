import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout.vue';


const routes = [
  {
    path: '/',
    component: Layout, // Aquí usamos el layout como componente principal para todas las rutas
    children: [
      {
        path: 'clientes',
        component: () => import('@/views/Clientes.vue') // Vista de inicio
      },
      {
        path: 'polizas',
        component: () => import('@/views/Polizas.vue') // Vista "Acerca de"
      },
      // Agrega más rutas según sea necesario
    ]

  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;