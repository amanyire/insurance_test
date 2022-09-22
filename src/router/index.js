import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Details from '@/views/DetailsPage.vue'
import Summary from '@/views/SummaryPage.vue'
import ErrorPage from '@/views/ErrorPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details',
    name: 'details',
    component: Details
  },
  {
    path: '/summary',
    name: 'summary',
    component: Summary
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
