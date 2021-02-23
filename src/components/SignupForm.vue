<template>
  <Card>
    <h3>Create account</h3>
    <hr />
    <div class="alert alert-danger">Error Message</div>
    <form id="registerForm" method="POST">
      <div class="form-group">
        <input
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
          type="email"
          class="form-control"
          id="email"
          name="email"
          value
          placeholder="Email"
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
          required
        />
        <div class="invalid-feedback"></div>
      </div>
      <div class="border-top p-2">
        <button type="submit" class="btn btn-sm btn-primary m-3">Register</button>

        <a class="btn btn-sm btn-outline-primary" href="/login">I have account</a>
      </div>
    </form>
  </Card>
</template>

<script>
import Card from "./Card.vue"
export default {
  name: "SignupForm",
  components: {
      Card
  }
};
</script>

<style>
.form-group {
  margin-bottom: 1em;
}
</style>