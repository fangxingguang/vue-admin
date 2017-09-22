import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'
import index from '@/views/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        { path: '*', component: index },
      ]
    }
  ]
})
