<template>
  <div class="device d-flex m-1 p-1 bg-white rounded-pill shadow-sm">
    <div class="bg-light m-1 rounded-circle text-center p-2 border border-secondary">
      <span class="text-small" style="font-size: 1.5rem;line-height: 1.5em;">N/A</span>
    </div>
    <div class="device-details pr-4">
      <div class="device-name">
        <span class="name-icon">
          <img src="name.svg" width="12px" />
        </span>
        <span>{{device.name}}</span>
      </div>
      <div class="device-place" data-target="place">
        <span class="place-icon">
          <img src="icons/place.svg" width="12px" />
        </span>
        <span>{{device.place}}</span>
      </div>
      <div class="device-port badge">
        <span class="port-icon">
          <img src="icons/port.svg" width="12px" />
        </span>
        <span>{{device.port}}</span>
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
}
</script>

<style>
</style>