<template>
  <Form class="shadow-none">
    <template v-if="error" v-slot:errors>
      {{ error }}
    </template>
    <template v-slot:form>
      <form id="loginForm" method="POST" @submit.prevent="onSubmit">
        <div class="form-group">
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': validationErrors.name }"
            name="name"
            placeholder="Your device name eg. light"
            autocomplete="name"
            required
          />
          <div class="invalid-feedback">
            {{ validationFeedbacks.name }}
          </div>
        </div>

        <div class="form-group">
          <input
            id="place"
            v-model="form.place"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': validationErrors.place }"
            name="place"
            placeholder="place"
            autocomplete="place"
            required
          />
          <div class="invalid-feedback">
            {{ validationFeedbacks.place }}
          </div>
        </div>
        <div class="form-group">
          <input
            id="port"
            v-model="form.port"
            class="form-control"
            :class="{ 'is-invalid': validationErrors.port }"
            name="port"
            placeholder="Port number"
            type="number"
          />
          <div class="invalid-feedback">
            {{ validationFeedbacks.port }}
          </div>
        </div>
        <div class>
          <select
            id="type"
            v-model="form.type"
            class="form-select"
            :class="{ 'is-invalid': validationErrors.type }"
            name="type"
          >
            <option selected>
              Select a device type from this menu
            </option>
            <option value="switch">
              Switch
            </option>
            <option value="sensor">
              Sensor
            </option>
          </select>
          <div class="invalid-feedback">
            {{ validationFeedbacks.type }}
          </div>
        </div>
        <div class="border-top p-2">
          <div v-if="info" class="alert alert-success m-1">
            <span>{{ info }}</span>
          </div>
          <eleActionBtn
            :title="'Create'"
            :is-disabled="isDisabled"
            :is-loading="isLoading"
            class="btn-primary"
            type="submit"
          />
        </div>
      </form>
    </template>
  </Form>
</template>

<script>
import Form from './Form'
import eleActionBtn from './ele-action-btn'
import { postDevice } from '../services/api'
import { types } from '../store/mutations-types'

export default {
  name: 'NewDeviceForm',
  components: { Form, eleActionBtn },
  data() {
    return {
      form: {
        name: '',
        place: '',
        type: 'Select a device type from this menu',
        port: undefined
      },
      validationErrors: {},
      isLoading: false,
      isDisabled: false,
      info: '',
      error: ''
    }
  },
  computed: {
    // TODO: refactoring Form component to support validation errors
    validationFeedbacks() {
      return {
        name: ''.concat(this.validationErrors.name || ''),
        place: ''.concat(this.validationErrors.place || ''),
        type: ''.concat(this.validationErrors.type || ''),
        port: ''.concat(this.validationErrors.port || '')
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit()')
      this.isDisabled = true
      this.isLoading = true
      this.info = ''

      const data = {
        name: this.form.name,
        place: this.form.place,
        port: this.form.port,
        type: this.form.type
      }

      postDevice(this.$store.getters.token, data)
        .then(data => {
          if (!data.device) {
            this.error = 'Sorry something went wrong'
          }
          this.error = ''
          this.$store.commit(types.ADD_DEVICE, data.device)
          this.form = { name: '', place: '', port: undefined }
          this.info = 'Device is added successfully !'
          this.isLoading = false
          this.isDisabled = false
        })
        .catch(error => {
          this.isLoading = false
          this.isDisabled = false
          if (error.statusCode === -1) {
            this.error = 'Something went wrong, try again.'
          } else if (error.statusCode === 400) {
            this.validationErrors = error.data.messages
          } else if ([401, 422, 403].includes(error.statusCode)) {
            this.$store.commit(types.DEL_USER)
            this.$router.push('login')
          } else {
            this.error = 'Something went wrong'
          }
        })
    }
  }
}
</script>

<style></style>
