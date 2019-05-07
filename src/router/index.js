import Vue from 'vue'
import Router from 'vue-router'
import wrap from '@/pages/wrap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wrap',
      component: wrap
    }
  ]
})
