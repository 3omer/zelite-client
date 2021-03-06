import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// eslint-disable-next-line no-unused-vars
import { Collapse } from 'bootstrap'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
// import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
