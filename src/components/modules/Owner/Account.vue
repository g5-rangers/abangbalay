<template>
  <div class="account">
    <v-card :loading="loading" class="mx-auto my-12" max-width="374" id="acc" ref="form">
      <v-avatar color="indigo">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <v-card-title style="color:orange ; font-size: 25px">My Account</v-card-title>
      <v-card-text>
        <div>
          <v-label
            v-model="email"
          ></v-label>
          <v-label v-model="password" >sdsd</v-label>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="deep-purple accent-4" text @click="edit">Edit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
#checkboxes {
  margin-top: -10% !important;
}

#acc {
  border: 1px gray !important;
}
</style>

<script>
import axios from "axios";
export default {
  data: () => ({
    loading: false,
    email: "",
    password: ""
  }),
  mounted() {
    axios
      .post("http://localhost:4000/user/register")
      .then(res => {
        this.email = res.data.email
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    upload() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    edit(e) {
      e.preventDefault();
      console.log("sds");
    }
  }
};
</script>