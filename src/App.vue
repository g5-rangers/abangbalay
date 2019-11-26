<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <Appbody></Appbody>
      <Footer></Footer>
    </v-app>
  </div>
</template>


<script>
import Header from "components/frame/Header.vue";
import Footer from "components/frame/Footer.vue";
import Appbody from "components/frame/Body.vue";

export default {
  name: "app",
  components: {
    Header,
    Appbody,
    Footer
  }
};
</script>

<style>
#app {
  background: white !important;
}
</style>