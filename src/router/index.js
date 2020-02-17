import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/Index'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: 'login'
      }
    },
    {
      path: '*',
      name: 'notFound',
      meta: {
        layout: 'error'
      }
    }
  ]
})
