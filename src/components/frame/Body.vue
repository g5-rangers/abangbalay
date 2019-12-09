<template>
  <div>
    <transition-group>    
      <router-view :key="0" ></router-view>
      <Footer :key="1"></Footer>
    </transition-group>
    
  </div>
  
</template>

<style>


</style>

<script>

import Footer from "components/frame/Footer.vue";

export default {
  name: "appbody",
  components: {
    Footer
  }
};
</script>
