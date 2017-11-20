import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Sliders from '@/components/common/sliders'	

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/sliders',
      name: 'Sliders',
      component: Sliders,
    }
  ]
})
