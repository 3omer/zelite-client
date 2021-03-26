<template>
<div class="switch p-2 m-1 my-3 bg-white shadow-sm rounded-3">
  <div class="row">
    <div class="icon col-3 col-sm-2 rounded-circle d-flex align-items-center justify-content-center">
      <img class="img-fluid" src="@/assets/switch1.png" width="100px" />
    </div>
    <div class="device-details col-7 col-sm-4  px-2 m-1">
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
    <div class="options col-12 col-sm-5 mx-auto my-1 my-sm-0 d-flex flex-column">
      <ele-action-btn
        :isLoading="isLoading"
        :isDisabled="isDisabled"
        :title="btnTitle"
        @click="btnPower"
        class="btn-primary"
      >
        <i slot="icon" class="bi bi-power"></i>
      </ele-action-btn>
    </div>
  </div>
</div>
</template>

<script>
import mqtt from "../services/mqtt";
import eleActionBtn from "./ele-action-btn";

export default {
  name: "SwitchDevice",
  components: {
    eleActionBtn
  },
  props: {
    device: Object
  },
  data() {
    return {
      isLoading: true,
      isDisabled: true
    };
  },
  created() {
    // lock the button untill you get last state from the server
    this.lockBtn(true);

    mqtt
      .setTopicListner(this.device.topic, message => {
        console.log("switch", this.device.name, " received ", message);
        this.device.isOn = message === "1" ? true : false;

        // unlock when we recieve a message from server
        this.lockBtn(false);
      })
      .then(() => {
        console.log("switch.listner - set");
      })
      .catch(err => {
        console.log("switch.listner - error", err);
      });
  },
  beforeDestroy() {
    // TODO: not all listners, only specfic to this topic
    mqtt.getClient().removeAllListeners()
  },
  computed: {
    btnTitle() {
      return this.device.isOn ? "TURN OFF" : "TURN ON";
    }
  },
  methods: {
    btnPower() {
      // lock btn until we get reseponse
      this.lockBtn(true);
      const payload = this.device.isOn ? "0" : "1";
      mqtt
        .publishData(this.device.topic, payload)
        .then(() => {
          console.log("switch state published");
        })
        .catch(err => {
          console.log("swicth.publish.error", err);
        });
    },
    lockBtn(isLocked) {
      this.isLoading = this.isDisabled = isLocked;
    }
  }
};
</script>

<style>
.gradient-blue {
}
</style>