<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark gradient-blue px-1">
      <a class="navbar-brand bg-white align-bottom rounded" href="/">
        <img src="../assets/zelite_logo_title_side.png" width="110" class="img-fluid" alt="">
      </a>
      <div class="border border-white rounded">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      </div>
    </nav>
    <div class="collapse navbar-collapse" id="navbarToggleMenu">
        <div class="d-md-none">
          <NavLinks/>
        </div>
      </div>
    <div
      v-if="user.email"
      class="user-status d-flex justify-content-between align-items-center border p-2 px-3"
    >
      <div class="user media text-secondary">
        <div class="media-body">
          <small class="user-name">{{user.email}}</small>
          <br />
        </div>
      </div>
      <button @click="btnLogout" class="btn btn-sm btn-dark">Logout</button>
    </div>
  </div>
</template>

<script>
import { logout } from "../services/api"
import NavLinks from './NavLinks'
// TODO: Add status/notifiction bar to display app level errors

export default {
  name: "AppHeader",
  components:{
    NavLinks
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    btnLogout() {
      // handle on click
      console.log("btnLogout()");
      logout(this.user.token)
        .then(msg => {
          console.log("Logging out - success", msg)
          // TODO: display msg on status bar
          this.$store.commit('DEL_USER')
          this.$router.push('/')
        })
        .catch(errMsg => {
          console.log("Logging out - failed", errMsg)
        // TODO: display errMsg on status bar
        })
    }
  }
};
</script>

<style>

</style>