import { createRouter, createWebHistory } from 'vue-router'
import ActivityView from '@/views/ActivityView.vue'
import StudentsView from '@/views/StudentsView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LandingView from '@/views/LandingView.vue'

const routes = [
  {
    path: '/activity',
    name: 'activity',
    component: ActivityView
  },
  {
    path: '/students',
    name: 'students',
    component: StudentsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/',
    name: 'landing',
    component: LandingView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
