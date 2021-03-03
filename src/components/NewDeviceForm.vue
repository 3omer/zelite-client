<template>
  <Form class="shadow-none">
    <template>Add new device</template>
    <template v-if="error" v-slot:errors>{{error}}</template>
    <template v-slot:form>
      <form @submit.prevent="onSubmit" id="loginForm" method="POST" novalidate>
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
          />
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
          />
        </div>
        <div class="form-group">
          <input class="form-control" id="port" name="port" placeholder="Port number" type="number" />
        </div>
        <div class="form-group">
          <label for="type">Device Type</label>
          <select class="custom-select" id="type" name="type" v-model="form.type">
            <option value="switch">Switch</option>
            <option value="sensor">Sensor</option>
          </select>
        </div>
        <div class="border-top p-2 text-center">
          <button type="submit" class="btn btn-sm btn-primary m-3">Submit</button>
        </div>
      </form>
    </template>
  </Form>
</template>

<script>
import Form from "./Form";
import { postDevice } from "../services/api";
import { types } from "../store/mutations-types";

export default {
  name: "NewDeviceForm",
  components: { Form },
  data() {
    return {
      form: {
        name: "",
        place: "",
        type: "switch",
        port: ""
      },
      error: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("onSubmit()");
      postDevice(this.$store.getters.token, this.form)
        .then(device => {
          if (!device) {
            this.error = "Sorry something went wrong";
          }
          this.$store.commit(types.ADD_DEVICE, device);
        })
        .catch(errMsg => {
          this.error = errMsg;
        });
    }
  }
};
</script>

<style>
</style>