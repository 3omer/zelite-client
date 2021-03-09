<template>
  <div class="about position-relative">
    <h1>This is an about page</h1>
    <eleActionBtn class="btn-primary" :isDisabled="true" :isLoading="true" :title="'ok'" />
  </div>
</template>
<script>
import eleActionBtn from "../components/ele-action-btn";

export default {
  data() {
    return {
      client: undefined
    };
  },
  components: {
    eleActionBtn
  }
};
</script>