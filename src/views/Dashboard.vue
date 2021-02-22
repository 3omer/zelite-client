<template>
<div id="dashboard">
    <SensorList/>
    <SwitchList/>
</div>
</template>

<script>
import SwitchList from "../components/SwitchList"
import SensorList from "../components/SensorsList"

export default {
  name: "Dashboard",
  components: {
    SwitchList,
    SensorList
  }
};
</script>

<style>
</style>