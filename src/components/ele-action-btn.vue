<template>
  <button class="btn" :disabled="isDisabled" @click="$emit('click')">
    <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <!-- if the button has icon, hide it while loading -->
    <template v-if="$slots.icon"><slot v-if="!isLoading" name="icon"></slot></template>
    {{title}}
  </button>
</template>

<script>
export default {
    name: 'ele-btn-action',
    props: [ 'isLoading', 'isDisabled', 'title' ]
};
</script>

<style>
</style>