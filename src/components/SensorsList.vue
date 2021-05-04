<template>
  <Card class="bg-light pb-2">
    <div class="h3">
      <span class="badge gradient-blue px-3">Sensors</span>
    </div>
    <ele-spinner v-if="$store.state.devicesLoading" />
    <div class="d-flex flex-wrap mx-0 mx-md-2 device-list">
      <SensorDevice
        v-for="device in sensors"
        :key="device.key"
        :device="device"
      />
    </div>
  </Card>
</template>

<script>
import SensorDevice from './SensorDevice'
import Card from './Card'
import eleSpinner from './ele-spinner'

export default {
  name: 'SensorList',
  components: {
    SensorDevice,
    Card,
    eleSpinner
  },
  computed: {
    sensors() {
      return this.$store.getters.sensorDevices
    },
    devicesLoading() {
      return this.$store.state.devicesLoading
    }
  },
  mounted() {
    // console.log(this);
  }
}
</script>

<style>
.gradient-reddish {
  background-color: #90d5ec !important;
  background-image: linear-gradient(223deg, #045de9 0%, #09c6f9 74%) !important;
}
</style>
