import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// initial state
let user = {}
try {
  user = JSON.parse(localStorage.getItem('user')) || user
} catch {
  localStorage.removeItem('user')
}

const SET_USER = 'SET_USER'
const DEL_USER = 'DEL_USER'

export default new Vuex.Store({
  state: {
    user
  },
  mutations: {
    [SET_USER](state, newUser) {
      Vue.set(state.user, 'username', newUser.username)
      Vue.set(state.user, 'email', newUser.email)
      Vue.set(state.user, 'token', newUser.token)
      localStorage.setItem('user', JSON.stringify(newUser))
    },
    [DEL_USER](state) {
      Vue.delete(state.user)
      localStorage.removeItem('user')
    }
  },
  actions: {
  },
  modules: {
  }
})
