import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/index'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login'),
      meta: {
        layout: 'login'
      }
    },
    {
      path: '*',
      name: 'NotFound',
      meta: {
        layout: 'error'
      }
    }
  ]
})
