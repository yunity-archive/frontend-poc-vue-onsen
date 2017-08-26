import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import groups from './modules/groups'

export default new Vuex.Store({
  modules: {
    groups,
    splitter: {
      namespaced: true,
      state: {
        open: false
      },
      mutations: {
        toggle (state, shouldOpen) {
          if (typeof shouldOpen === 'boolean') {
            state.open = shouldOpen
          } else {
            state.open = !state.open
          }
        }
      }
    }
  }
})
