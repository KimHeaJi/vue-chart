import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/Index'
import RegistPage from '@/pages/Regist'
import NotFoundPage from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/write',
      name: 'write',
      components: RegistPage
    },
    // {
    //   path: '/:id',
    //   name: 'view',
    //   components: RegistPage
    // },
    {
      path: '*',
      name: 'notFound',
      component: NotFoundPage
    }
  ]
})
