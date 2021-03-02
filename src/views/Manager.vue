<template>
  <div>
    <h5>
      Manager
    </h5>
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
          Devices Manager</button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#settingsAccordion"
        >
          <div class="accordion-body">
            <table id="deviceManager" class="table table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Port</th>
                  <th scope="col">Name</th>
                  <th scope="col">Place</th>
                  <th scope="col">MQTT-Topic</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr :key="device.key" v-for="device in devices">
                  <th>{{device.port}}</th>
                  <td>{{device.name}}</td>
                  <td>{{device.place}}</td>
                  <td>
                    <input class="form-control" type="text" :value="device.topic" readonly />
                  </td>

                  <td>
                    <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
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
          MQTT Connection Manager</button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#settingsAccordion"
        >
          <div class="accordion-body">
            <div id="MQTTManager" class="card -card-body p-2">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Card from "../components/Card";
export default {
  name: "Manager",
  computed: {
    devices() {
      return this.$store.state.devices;
    }
  },
  components: {
    // Card
  }
};
</script>

<style>
</style>