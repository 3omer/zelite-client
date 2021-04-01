<template>
  <div class="sensor d-flex m-1 p-1 bg-white rounded-pill shadow-sm">
    <div class="sensor-value bg-light m-1 rounded-circle text-center p-3 border border-secondary">
      <span class="text-small">{{ device.value || "-/-" }}</span>
    </div>
    <div class="device-details align-self-end">
      <div class="device-name h6">
        <span>
          <i class="bi bi-chevron-right" />
          {{ device.name }}
        </span>
      </div>
      <div class="device-place">
        <span>
          <i class="bi bi-geo-alt" />
          {{ device.place }}
        </span>
      </div>
      <div class="device-port">
        <span>
          <i class="bi bi-cpu" />
          {{ device.port }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import mqtt from '../services/mqtt'

export default {
  name: "SensorDevice",
  props: {
    device: Object
  },
  mounted() {
    mqtt.setTopicListner(this.device.topic, (message) => {
      this.device.value = message
    }).then(() => {
      console.log('Sesnor.lisnter - set');
    })
    .catch(err => {
      console.log("sensor.listner - err", err);
      
    })
}
};
</script>

<style>
.sensor {
  min-width: 280px;
}

.sensor-value {
  font-size: 1.9rem;
  line-height: 1.5em;
  /* min-width: 20px; */
  width: 80px;
  height: 80px;
}
</style>