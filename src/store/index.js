import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api' 

Vue.use(Vuex)

// initial state
const user = JSON.parse(localStorage.getItem('user')) || {}

const SET_USER = 'SET_USER'
const DEL_USER = 'DEL_USER'

export default new Vuex.Store({
  state: {
    user
  },
  mutations: {
    [SET_USER] (state, newUser) {
      Vue.set(state.user, newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
    },
    [DEL_USER] (state) {
      Vue.delete(state.user)
      localStorage.removeItem('user')
    }
  },
  actions: {
  },
  modules: {
  }
})
