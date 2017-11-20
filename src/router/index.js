import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => System.import('../components/index.vue'),
    },
    {
      path: '/sliders',
      name: 'Sliders',
      component: () => System.import('../components/common/sliders'),
    }
  ]
})
