<template>
  <div id="dashboard">
    <SensorList />
    <SwitchList />
  </div>
</template>

<script>
import { getDevices } from "../services/api";
import SwitchList from "../components/SwitchList";
import SensorList from "../components/SensorsList";

export default {
  name: "Dashboard",
  components: {
    SwitchList,
    SensorList
  },
  created() {
    // fetch user devices
    console.log("Dashboard:created() - loading data");

    getDevices(this.$store.getters.token)
      .then(devices => {
        console.log("Devices loaded - count", devices.length);
        this.$store.commit("SET_DEVICES", devices);
      })
      .catch(err => {
        console.log("Loading data failed", err);
      });
  },
};
</script>

<style>
</style>