<template>
  <Form class="p-2">
    <template v-slot:title>
      <h3>Create Account</h3>
    </template>
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
          <eleActionBtn
            :title="'Register'"
            :isDisabled="isDisabled"
            :isLoading="isDisabled"
            class="btn-primary mx-2"
            type="submit"
          />
          <router-link to="login" class="btn btn-outline-primary">I have account</router-link>
          <!-- <a class="btn btn-outline-primary" href="/login">I have account</a> -->
        </div>
      </form>
    </template>
  </Form>
</template>

<script>
import Form from "./Form.vue";
import eleActionBtn from "./ele-action-btn";

import { signup } from "../services/api";

export default {
  name: "SignupForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: "",
      isDisabled: false
    };
  },
  methods: {
    onSubmit() {
      console.log("SignupForm:onSubmit()");
      this.isDisabled = true
      this.error = ""
      signup(this.username, this.email, this.password)
        .then(data => {
          console.log("signup passed", { data });
          this.error = "";
          this.$router.push('login')
        })
        .catch(err => {
          this.error = err;
          this.isDisabled = false
        });
    }
  },
  components: {
    Form,
    eleActionBtn
  }
};
</script>

<style>
.form-group {
  margin-bottom: 1em;
}
</style>