import Vue from 'vue'
import Router from 'vue-router'

import editor from '@/view/editor'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/editor'
    },
    {
      path: '/editor',
      component: editor,
      name: '登录',
      hidden: true
    }]
})
