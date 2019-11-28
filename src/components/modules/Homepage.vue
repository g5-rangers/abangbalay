<template>
  <div id="home">
    <v-card id="card" flat class="mx-auto" max-width="600px">
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
          <v-toolbar dark color="orange darken-2">
            <v-autocomplete
              v-model="select"
              :loading="loading"
              :items="items"
              :search-input.sync="search"
              cache-items
              class="mx-4"
              flat
              hide-no-data
              hide-details
              label="e.g Talamban"
              solo-inverted
            ></v-autocomplete>
            <v-btn icon @click="test">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
      </center>
    </v-card>
    <Results v-for="i in 3 " :key="i" :Details="details" ></Results>
  </div>
</template>

<style>
#backbtn {
  margin-bottom: 2% !important;
  margin-left: 90% !important;
}
#img {
  margin-left: 8% !important;
  margin-top: 2% !important;
  cursor: pointer !important;
}

#card {
  background-color: transparent !important;
  height: auto !important;
  margin-top: 10% !important;
}
</style>

<script>
import Results from "components/modules/Results.vue";

export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: ["Talamban"]
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  components: {
    Results
  },
  methods: {
    test() {
      alert(this.select);
    },
    querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
  }
};
</script>