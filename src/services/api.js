import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/v1'

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
    devices: '/devices'
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
            // return a user friendly message to ui
            let message = 'Something went Wrong'
            console.error(err)
            if (err.response) {
                message = err.response.data.error || message
            }
            return Promise.reject(message)
        })
}


export {
    signup,
    login
}