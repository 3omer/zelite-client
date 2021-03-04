<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ToggledInput",
  props: ["flag"],
  watch: {
    flag() {
      if (this.flag) {
        this.$el.firstElementChild.removeAttribute("disabled");
      } else {
        this.$el.firstElementChild.setAttribute("disabled", this.flag);
      }
    }
  },
  mounted() {
    this.$el.firstElementChild.setAttribute("disabled", this.flag);
  }
};
</script>

<style>
</style>