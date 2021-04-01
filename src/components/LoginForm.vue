<template>
  <Form class="p-2">
    <template v-slot:title>
      <h3>Login</h3>
    </template>
    <template
      v-if="error"
      v-slot:errors
    >
      {{ error }}
    </template>
    <template v-slot:form>
      <form
        @submit.prevent="onSubmit"
        id="loginForm"
        method="POST"
        novalidate
      >
        <div class="form-group">
          <input
            v-model="email"
            type="text"
            class="form-control"
            id="email"
            name="email"
            placeholder="Email"
            autocomplete="email"
            required
          >
          <div class="invalid-feedback" />
        </div>

        <div class="form-group">
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            name="password"
            value
            placeholder="Password"
            autocomplete="current-password"
            required
          >
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
          <router-link
            class="btn btn-outline-primary"
            to="signup"
          >
            I don't have account
          </router-link>
        </div>
      </form>
    </template>
  </Form>
</template>

<script>
import Form from "./Form"
import eleActionBtn from "./ele-action-btn";

import { login } from '../services/api'

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      isDisabled: false
    }
  },
  methods: {
    onSubmit() {
      console.log('LoginForm:onSubmit()')
      this.isDisabled = true
      this.error = ''
      login(this.email, this.password)
      .then(user => {
        console.log('login passed');
        this.error = null
        this.$store.commit('SET_USER', user)
        this.$router.push('dashboard')
        this.isDisabled = false
      })
      .catch(error => {
        console.error('login failed', error);
        this.error = error
        this.isDisabled = false
        this.password = ''
      })
    },
  },
  components: {
    Form,
    eleActionBtn
  }
};
</script>

<style>
</style>