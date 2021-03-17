<template>
  <Card class="bg-light pb-2">
    <div class="h3">
      <span class="badge gradient-blue px-3">Sensors</span>
    </div>
    <ele-spinner v-if="$store.state.devicesLoading" />
    <div class="d-flex flex-wrap mx-0 mx-md-2 device-list">
      <SensorDevice :key="device.key" :device="device" v-for="device in sensors" />
    </div>
  </Card>
</template>

<script>
import SensorDevice from "./SensorDevice";
import Card from "./Card";
import eleSpinner from "./ele-spinner";

export default {
  name: "SensorList",
  computed: {
    sensors() {
      return this.$store.getters.sensorDevices;
    },
    devicesLoading() {
      return this.$store.state.devicesLoading;
    }
  },
  components: {
    SensorDevice,
    Card,
    eleSpinner
  },
  mounted() {
    // console.log(this);
  }
};
</script>

<style>
.gradient-reddish {
  background-color: #90d5ec !important;
  background-image: linear-gradient(223deg, #045de9 0%, #09c6f9 74%) !important;
}
</style>