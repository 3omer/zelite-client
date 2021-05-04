<template>
  <Form class="p-2">
    <template v-slot:title>
      <h3>Login</h3>
    </template>
    <template v-if="error" v-slot:errors>
      {{ error }}
    </template>
    <template v-slot:form>
      <form id="loginForm" method="POST" novalidate @submit.prevent="onSubmit">
        <div class="form-group">
          <input
            id="email"
            v-model="email"
            type="text"
            class="form-control"
            name="email"
            placeholder="Email"
            autocomplete="email"
            required
          />
          <div class="invalid-feedback" />
        </div>

        <div class="form-group">
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-control"
            name="password"
            value
            placeholder="Password"
            autocomplete="current-password"
            required
          />
          <div class="invalid-feedback" />
        </div>

        <div class="border-top p-2 text-center">
          <eleActionBtn
            :title="'Login'"
            :is-disabled="isDisabled"
            :is-loading="isDisabled"
            class="btn-primary mx-2"
            type="submit"
          />
          <router-link class="btn btn-outline-primary" to="signup">
            I don't have account
          </router-link>
        </div>
      </form>
    </template>
  </Form>
</template>

<script>
import Form from './Form'
import eleActionBtn from './ele-action-btn'

import { login } from '../services/api'

export default {
  name: 'LoginForm',
  components: {
    Form,
    eleActionBtn
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
      validationErrors: {},
      isDisabled: false
    }
  },
  methods: {
    onSubmit() {
      console.log('LoginForm:onSubmit()')
      this.isDisabled = true
      this.error = ''
      login(this.email, this.password)
        .then(data => {
          console.log('login passed')
          this.error = null
          this.validationErrors = {}
          this.$store.commit('SET_USER', data)
          this.$router.push('dashboard')
          this.isDisabled = false
        })
        .catch(error => {
          console.error('login failed', error)
          this.isDisabled = false
          this.password = ''

          // no response
          if (error.statusCode === -1) {
            this.error = error.message
          }
          // validation error
          else if (error.statusCode === 400) {
            // this.error = error.data.message // uncofirmed email
            this.validationErrors = error.data.messages // or validation errors
            // TODO: display validation error for each field
            this.error = this.validationErrors
              ? 'email and password are required'
              : error.data.message
          }
          // worong credentials
          else if (error.statusCode === 401) {
            this.error = error.data.message
          } else {
            this.error = error.message || error.status
          }
        })
    }
  }
}
</script>

<style></style>
