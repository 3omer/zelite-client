<template>
  <Card class="bg-light p-2 d-flex flex-column">
    <router-link class="btn btn-lg btn-primary m-2" to="signup">
      <i class="bi bi-person-lines-fill"></i>Signup
    </router-link>
    <router-link class="btn btn-lg btn-outline-primary m-2" to="login">
      <i class="bi bi-box-arrow-in-right"></i>Login
    </router-link>
    <router-link class="btn btn-lg btn-secondary m-2" to="about">
      <i class="bi bi-question-circle"></i>Help
    </router-link>
  </Card>
</template>
<script>
import Card from "../components/Card";
export default {
  data() {
    return {
      client: undefined
    };
  },
  components: {
    Card
  }
};
</script>