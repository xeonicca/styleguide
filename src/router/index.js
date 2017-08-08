import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/pages/Showcase'
import Multipane from '@/pages/Multipane'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Credit from '@/pages/Credit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Showcase',
      component: Showcase
    },
    {
      path: '/multipane/',
      name: 'Multipane',
      component: Multipane
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/credit',
      name: 'Credit',
      component: Credit
    }
  ]
})
