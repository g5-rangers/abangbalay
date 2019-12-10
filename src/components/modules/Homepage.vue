<template>
  <div id="home">
    <v-card id="card" flat class="mx-auto" max-width="650px">
      <center>
        <div>
          <img :src="require('@/assets/images/MyFrontLogo.png')">
        </div>
        <v-card-text>
          <div>
            <h4>New in Cebu? Just stay calm, wait and search.</h4>
            <h4>We will find safe home for you..</h4>
          </div>
        </v-card-text>
        <v-col cols="12" sm="6">
          <v-text-field
            color="white"
            background-color="orange darken-2"
            v-model="select"
            class="mx-2"
            flat
            label="e.g Talamban"
            prepend-inner-icon="mdi-magnify"
            solo-inverted
            @keypress.enter="querySelections"
          />
        </v-col>
      </center>
    </v-card>
    <div v-if="items.length">
      <Results v-for="(details ,i) in items " :key="i" :Details="details"></Results>
    </div>
    <empty :Details="details" v-else></empty>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64" color="orange darken-2"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<style>
.v-progress-circular {
  margin: 1rem;
}
#backbtn {
  margin-bottom: 2% !important;
  margin-left: 90% !important;
}
#img {
  margin-left: 8% !important;
  margin-top: 2% !important;
}

#card {
  background-color: transparent !important;
  height: auto !important;
  margin-top: 10% !important;
}
</style>

<script>
import Results from "components/modules/Results.vue";
import empty from "components/modules/Empty.vue";
import axios from "axios";

export default {
  data() {
    return {
      overlay: false,
      items: [1, 1],
      emp: [1, 1],
      select: null
    };
  },
  components: {
    Results,
    empty
  },

  methods: {
    querySelections() {
      this.overlay = true;
      // Simulated ajax query
      axios
        .get(`http://localhost:4000/user/search/${this.select}`)
        .then(res => {
          // this.overlay = false;
          if (res.data == null) {
            this.emp = res.data;
          }
          setTimeout(() => {
            this.overlay = false;
          }, 1000);
          this.items = res.data;
        })
        .catch(err => {
          setTimeout(() => {
            this.overlay = false;
          }, 500);
          console.log(err.response);
        });
    }
  }
};
</script>