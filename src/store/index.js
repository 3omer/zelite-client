import Vue from 'vue'
import Vuex from 'vuex'
import { getDevices, getMQTTConfig } from '../services/api'
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
    devices: [],
    MQTTConfig: {
      username: '',
      password: ''
    }
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
    },

    [types.ADD_DEVICE](state, device) {
      state.devices.push(device)
    },
    [types.DELETE_DEVICE](state, deviceKey) {
      const index = state.devices.findIndex(one => one.key == deviceKey)
      Vue.delete(state.devices, index)
    },
    [types.SET_MQTT_CONFIG](state, MQTTConfig) {
      Vue.set(state.MQTTConfig, 'username', MQTTConfig.username)
      Vue.set(state.MQTTConfig, 'password', MQTTConfig.password)
      Vue.set(state.MQTTConfig, 'host', MQTTConfig.host)
      Vue.set(state.MQTTConfig, 'secure', MQTTConfig.secure)
    },
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
          console.log("Loading data failed", err)
        });
    },
    loadMQTTConfig({ commit, getters }) {
      getMQTTConfig(getters.token)
        .then(config => {
          // TODO: load dev server from env
          config.host = "127.0.0.1"
          config.port = 8883
          config.secure = false
          commit(types.SET_MQTT_CONFIG, config)
          console.log('MQTTConfig- set', { config });
        })
        .catch(errMsg => {
          // TODO: state to hold Global error
          console.log(errMsg);
        })
    }
  },
  modules: {
  }
})
