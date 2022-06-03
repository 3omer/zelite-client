<template>
  <Card class="bg-light p-2 d-flex flex-column">
    <h5>Reach</h5>
    <a class="btn btn-lg btn-outline-secondary m-2" href="#" target="blank">
      <i class="bi bi-envelope-open-fill" />omarosmandev@gmail.com
    </a>
    <a
      class="btn btn-lg btn-dark m-2"
      href="https://github.com/3omer/zelite"
      target="blank"
    >
      <i class="bi bi-github" />Zelite Platform
    </a>
  </Card>
</template>
<script>
import Card from '../components/Card'
export default {
  components: {
    Card
  },
  data() {
    return {
      client: undefined
    }
  }
}
</script>
