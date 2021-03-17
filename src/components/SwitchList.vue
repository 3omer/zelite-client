<template>
  <Card class="my-2 pb-2 bg-light">
    <div class="h3">
      <span class="badge gradient-blue px-3">Switches</span>
    </div>
    <div class="mx-0 mx-md-2">
      <ele-spinner v-if="$store.state.devicesLoading"/>
      <SwitchDevice v-bind:device="device" v-bind:key="device.id" v-for="device in switches" />
    </div>
  </Card>
</template>

<script>
import Card from "./Card";
import SwitchDevice from "./SwitchDevice";
import eleSpinner from './ele-spinner'
export default {
  computed: {
    switches() {
      return this.$store.getters.switchDevices;
    },
  },
  components: {
    SwitchDevice,
    Card,
    eleSpinner
  }
};
</script>

<style>
.gradient-blue {
  background-color: #045de9 !important ;
  background-image: linear-gradient(150deg, #045de9 0%, #09c6f9 74%) !important;
}

.gradient-light {
}
</style>