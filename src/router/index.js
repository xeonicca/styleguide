import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/pages/Showcase'
import Multipane from '@/pages/Multipane'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Credit from '@/pages/Credit'
import Status from '@/pages/Status'
import Products from '@/pages/Products'
import Account from '@/pages/Account'

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
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
