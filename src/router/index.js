import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/components/Showcase'
import Multipane from '@/components/Multipane'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Credit from '@/components/Credit'

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
