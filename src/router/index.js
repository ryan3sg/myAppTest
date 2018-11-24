import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '@/components/LoginComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginComponent',
      component: LoginComponent
    }
  ]
})
