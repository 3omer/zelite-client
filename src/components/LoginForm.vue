<template>
  <Card>
      <h3>Login</h3>
      <hr>
      <form id="loginForm" method="POST" novalidate>
                <div class="form-group">
                    <input type="text" class="form-control" id="email" name="email" value=""
                        placeholder="Email" required>
                    <div class="invalid-feedback"></div>
                </div>

                <div class="form-group">
                    <input type="password" class="form-control" id="password" name="password" value=""
                        placeholder="Password" required>
                    <div class="invalid-feedback"></div>
                </div>
                
                <div class="border-top p-2 text-center">
                    <button type="submit" class="btn btn-sm btn-primary m-3">Login</button>
                    <router-link class="btn btn-sm btn-outline-primary" to="signup">I don't have account</router-link>
                </div>
            </form>
  </Card>
</template>

<script>
import Card from "./Card.vue"
export default {
    name: 'LoginForm',
    components: {
        Card
    }
}
</script>

<style>

</style>