<template>
  <div id="dashboard">
    <Card
      v-if="$store.state.devices.length == 0"
      class="alert alert-info text-center"
    >
      It looks like you didn't add any devices yet ! <br>
      Head to the <router-link to="manager">
        Manager
      </router-link> and start adding devices
    </Card>
    <SensorList />
    <SwitchList />
  </div>
</template>

<script>
import Card from "../components/Card";
import SwitchList from "../components/SwitchList";
import SensorList from "../components/SensorsList";

export default {
  name: "Dashboard",
  components: {
    SwitchList,
    SensorList,
    Card
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
    this.$store.dispatch("connectMqtt").then(() => {
      this.$store.dispatch("loadMQTTConfig").then(() => {
        console.log("Dashboard: Devices loaded, MQTT is configured");
        this.$store.dispatch("loadDevices");
      });
    });
  }
};
</script>

<style>
</style>