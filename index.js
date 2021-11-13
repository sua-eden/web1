import Vue from 'vue'
import Router from 'vue-router'
import Create from '../components/Create'
import Retrieve from '../components/Retrieve'
import Monitoring from '../components/Monitoring'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Create
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/retrieve',
      name: 'Retrieve',
      component: Retrieve
    },
    {
      path: '/monitoring',
      name: 'Monitoring',
      component: Monitoring
    }
  ]
})
