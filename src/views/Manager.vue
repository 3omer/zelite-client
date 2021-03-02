<template>
  <div>
    <h5>Manager</h5>
    <div class="accordion" id="settingsAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <i class="bi bi-ui-checks-grid"></i>
            Devices Manager
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#settingsAccordion"
        >
          <div class="accordion-body">
            <div class="m-auto">
              <div class="btn-group">
                <button type="button" class="btn btn-primary" @click="btnAddDevice">add device</button>
                <button type="button" class="btn btn-primary" @click="btnMyDevices">my devices</button>
              </div>
              <div :is="selectedComponent"></div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <i class="bi bi-globe"></i>
            MQTT Connection Manager
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#settingsAccordion"
        >
          <div class="accordion-body">
            <div id="MQTTManager" class="card -card-body p-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DevicesTable from "../components/DevicesTable";
import NewDeviceForm from "../components/NewDeviceForm";
export default {
  name: "Manager",
  data() {
    return { selectedComponent: DevicesTable }
  },
  computed: {
    devices() {
      return this.$store.state.devices;
    }
  },
  methods: {
    btnAddDevice() {
      this.selectedComponent = NewDeviceForm
    },

    btnMyDevices() {
      this.selectedComponent = DevicesTable
    }
  },
  components: {
    NewDeviceForm,
    DevicesTable
  }
};
</script>

<style>
</style>