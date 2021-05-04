<template>
  <div id="app">
    <header>
      <AppHeader />
    </header>

    <div class="container-fluid">
      <div class="row vh-100">
        <!-- nav menu -->
        <nav
          class="col-md-3 p-0 border-right d-none d-md-block bg-white vh-10 border border-top-0"
        >
          <NavLinks />
        </nav>
        <!-- contnet -->
        <main role="main" class="col col-md-7 col-lg-6 px-2 my-2 mx-auto">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader'
import NavLinks from './components/NavLinks'
export default {
  name: 'App',
  components: {
    AppHeader,
    NavLinks
  }
}
</script>
<style>
.bi {
  vertical-align: -0.025em;
  margin-right: 0.5em;
}
</style>
