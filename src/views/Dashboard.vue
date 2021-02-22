<template>
  <div class="p-2 my-2 bg-white shadow rounded-lg">
    <h4>
      <span class="badge badge-dark px-3 mb-2">Switches</span>
    </h4>
    <div id="switchList" class="mx-0 mx-md-2">
        <SwitchDevice/>
    </div>
  </div>
</template>

<script>
import SwitchDevice from "../components/SwitchDevice"

export default {
  name: "Dashboard",
  components: {
    SwitchDevice
  }
};
</script>

<style>
</style>