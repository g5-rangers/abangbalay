<template>
  <div class="dashboard">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(detail,index) in bhouseProperties" :key="index" cols="4">
          <MyBhouse :bhouseProperties="detail"></MyBhouse>
        </v-col>
      </v-row>
    </v-container>
    <Buttons @uploaded="updateDashboard"/>
  </div>
</template>

<style scoped>
</style>

<script>
import axios from "axios";
import Buttons from "components/modules/Owner/Buttons.vue";
import MyBhouse from "components/modules/Owner/MyBhouse.vue";
export default {
  data() {
    return {
      bhouseProperties: []
    };
  },
  name: "dashboard",
  components: {
    MyBhouse,
    Buttons
  },
  methods: {
    updateDashboard(item) {
      this.bhouseProperties.push(item);
      console.log(this.bhouseProperties);
    }
  },
  mounted() {
    axios
      .get("http://localhost:4000/owner/retrieveAll")
      .then(res => {
        this.bhouseProperties = []
        console.log(res.data);
        let x = sessionStorage.getItem("Email");
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].creator === x) {
            this.bhouseProperties.push(res.data[i]);
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>