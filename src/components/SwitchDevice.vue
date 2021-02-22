<template>
  <div class="device row p-2 m-1 my-3 bg-white shadow-sm rounded-lg">
    <div
      class="icon col-2 bg-secondary rounded-circle d-flex align-items-center justify-content-center"
    >
      <img class="img-fluid" src="@/assets/switch.svg" width="100px" />
    </div>
    <div class="device-details col-4 px-2 m-1">
      <div class="device-name h5" data-target="name">
        <span class="name-icon">
          <img src="icons/name.svg" width="15px" />
        </span>
        <span>{{name}}</span>
      </div>
      <div class="device-place" data-target="place">
        <span class="place-icon">
          <img src="icons/place.svg" width="15px" />
        </span>
        <span>{{place}}</span>
      </div>
      <div class="device-port badge">
        <span class="port-icon">
          <img src="icons/port.svg" width="10px" />
        </span>
        <span>{{port}}</span>
      </div>
    </div>
    <div class="options col d-flex flex-column">
      <button class="btn action btn-primary rounded-pill">Turn off</button>
    </div>
  </div>
</template>

<script>

export default {
    name: 'SwitchDevice',
    data() {
        return {
            id: '123',
            name: 'test device',
            place: 'testRoom',
            type: 'switch',
            port: 5,
            topic: 'zelite/room1/test'
        }
    },
};
</script>

<style>
</style>