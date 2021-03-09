import Vue from 'vue'
import Vuex from 'vuex'
import { getDevices, getMQTTConfig } from '../services/api'
import mqtt from "../services/mqtt"

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
    devicesLoading: true,
    MQTTConfig: {
      username: '',
      password: '',
      host: ''
    },
    mqttStatus: 'not connected'
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

    [types.SET_DEVICE_STATE](state, payload) {
      console.log("MUTATUIN:SET_DEVICE_STATE", payload.key);

      const targetIndex = state.devices.findIndex((one) => one.key == payload.key)
      const target = state.devices[targetIndex]

      if (target.type === "switch") {
        target.isOn = payload.newState
      } else {
        target.value = payload.newState
      }

      Vue.set(state.devices, targetIndex, target)
    },

    [types.SET_DEVICES_LOADING](state, isLoading ) {
      state.devicesLoading = isLoading
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
    [types.SET_MQTT_STATUS](state, status) {
      state.mqttStatus = status
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
      commit(types.SET_DEVICES_LOADING, true)
      commit(types.SET_DEVICES, [])
      return getDevices(getters.token)
        .then(devices => {
          console.log("Devices loaded - count", devices.length)
          devices = devices.map(device => {
            if (device.type === "switch") device.isOn = undefined
            else device.value = undefined
            return device
          })
          commit(types.SET_DEVICES, devices)
          commit(types.SET_DEVICES_LOADING, false)

        })
        .catch(err => {
          console.log("Loading data failed", err)
        });
    },

    loadMQTTConfig({ commit, getters }) {
      return getMQTTConfig(getters.token)
        .then(config => {
          console.log('MQTTConfig- loaded', { config });
          // TODO: load dev server from env
          config.host = "ws://127.0.0.1:8883"
          config.secure = false
          commit(types.SET_MQTT_CONFIG, config)
        })
        .catch(errMsg => {
          // TODO: state to hold Global error
          console.log(errMsg);
        })
    },

    connectMqtt({ commit }) {
      const client = mqtt.getClient("ws://localhost:8883")
      
        client.on('connect', () => {
          console.log('MQTT connected')
          commit(types.SET_MQTT_STATUS, 'connected')
        })

        client.on('disconect', () => {
          commit(types.SET_MQTT_STATUS, 'disconnected')
        })
        // handle mqtt error
        client.on('error', (err) => {
          console.log("MQTT-ERROR:", err.message)
        })
      },
      doSubscribe(payload) {
        mqtt.setTopicListner(payload.topic)

      }
    },
})
