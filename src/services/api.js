import axios from 'axios'

const BASE_URL =
  process.env.VUE_APP_BACKEND_HOST || 'http://localhost:5000/api/v1'

// config axios
axios.defaults.baseURL = BASE_URL
// axios.defaults.timeout = 30000

/*
 * API operations
 * Docs: https://
 * all http relevant stuff lives here
 * all the api operatoin returns promises
 */

// all endpoints relatively to base
const ENDPOINTS = {
  signup: '/register',
  login: '/login',
  logout: '/logout',
  devices: '/devices',
  MQTTConfig: '/mqtt'
}

/**
 * Submit user details
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @returns {Promise.resolve} data {}
 * @returns {Promise.reject} error {messages: [...]}
 */
const signup = async (username, email, password) => {
  return axios
    .post(ENDPOINTS.signup, { username, email, password })
    .then(res => {
      return res.data
    })
    .catch(error => {
      return Promise.reject(handleRequestError(error))
    })
}

/**
 * login and retrive a jwt token
 * @param {email} email
 * @param {password} password
 * @returns {Promise}
 */
const login = async (email, password) => {
  return axios
    .post(ENDPOINTS.login, { email, password })
    .then(res => {
      // return response payload
      return res.data
    })
    .catch(err => {
      console.error(err)
      return Promise.reject(handleRequestError(err))
    })
}

const authHeader = token => {
  return {
    Authorization: `Bearer ${token}`
  }
}

/**
 * loggout
 * @param {string} token current user's token
 * @returns {Promise} when resolved it return the server message, or user friendly message on rejection
 */
const logout = token => {
  return axios
    .post(ENDPOINTS.logout, {}, { headers: authHeader(token) })
    .then(res => {
      return res.data.message || 'You logged out'
    })
    .catch(err => {
      console.error(err)
      return Promise.reject(handleRequestError(err))
    })
}

const getDevices = token => {
  return axios
    .get(ENDPOINTS.devices, { headers: authHeader(token) })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.error(err)
      return Promise.reject(handleRequestError(err))
    })
}

const postDevice = (token, device) => {
  return axios
    .post(ENDPOINTS.devices, device, { headers: authHeader(token) })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.error(err)
      return Promise.reject(handleRequestError(err))
    })
}

const deleteDevice = (token, deviceKey) => {
  const url = ENDPOINTS.devices + '/' + deviceKey
  return axios.delete(url, { headers: authHeader(token) }).catch(err => {
    console.error(err)
    return Promise.reject(handleRequestError(err))
  })
}

const getMQTTConfig = token => {
  return axios
    .get(ENDPOINTS.MQTTConfig, { headers: authHeader(token) })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.error(err)
      return Promise.reject(handleRequestError(err))
    })
}

const postMQTTCred = (token, cred) => {
  return axios
    .post(ENDPOINTS.MQTTConfig, cred, { headers: authHeader(token) })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.error(err)
      Promise.reject(handleRequestError(err))
    })
}

/**
 * process HTTP request/response erorrs and return a simple error object
 * with the properties
 * statusCode: http response code, or -1 if the equest failed
 * data: response data .. eg { status: ... , messages:[...] }
 * message: if the request failed
 * @param {Error} err Axios error object
 */
const handleRequestError = err => {
  // return a user friendly message(s) to vue component
  const simpleError = {}
  if (err.response && err.response.data) {
    // the backend is using only two properties to descripe
    // errors; 'message' and 'messages' in case of validation errors
    simpleError.data = err.response.data
    simpleError.statusCode = err.response.status
    return simpleError
  } else if (err.request) {
    // properly network error
    simpleError.statusCode = -1
    simpleError.message = 'It seems like you are not connected !'
    return simpleError
  } else {
    throw err
  }
}

export {
  signup,
  login,
  logout,
  getDevices,
  postDevice,
  deleteDevice,
  getMQTTConfig,
  postMQTTCred
}
