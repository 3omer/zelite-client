import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/v1' ||
"https://f71e8b96-2bd9-4d49-bfa5-47840cebaf35.mock.pstmn.io/api/v1"

// config axios
axios.defaults.baseURL = BASE_URL
axios.defaults.timeout = 10000


/*
* API operations
* Docs: https://
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
 * @returns {Promise} User object when fullfiled. Error with usr-friendly message on rejection
 */
const signup = async (username, email, password) => {
    return axios.post(ENDPOINTS.signup, { username, email, password })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.error(err)
            return Promise.reject(axiosErrorToMsg(err))
        })
}

/**
 * login and retrive a jwt token
 * @param {email} email 
 * @param {password} password 
 * @returns {Promise} 
 */
const login = async (email, password) => {
    return axios.post(ENDPOINTS.login, { email, password })
        .then(res => {
            // return response payload
            return res.data
        })
        .catch(err => {
            console.error(err)
            return Promise.reject(axiosErrorToMsg(err))
        })
}

const authHeader = (token) => {
    return {
        "Authorization": `Bearer ${token}`
    }
}

/**
 * loggout
 * @param {string} token current user's token
 * @returns {Promise} when resolved it return the server message, or user friendly message on rejection
 */
const logout = (token) => {
    return axios.post(ENDPOINTS.logout, { headers: authHeader(token) })
        .then(res => {
            return res.data.message || "You logged out"
        })
        .catch(err => {
            console.error(err)
            return Promise.reject(axiosErrorToMsg(err))
        })
}


const getDevices = (token) => {
    return axios.get(ENDPOINTS.devices, { headers: authHeader(token) })
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.error(err)
        return Promise.reject(axiosErrorToMsg(err))
    })
}

const postDevice = (token, device) => {
    return axios.post(ENDPOINTS.devices, device, { headers: authHeader(token) })
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.error(err)
        return Promise.reject(axiosErrorToMsg(err))
        
    })
}

const deleteDevice = (token, deviceKey) => {
    const url = ENDPOINTS.devices + "/" + deviceKey
    return axios.delete(url, { headers: authHeader(token) } )
    .catch(err => {
        console.error(err)
        return Promise.reject(axiosErrorToMsg(err))
    })
}

const getMQTTConfig = (token) => {
    return axios.get(ENDPOINTS.MQTTConfig, { headers: authHeader(token) })
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.error(err)
        Promise.reject(axiosErrorToMsg(err))
    })
}

const postMQTTCred = (token, cred) => {
    return axios.post(ENDPOINTS.MQTTConfig, cred, { headers: authHeader(token) })
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.error(err)
        Promise.reject(axiosErrorToMsg(err))
        
    })
}

/**
 * transofrm api calls errors to a userfriendly message
 * @param {Error} err Axios error object
 */
const axiosErrorToMsg = (err) => {
    // return a user friendly message to ui
    let message = 'Something went Wrong'
    if (err.response) {
        message = err.response.data.error || message
    }
    return message
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