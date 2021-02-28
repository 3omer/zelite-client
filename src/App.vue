<template>
  <div id="app">
    <header>
      <AppHeader />
    </header>

    <div class="container-fluid">
      <div class="row vh-100">
        <!-- {% if current_user.is_authenticated %} -->
        <nav class="col-md-3 p-0 border-right d-none d-md-block bg-white vh-10 border border-top-0">
          <div class="list-group-flush">
            <router-link to="home" class="list-group-item list-group-item-action">
              <i class="bi bi-house"></i>
              Home
            </router-link>
            <router-link to="dashboard" class="list-group-item list-group-item-action">
              <i class="bi bi-speedometer"></i>
              Dashboard
            </router-link>
            <router-link to="about" class="list-group-item list-group-item-action">
              <i class="bi bi-info-circle"></i>
              About
            </router-link>
          </div>
        </nav>

        <!-- {% endif %} -->
        <main role="main" class="col col-md-7 col-lg-6 px-2 my-2 mx-auto">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>
<style>
.bi {
  vertical-align: -0.025em;
  margin-right: 0.5em;
}
</style>
