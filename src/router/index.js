import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView, meta: { title: 'Dunlap TSA | Technology Student Association at Dunlap High School' } },
    { path: '/about', component: () => import('../views/AboutView.vue'), meta: { title: 'About | Dunlap TSA' } },
    { path: '/events', component: () => import('../views/EventsView.vue'), meta: { title: 'Events & Timeline | Dunlap TSA' } },
    { path: '/officers', component: () => import('../views/OfficersView.vue'), meta: { title: 'Officers | Dunlap TSA' } },
    { path: '/join', component: () => import('../views/JoinView.vue'), meta: { title: 'Join Us | Dunlap TSA' } },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Dunlap TSA'
})

export default router
