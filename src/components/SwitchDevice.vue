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
          <i class="bi bi-geo-alt"></i>
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
      <button
        id="power"
        @click="btnPower"
        class="btn action btn-primary shadow-sm rounded"
      >{{btnTitle}}</button>
    </div>
  </div>
</template>

<script>
import mqtt from '../services/mqtt'

export default {
  name: "SwitchDevice",
  props: {
    device: Object
  },
  created() {
    mqtt.setTopicListner(this.device.topic, (message) => {
      console.log('switch', this.device.name, ' received ', message)
      this.device.isOn = message === "1" ? true : false
    })
    .then(() => {
      console.log("switch.listner - set")
    })
    .catch(err => {
      console.log("switch.listner - error", err);
    })
  },
  data() {
    return {
      mqttClient: undefined
    };
  },
  computed: {
    btnTitle() {
      return this.device.isOn ? "TURN OFF" : "TURN ON";
    }
  },
  methods: {
    btnPower() {
      const payload = this.device.isOn ? "0": "1"
      mqtt.publishData(this.device.topic, payload).then(() => {
        console.log("switch state published");
      })
      .catch(err => {
        console.log("swicth.publish.error", err);
        
      })
      
    }
  }
};
</script>

<style>
.gradient-blue {
}
</style>