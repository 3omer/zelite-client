<template>
  <Card>
    <h3>
      <slot name="title"></slot>
    </h3>
    <hr/>
      <div class="alert alert-danger">
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