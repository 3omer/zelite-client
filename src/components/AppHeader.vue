<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <a class="navbar-brand bg-primary shadow-none align-bottom" href="/">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path
              d="m5.13 10.71h3.74l-2.65-2.65c-1.01 0-1.83-.82-1.83-1.84a1.83 1.83 0 0 1 1.83-1.83c1.02 0 1.84.82 1.84 1.83l2.65 2.65v-3.74c-.71-.72-.71-1.88 0-2.59.71-.72 1.87-.72 2.58 0 .71.71.71 1.87 0 2.59v3.74l2.66-2.65c0-1.01.81-1.83 1.83-1.83 1.01 0 1.83.82 1.83 1.83 0 1.02-.82 1.84-1.83 1.84l-2.65 2.65h3.74c.72-.71 1.88-.71 2.59 0 .72.71.72 1.87 0 2.58-.71.71-1.87.71-2.59 0h-3.74l2.65 2.66c1.01 0 1.83.81 1.83 1.83a1.83 1.83 0 0 1-1.83 1.83c-1.02 0-1.83-.82-1.83-1.83l-2.66-2.65v3.74c.71.72.71 1.88 0 2.59-.71.72-1.87.72-2.58 0-.71-.71-.71-1.87 0-2.59v-3.74l-2.65 2.65c0 1.01-.82 1.83-1.84 1.83-1.01 0-1.83-.82-1.83-1.83 0-1.02.82-1.83 1.83-1.83l2.65-2.66h-3.74c-.72.71-1.88.71-2.59 0-.72-.71-.72-1.87 0-2.58.71-.71 1.87-.71 2.59 0z"
              style="fill:#ffffffd8"
            />
          </svg>
        </span>
        <span class="mx-1 align-middle">Zelite</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <div class="d-md-none">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0 align-items-center">
            <li class="nav-item active border-bottom">
              <router-link to="home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item border-bottom">
              <router-link to="about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- only if user is authenticated -->
    <div
      v-if="user.email"
      class="user-status d-flex justify-content-between align-items-center border shadow p-2 px-3"
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
// TODO: Add status/notifiction bar to display app level errors

export default {
  name: "AppHeader",
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