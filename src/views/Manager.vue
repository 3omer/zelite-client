<template>
  <div>
    <h5>Manager</h5>
    <div id="settingsAccordion" class="accordion">
      <div class="accordion-item">
        <h2 id="headingOne" class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <i class="bi bi-ui-checks-grid" />
            Devices Manager
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#settingsAccordion"
        >
          <div class="accordion-body bg-light">
            <div class="mb-2">
              <button class="btn btn-primary mx-2" @click="btnAddDevice">
                Add Device
              </button>
              <button class="btn btn-primary mx-2" @click="btnMyDevices">
                My Devices
              </button>
            </div>
            <Card class="p-2 bg-white">
              <DevicesTable v-if="selectedComponent == 'DevicesTable'" />
              <NewDeviceForm v-if="selectedComponent == 'NewDeviceForm'" />
            </Card>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="headingTwo" class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <i class="bi bi-globe" />
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
            <div>
              <MQTTConfig />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DevicesTable from '../components/DevicesTable'
import NewDeviceForm from '../components/NewDeviceForm'
import MQTTConfig from '../components/MQTTConfig'

import Card from '../components/Card'
export default {
  name: 'Manager',
  components: {
    NewDeviceForm,
    DevicesTable,
    Card,
    MQTTConfig
  },
  data() {
    return { selectedComponent: DevicesTable.name }
  },
  computed: {
    devices() {
      return this.$store.state.devices
    }
  },
  methods: {
    btnAddDevice() {
      this.selectedComponent = 'NewDeviceForm'
    },

    btnMyDevices() {
      this.selectedComponent = 'DevicesTable'
    }
  }
}
</script>

<style></style>
