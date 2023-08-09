// Composables
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/View.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/Login',
    component: () => import('@/layouts/default/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to) => {
  if (to.path === '/') {
      return router.push('/home') 
    }
});

export default router
