import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { store } from '@/store/login'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/default/View.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: 'spendingAverage',
        name: 'SpendingAverage',
        component: () => import(/* webpackChunkName: "SpendingAverage" */ '@/views/SpendingAverage.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/layouts/default/Login.vue'),
  },
]


const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: routes
})



router.beforeEach((to) => {
  const user = store.state.user

  if (to.path !== '/login') {
    if (user !== 'caio') {
      router.push('/login')
    }
  }
})

export default router
