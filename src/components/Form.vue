<template>
  <Card>
    <div v-if="$slots.title">
      <slot name="title"></slot>
      <hr />
    </div>
    <div v-if="$slots.errors" class="alert alert-danger">
      <slot name="errors"></slot>
    </div>
    <slot name="form"></slot>
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