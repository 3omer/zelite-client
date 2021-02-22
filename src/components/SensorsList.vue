<template>
  <div class="p-2 my-2 bg-white shadow rounded-lg">
    <h4>
      <span class="badge badge-dark px-3 mb-2">Sensors</span>
    </h4>
    <div class="d-flex flex-wrap mx-0 mx-md-2 device-list">
      <SensorDevice :key="device.id" :device="device" v-for="device in sensors"/>
    </div>
  </div>
</template>

<script>
import SensorDevice from './SensorDevice'

export default {
  name: "SensorList",
  data() {
    return {
      sensors: [
        {
          id: "321",
          name: "test temp",
          value: "35",
          place: "testRoom2",
          type: "sensor",
          port: 1,
          topic: "zelite/room1/sens/temp"
        },
        {
          id: "654",
          name: "humidity",
          value: "43",
          place: "room3",
          type: "sensor",
          port: 2,
          topic: "zelite/room3/hum"
        }
      ]
    }
  },
  components: {
      SensorDevice
  }
};
</script>

<style>
</style>