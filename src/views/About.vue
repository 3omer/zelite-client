<template>
  <Card class="bg-light p-2 d-flex flex-column">
    <h5>Reach</h5>
    <a class="btn btn-lg btn-outline-secondary m-2" href="#" target="blank">
      <i class="bi bi-envelope-open-fill"></i>omarosmandev@gmail.com
    </a>
    <a class="btn btn-lg btn-dark m-2" href="https://github.com/3omer/zelite" target="blank">
      <i class="bi bi-github"></i>Zelite Platform
    </a>
    <a class="btn btn-lg btn-primary m-2" href="https://fb.com/3omermhmd" target="blank">
      <i class="bi bi-facebook"></i>Omer M. Osman
    </a>
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