<template>
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
          <button class="btn btn-danger">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    computed: { devices() { return this.$store.state.devices } },
    name: "DevicesTable"
};
</script>

<style>
</style>