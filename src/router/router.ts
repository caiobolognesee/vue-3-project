import { createRouter, createWebHistory } from 'vue-router'
import { appStore } from '@/stores/app'
import routes from '@/router/routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {

  const app = appStore()

  if (to.path !== '/login') {
    if (app.user.email === '' || app.user.password === '') {
      router.push('/login')
      return
    }
  }
})

export default router
