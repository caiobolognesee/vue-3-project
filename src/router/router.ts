import { createRouter, createWebHistory } from 'vue-router'
import { loginStore } from '@/store/login'
import routes from '@/router/routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {

  const app = loginStore()

  if (to.path !== '/login') {
    if (app.user !== 'caio' || app.password !== '123') {
      router.push('/login')
      return
    }
  }
})

export default router
