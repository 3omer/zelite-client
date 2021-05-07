<template>
  <div>
    <h5>MQTT Credentilas</h5>
    <div class="alert alert-warning">
      Keep this secret
    </div>

    <div class="form-group">
      <label for="username" class>username</label>
      <Toggled :flag="userConfirmed">
        <input
          id="username"
          v-model="config.username"
          type="text"
          class="form-control"
        />
      </Toggled>
    </div>
    <div class="form-group">
      <label for="password" class>password</label>
      <Toggled :flag="userConfirmed">
        <input
          id="password"
          v-model="config.password"
          type="text"
          class="form-control"
        />
      </Toggled>
    </div>

    <div class="form-group">
      <input
        id="confirmed"
        v-model="userConfirmed"
        type="checkbox"
        name="confirmed"
        class="form-check-input"
      />
      I know what I am doing
    </div>
    <Toggled :flag="userConfirmed">
      <button class="btn btn-danger mx-2" @click="btnChange">
        Change
      </button>
    </Toggled>

    <hr />

    <h5>Connection Settings</h5>
    <div class="alert alert-danger">
      Do not change unless You know what are you doing
    </div>
    <div class="form-group">
      <label for="host" class>host</label>

      <div class="col">
        <input
          id="host"
          :value="config.host"
          type="text"
          class="form-control"
          disabled
        />
      </div>
    </div>
  </div>
</template>

<script>
import { postMQTTCred } from '../services/api'
import Toggled from '../components/ToggledInput'

export default {
  name: 'MQTTConfig',
  components: { Toggled },
  data() {
    return {
      userConfirmed: false,
      error: ''
    }
  },
  computed: {
    config() {
      return this.$store.state.MQTTConfig
    }
  },
  methods: {
    btnChange() {
      console.log('btnChange()')
      postMQTTCred(this.$store.getters.token, {
        username: this.config.username,
        password: this.config.password
      })
        .then(() => {
          console.log('MQTT credentials updated')
        })
        .catch(error => {
          if (error.statusCode === 400) {
            this.error = 'mqtt username and passowrd are required'
          } else this.error = error.message || error.status
        })
    },

    btnReload() {
      this.$store.dispatch('loadMQTTConfig')
    }
  }
}
</script>

<style></style>
