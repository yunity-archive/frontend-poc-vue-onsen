import api from '@/api/groups'

export const REQUEST_LIST = '[Groups] Request List'
export const RECEIVE_LIST = '[Groups] Receive List'

const state = {
  loading: false,
  list: []
}

const getters = {
  allGroupsIsLoading: state => state.loading,
  allGroups: state => state.list
}

const actions = {
  getAllGroups ({ commit }) {
    commit(REQUEST_LIST)
    api.list().then(groups => {
      commit(RECEIVE_LIST, { groups })
    })
  }
}

const mutations = {
  [REQUEST_LIST] (state) {
    state.loading = true
  },
  [RECEIVE_LIST] (state, { groups }) {
    state.loading = false
    state.list = groups
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
