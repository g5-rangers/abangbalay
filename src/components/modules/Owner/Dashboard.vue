<template>
  <div class="dashboard">
    <Buttons />
    <MyBhouse />
  </div>
</template>

<style scoped>
</style>

<script>
import Buttons from "components/modules/Owner/Buttons.vue";
import MyBhouse from "components/modules/Owner/MyBhouse.vue";
export default {
  name: "dashboard",
  components: {
    MyBhouse,
    Buttons
  }
};
</script>