import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/landing',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/options/:projectId/:moduleIndex',
      name: 'SetOptions',
      component: SetOptions,
    }
  ]
})
