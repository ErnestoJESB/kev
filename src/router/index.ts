import LoginRegisterVue from '@/components/login/LoginRegister.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginRegisterVue
    },
  ]
})

export default router
