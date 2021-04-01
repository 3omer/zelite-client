<template>
  <Form class="shadow-none">
    <template
      v-if="error"
      v-slot:errors
    >
      {{ error }}
    </template>
    <template v-slot:form>
      <form
        @submit.prevent="onSubmit"
        id="loginForm"
        method="POST"
        novalidate
      >
        <div class="form-group">
          <input
            v-model="form.name"
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Your device name eg. light"
            autocomplete="name"
            required
          >
        </div>

        <div class="form-group">
          <input
            v-model="form.place"
            type="text"
            class="form-control"
            id="place"
            name="place"
            placeholder="place"
            autocomplete="place"
            required
          >
        </div>
        <div class="form-group">
          <input
            class="form-control"
            id="port"
            name="port"
            v-model="form.port"
            placeholder="Port number"
            type="number"
          >
        </div>
        <div class>
          <select
            class="form-select"
            id="type"
            name="type"
            v-model="form.type"
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
        </div>
        <div class="border-top p-2">
          <div
            v-if="info"
            class="alert alert-success m-1"
          >
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
import Form from "./Form";
import eleActionBtn from "./ele-action-btn";
import { postDevice } from "../services/api";
import { types } from "../store/mutations-types";

export default {
  name: "NewDeviceForm",
  components: { Form, eleActionBtn },
  data() {
    return {
      form: {
        name: "",
        place: "",
        type: "Select a device type from this menu",
        port: undefined
      },
      isLoading: false,
      isDisabled: false,
      info: "",
      error: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("onSubmit()");
      this.isDisabled = true;
      this.isLoading = true;
      this.info = "";

      const data = {
        name: this.form.name,
        place: this.form.port,
        port: this.form.port,
        type: this.form.type
      };

      postDevice(this.$store.getters.token, data)
        .then(device => {
          if (!device) {
            this.error = "Sorry something went wrong";
          }
          this.$store.commit(types.ADD_DEVICE, device);
          this.form = { name: "", place: "", port: undefined };
          this.info = "Device is added successfully !";
          this.isLoading = false;
          this.isDisabled = false;
        })
        .catch(errMsg => {
          this.error = errMsg;
          this.isLoading = false;
          this.isDisabled = false;
        });
    }
  }
};
</script>

<style>
</style>