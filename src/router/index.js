import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Manager from '../views/Manager'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    meta: { forAnonymous: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { forAnonymous: true }
  },
  {
    path: '/manager',
    name: 'manger',
    component: Manager,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

// Nav Guards
router.beforeEach((to, from, next) => {
  const user = router.app.$store.state.user
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const forAnonymous = to.matched.some(record => record.meta.forAnonymous)

  if (requiresAuth && !user.token) return next('login')

  if (forAnonymous && user.token) return next('home')

  return next()
})

export default router
