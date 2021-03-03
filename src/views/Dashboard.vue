<template>
  <div id="dashboard">
    <SensorList />
    <SwitchList />
  </div>
</template>

<script>
import SwitchList from "../components/SwitchList";
import SensorList from "../components/SensorsList";

export default {
  name: "Dashboard",
  components: {
    SwitchList,
    SensorList
  },
  created() {
    console.log("Dashboard:created()");
    this.$store.dispatch('loadDevices')
  },
};
</script>

<style>
</style>