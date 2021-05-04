<template>
  <table id="deviceManager" class="table table-hover">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          Port
        </th>
        <th scope="col">
          Name
        </th>
        <th scope="col">
          Place
        </th>
        <th scope="col">
          MQTT-Topic
        </th>
        <th scope="col" />
      </tr>
    </thead>
    <tbody>
      <tr v-for="device in devices" :key="device.key">
        <th>{{ device.port }}</th>
        <td>{{ device.name }}</td>
        <td>{{ device.place }}</td>
        <td>
          <input
            class="form-control"
            type="text"
            :value="device.topic"
            readonly
          />
        </td>

        <td>
          <eleActionBtn
            :is-disabled="isDisabled"
            :is-loading="isLoading"
            class="btn-danger"
            @click="btnDelete(device.key)"
          >
            <i slot="icon" class="bi bi-trash" />
          </eleActionBtn>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { deleteDevice } from '../services/api'
import { types } from '../store/mutations-types'
import eleActionBtn from './ele-action-btn'
export default {
  name: 'DevicesTable',
  components: { eleActionBtn },
  data() {
    return {
      isLoading: false,
      isDisabled: false
    }
  },
  computed: {
    devices() {
      return this.$store.state.devices
    }
  },
  methods: {
    btnDelete(key) {
      console.log('btnDelete()', key)
      this.isLoading = this.isDisabled = true
      deleteDevice(this.$store.getters.token, key)
        .then(() => {
          console.log('Deleted')
          this.$store.commit(types.DELETE_DEVICE, key)
          this.isLoading = this.isDisabled = false
        })
        .catch(errorMsg => {
          console.log(errorMsg)
          this.isLoading = this.isDisabled = false
        })
    }
  }
}
</script>

<style></style>
