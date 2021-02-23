<template>
  <Form>
    <template v-slot:title>Login</template>
    <template v-slot:errors>smth went wrong</template>
    <template v-slot:form>
      <form id="loginForm" method="POST" novalidate>
        <div class="form-group">
          <input
            type="text"
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
import Form from "./Form";
export default {
  name: "LoginForm",
  components: {
    Form
  }
};
</script>

<style>
</style>