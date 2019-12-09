<template>
  <div>
    <transition-group>    
            <router-view :key="0" ></router-view>
            <Footer></Footer>
    </transition-group>
    <!-- <Sidebar></Sidebar> -->
    
  </div>
  
</template>

<style>
</style>

<script>
// import ROUTER from 'router'
// import Sidebar from "components/frame/Sidebar.vue";
import Footer from "components/frame/Footer.vue";

export default {
  name: "appbody",
  components: {
    Footer
    // Sidebar
  }
};
</script>
