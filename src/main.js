// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import state from '@/vuex/state'
import actions from '@/vuex/actions'
import getters from '@/vuex/getters'
import mutation from '@/vuex/mutation'

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
/* eslint-disable no-new */
new Vuex.Store({
  state,
  getters,
  mutation,
  actions
})
