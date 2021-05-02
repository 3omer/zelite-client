<template>
  <Form class="p-2">
    <template v-slot:title>
      <h3>Create Account</h3>
    </template>
    <template v-if="error" v-slot:errors>
      {{ error }}
    </template>
    <template v-slot:form>
      <form id="registerForm" method="POST" @submit.prevent="onSubmit">
        <div class="form-group">
          <input
            id="username"
            v-model="username"
            type="text"
            class="form-control"
            :class="{
              'is-invalid': validationFeedbacks.username != ''
            }"
            name="username"
            value
            placeholder="Username"
            required
          />
          <div class="invalid-feedback text-danger">
            {{ validationFeedbacks.username }}
          </div>
        </div>

        <div class="form-group">
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-control"
            :class="{
              'is-invalid': validationFeedbacks.email != ''
            }"
            name="email"
            value
            placeholder="Email"
            autocomplete="email"
            required
          />
          <div class="invalid-feedback text-danger">
            {{ validationFeedbacks.email }}
          </div>
        </div>

        <div class="form-group">
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-control"
            :class="{
              'is-invalid': validationFeedbacks.password != ''
            }"
            name="password"
            value
            placeholder="Password"
            autocomplete="new-password"
            required
          />
          <div class="invalid-feedback">
            {{ validationFeedbacks.password }}
          </div>
        </div>
        <div class="border-top p-2">
          <eleActionBtn
            :title="'Register'"
            :is-disabled="isDisabled"
            :is-loading="isDisabled"
            class="btn-primary mx-2"
            type="submit"
          />
          <router-link to="login" class="btn btn-outline-primary">
            I have account
          </router-link>
          <!-- <a class="btn btn-outline-primary" href="/login">I have account</a> -->
        </div>
      </form>
    </template>
  </Form>
</template>

<script>
import Form from './Form.vue'
import eleActionBtn from './ele-action-btn'

import { signup } from '../services/api'

export default {
  name: 'SignupForm',
  components: {
    Form,
    eleActionBtn
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: '',
      isDisabled: false,
      validationErrors: {} // { username: ['error1', ..], password: ['error2'...] }
    }
  },
  computed: {
    validationFeedbacks() {
      return {
        username: ''.concat(this.validationErrors.username || ''),
        email: ''.concat(this.validationErrors.email || ''),
        password: ''.concat(this.validationErrors.password || '')
      }
    }
  },

  methods: {
    onSubmit() {
      console.log('SignupForm:onSubmit()')
      // disable submit btn
      this.isDisabled = true
      // clear top error message
      this.error = ''
      // clear previous validtion errors
      this.validationErrors = {}
      // api call
      signup(this.username, this.email, this.password)
        .then(data => {
          console.log('signup passed', { data })
          this.error = ''
          this.$router.push('login')
        })
        .catch(err => {
          // unlock submit btn
          this.isDisabled = false
          if (err.statusCode === 400) {
            // validation error
            this.validationErrors = err.data.messages
          } else if (err.statusCode === -1) {
            // server not reached or doesn't reply
            this.error = err.mesaage
          }
        })
    }
  }
}
</script>

<style>
.form-group {
  margin-bottom: 1em;
}
</style>
