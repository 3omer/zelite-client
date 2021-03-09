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
  data() {
    return {
      mqttClient: undefined
    };
  },
  computed: {
    MQTTConfig() {
      return this.$store.state.MQTTConfig;
    },
    mqttStatus() {
      if (this.mqttClient.connected) return "connected";
      return "disconnected";
    }
  },
  created() {
    console.log("Dashboard:created()");
    // load user devices
    this.$store.dispatch("loadDevices").then(() => {
      this.$store.dispatch("loadMQTTConfig").then(() => {
        console.log("Dashboard: Devices loaded, MQTT is configured");
        this.$store.dispatch("connectMqtt");
      });
    });
  }
};
</script>

<style>
</style>