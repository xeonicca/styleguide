import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/components/Showcase'
<<<<<<< HEAD
import Multipane from '@/components/Multipane'
=======
import Register from '@/components/Register'
>>>>>>> ad8b4e6d266d5483276b4e55ce0c70f28e2ab242

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Showcase',
      component: Showcase
    },
    {
<<<<<<< HEAD
      path: '/multipane/',
      name: 'Multipane',
      component: Multipane
    },
    {
      path: '/test',
      name: 'test',
      component: Multipane
=======
      path: '/register',
      name: 'Register',
      component: Register
>>>>>>> ad8b4e6d266d5483276b4e55ce0c70f28e2ab242
    }
  ]
})
