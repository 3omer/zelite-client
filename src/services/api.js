import axios from 'axios'

const BASE_URL = 'http://localhsot:5000/api/v1/'

// config axios
axios.defaults.baseURL = BASE_URL

// Add a response interceptor to handle common errors
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (err) {
    if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const msg = err.response.data ?
            err.res.data.error ||
            err.res.data.msg :
            'Something went wrong'

        Promise.reject(Error(msg))
    } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest
        console.error(err.request)
        // default error message
        Promise.reject(Error('Something went wrong :('))
    }
})


/*
* API operations
* Docs: https://
*/

// all endpoints relatively to base
const ENDPOINTS = {
    signup: '/register',
    login: '/users/login',
    logout: '/users/logout',
    profile: '/users/me',
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
            // handle success
            res.data
        })
}


export {
    signup,
    login
}