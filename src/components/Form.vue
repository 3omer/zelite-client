<template>
  <Card>
    <div v-if="$slots.title">
      <slot name="title" />
      <hr>
    </div>
    <div
      v-if="$slots.errors"
      class="alert alert-danger"
    >
      <slot name="errors" />
    </div>
    <slot name="form" />
  </Card>
</template>

<script>
import Card from "./Card";
export default {
  name: "Form",
  components: {
    Card
  }
};
</script>

<style>
</style>