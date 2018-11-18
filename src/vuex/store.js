import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/vuex/getters'
import mutations from '@/vuex/mutation'
import actions from '@/vuex/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orientation: ''
  },
  getters,
  mutations,
  actions
})
