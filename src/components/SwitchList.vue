<template>
  <div class="p-2 my-2 bg-white shadow rounded-lg">
    <h4>
      <span class="badge badge-dark px-3 mb-2">Switches</span>
    </h4>
    <div class="mx-0 mx-md-2">
      <SwitchDevice v-bind:device="device" v-bind:key="device.id" v-for="device in switches"/>
    </div>
  </div>
</template>

<script>
import SwitchDevice from "./SwitchDevice";

export default {
  data() {
    return {
      switches: [
        {
          id: "123",
          name: "test device",
          place: "testRoom",
          type: "switch",
          port: 5,
          topic: "zelite/room1/test"
        },
        {
          id: "123",
          name: "test device",
          place: "testRoom",
          type: "switch",
          port: 5,
          topic: "zelite/room1/test"
        }
      ]
    };
  },
  components: {
      SwitchDevice
  }
};
</script>

<style>
</style>