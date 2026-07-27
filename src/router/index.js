import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: () => import('../views/AboutView.vue') },
    { path: '/events', component: () => import('../views/EventsView.vue') },
    { path: '/officers', component: () => import('../views/OfficersView.vue') },
    { path: '/join', component: () => import('../views/JoinView.vue') },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
