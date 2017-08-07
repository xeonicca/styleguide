import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/components/Showcase'
import Multipane from '@/components/Multipane'

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
      path: '/test',
      name: 'test',
      component: Multipane
    }
  ]
})
