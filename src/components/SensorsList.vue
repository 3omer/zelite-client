<template>
  <div class="p-2 my-2 bg-white shadow rounded-lg">
    <h4>
      <span class="badge badge-dark px-3 mb-2">Sensors</span>
    </h4>
    <div v-if="sensors.length" class="d-flex flex-wrap mx-0 mx-md-2 device-list">
      <SensorDevice :key="device.key" :device="device" v-for="device in sensors" />
    </div>
  </div>
</template>

<script>
import SensorDevice from "./SensorDevice";

export default {
  name: "SensorList",
  computed: {
    sensors() {
      return this.$store.getters.sensorDevices
    }
  },
  components: {
    SensorDevice
  },
  mounted() {
    // console.log(this);
  }
};
</script>

<style>
</style>