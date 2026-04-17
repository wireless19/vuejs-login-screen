import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import NotFoundView from '@/views/NotFoundView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/:catchAll(.*)',
      component: NotFoundView,
    },
  ],
})

export default router
