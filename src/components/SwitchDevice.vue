<template>
  <div class="switch row p-2 m-1 my-3 bg-white shadow-sm rounded-3">
    <div class="icon col-2 rounded-circle d-flex align-items-center justify-content-center">
      <img class="img-fluid" src="@/assets/switch1.png" width="100px" />
    </div>
    <div class="device-details col-4 px-2 m-1">
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
    <div class="options col d-flex flex-column">
      <button class="btn action btn-primary shadow-sm rounded">Turn off</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchDevice",
  props: {
    device: Object
  }
};
</script>

<style>
.gradient-blue {
}
</style>