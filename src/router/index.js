import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'; // Import your Vuex store

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/pages/Authentication/Login/index.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/pages/Authentication/Registration/index.vue')
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/views/pages/Dashboard/index.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.token !== null;
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router
