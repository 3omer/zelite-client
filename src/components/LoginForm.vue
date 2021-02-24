<template>
  <Form>
    <template v-slot:title>Login</template>
    <template v-if="error" v-slot:errors>{{error}}</template>
    <template v-slot:form>
      <form @submit.prevent="onSubmit" id="loginForm" method="POST" novalidate>
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
          />
          <div class="invalid-feedback"></div>
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
          />
          <div class="invalid-feedback"></div>
        </div>

        <div class="border-top p-2 text-center">
          <button type="submit" class="btn btn-sm btn-primary m-3">Login</button>
          <router-link class="btn btn-sm btn-outline-primary" to="signup">I don't have account</router-link>
        </div>
      </form>
    </template>
  </Form>
</template>

<script>
import Form from "./Form"
import { login } from '../services/api'

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      error: null
    }
  },
  methods: {
    onSubmit() {
      console.log('LoginForm:onSubmit()')
      login(this.email, this.password)
      .then(user => {
        console.log('login passed');
        this.error = null
        this.$store.commit('SET_USER', user)
      })
      .catch(error => {
        console.error('login failed', error);
        this.error = error
      })
    },
  },
  components: {
    Form
  }
};
</script>

<style>
</style>