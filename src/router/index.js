import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import MediaView from '../views/MediaView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import SignInView from '../views/SignInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/login",
      name: 'login',
      component: SignInView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/media',
      name: 'media',
      component: MediaView
    },
    {
      path: '/contact-us',
      name: 'contactus',
      component: ContactUsView
    }
  ]
})

export default router
