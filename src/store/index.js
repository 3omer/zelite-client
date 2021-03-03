import Vue from 'vue'
import Vuex from 'vuex'
import { getDevices } from '../services/api'
import { types } from './mutations-types'

Vue.use(Vuex)

// initial state
let user = {}
try {
  user = JSON.parse(localStorage.getItem('user')) || user
} catch {
  localStorage.removeItem('user')
}


export default new Vuex.Store({
  state: {
    user,
    devices: []
  },
  mutations: {
    [types.SET_USER](state, newUser) {
      Vue.set(state.user, 'username', newUser.username)
      Vue.set(state.user, 'email', newUser.email)
      Vue.set(state.user, 'token', newUser.token)
      localStorage.setItem('user', JSON.stringify(newUser))
    },
    [types.DEL_USER](state) {
      // Vue.delete(state.user, 'username')
      let username, email, token = null
      state.user = { ...state.user, ...{ username, email, token } }
      localStorage.removeItem('user')
    },

    // Mutate devices
    [types.SET_DEVICES](state, devicesList) {
      state.devices = [...devicesList]
    }
  },
  getters: {
    token: state => state.user.token,

    // categorizing devies based on their type
    switchDevices: state => state.devices.filter(device => device.type == "switch"),
    sensorDevices: state => state.devices.filter(device => device.type == "sensor")
  },
  actions: {
    loadDevices({ commit, getters }) {
      getDevices(getters.token)
        .then(devices => {
          console.log("Devices loaded - count", devices.length);
          commit(types.SET_DEVICES, devices);
        })
        .catch(err => {
          console.log("Loading data failed", err);
        });
    }
  },
  modules: {
  }
})
