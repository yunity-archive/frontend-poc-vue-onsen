import api from '@/api/groups'

export const RECEIVE_LIST = '[Groups] Receive List'

const state = {
  list: []
}

const getters = {
  allGroups: state => state.list
}

const actions = {
  getAllGroups ({ commit }) {
    api.list().then(groups => {
      commit(RECEIVE_LIST, { groups })
    })
  }
}

const mutations = {
  [RECEIVE_LIST] (state, { groups }) {
    state.list = groups
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
