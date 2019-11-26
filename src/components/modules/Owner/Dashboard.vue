<template>
  <div class="dashboard">
    <Buttons />
    <MyBhouse  v-bind:bhouseProperties="bhouseProperties"></MyBhouse>
  </div>
</template>

<style scoped>
</style>

<script>
import Buttons from "components/modules/Owner/Buttons.vue";
import MyBhouse from "components/modules/Owner/MyBhouse.vue";
export default {
  data() {
    return {
      bhouseProperties: [
        { name: "Carmelites Dormitory", address: "San Alberto", occupantsNumber: "0" , monthlyPay: "1000", column: "Free Water"},
        { name: "Indian Residence", address: "JTH", occupantsNumber: "0" , monthlyPay: "1000", column: "Free Water"},
        { name: "Madam French", address: "France", occupantsNumber: "0" , monthlyPay: "1000", column: "Free Water"}
      ]
    };
  },
  name: "dashboard",
  components: {
    MyBhouse,
    Buttons
  }
};
</script>