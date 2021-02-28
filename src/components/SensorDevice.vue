<template>
  <div class="sensor d-flex m-1 p-1 bg-white rounded-pill shadow-sm">
    <div class="sensor-value bg-light m-1 rounded-circle text-center p-3 border border-secondary">
      <span class="text-small">{{device.value || "N/A"}}</span>
    </div>
    <div class="device-details">
      <div class="device-name h6">
        <span>
          <i class="bi bi-chevron-right"></i>
          {{device.name}}
        </span>
      </div>
      <div class="device-place">
        <span>
          <i class="bi bi-geo"></i>
          {{device.place}}
        </span>
      </div>
      <div class="device-port">
        <span>
          <i class="bi bi-cpu"></i>
          {{device.port}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SensorDevice",
  props: {
    device: Object
  },
  created() {
    // console.log(this.device.key, 'created');
  }
};
</script>

<style>
.sensor {
  min-width: 280px;
}

.sensor-value {
  font-size: 1.5rem;
  line-height: 1.5em;
  min-width: 20px;
}
</style>