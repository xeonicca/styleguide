import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/components/Showcase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Showcase',
      component: Showcase
    }
  ]
})
