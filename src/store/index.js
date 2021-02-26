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
const SET_DEVICES = 'SET_DEVICES'

export default new Vuex.Store({
  state: {
    user,
    devices: []
  },
  mutations: {
    [SET_USER](state, newUser) {
      Vue.set(state.user, 'username', newUser.username)
      Vue.set(state.user, 'email', newUser.email)
      Vue.set(state.user, 'token', newUser.token)
      localStorage.setItem('user', JSON.stringify(newUser))
    },
    [DEL_USER](state) {
      // Vue.delete(state.user, 'username')
      let username, email, token  = null
      state.user = { ...state.user, ...{ username, email, token }}
      localStorage.removeItem('user')
    },
    
    // Mutate devices
    [SET_DEVICES](state, devicesList) {
      devicesList.forEach((device) => {
        state.devices.push(device)
      })
    }
  },
  getters: {
    token: state => state.user.token,
    
    // categorizing devies based on their type
    switchDevices: state => state.devices.filter(device => device.type == "switch"),
    sensorDevices: state => state.devices.filter(device => device.type == "sensor")
  },
  actions: {
  },
  modules: {
  }
})
