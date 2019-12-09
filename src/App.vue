<template>
  <div id="app">
    <Header></Header>
    <v-app>
      <Appbody></Appbody>
    </v-app>
  </div>
</template>


<script>
import Header from "components/frame/Header.vue";
import Appbody from "components/frame/Body.vue";
export default {
  name: "app",
  components: {
    Header,
    Appbody
  }
};
</script>

<style>
#app {
  background: white !important;
}
</style>