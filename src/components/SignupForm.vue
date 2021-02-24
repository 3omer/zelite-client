<template>
  <Form>
    <template v-slot:title>Create Account</template>
    <template v-if="error" v-slot:errors>{{error}}</template>
    <template v-slot:form>
      <form @submit.prevent="onSubmit" id="registerForm" method="POST">
        <div class="form-group">
          <input
          v-model="username"
            type="text"
            class="form-control"
            id="username"
            name="username"
            value
            placeholder="Username"
            required
          />
          <div class="invalid-feedback"></div>
        </div>

        <div class="form-group">
          <input
          v-model="email"
            type="email"
            class="form-control"
            id="email"
            name="email"
            value
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
            autocomplete="new-password"
            required
          />
          <div class="invalid-feedback"></div>
        </div>
        <div class="border-top p-2">
          <button type="submit" class="btn btn-sm btn-primary m-3">Register</button>

          <a class="btn btn-sm btn-outline-primary" href="/login">I have account</a>
        </div>
      </form>
    </template>
  </Form>
</template>

<script>
import Form from "./Form.vue"
import { signup } from "../services/api"

export default {
  name: "SignupForm",
  data() {
    return {
      username: "",
      email: "",
      password:"",
      error: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("SignupForm:onSubmit()")
      signup(this.username, this.email, this.password)
      .then(data => {
        console.log("signup passed", { data });
        this.error = ""
      })
      .catch(err => {
        this.error = err
      })
    }
  },
  components: {
    Form
  }
};
</script>

<style>
.form-group {
  margin-bottom: 1em;
}
</style>