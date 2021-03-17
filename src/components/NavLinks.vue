<template>
  <div class="list-group-flush">
    <router-link to="home" class="list-group-item list-group-item-action">
      <i class="bi bi-house"></i>
      Home
    </router-link>
    <router-link to="dashboard" class="list-group-item list-group-item-action">
      <i class="bi bi-speedometer"></i>
      Dashboard
    </router-link>
    <router-link to="manager" class="list-group-item list-group-item-action">
      <i class="bi bi-gear"></i>
      Manager
    </router-link>
    <router-link to="about" class="list-group-item list-group-item-action">
      <i class="bi bi-info-circle"></i>
      About
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.list-group-item.active {
    color: #495057 !important;
    background-color: #d2d2d264 !important;
    border-color: #fff !important;
}
</style>