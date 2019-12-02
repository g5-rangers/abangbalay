<template>
  <div class="results" >
    <v-container fluid>
      <v-card>
        <v-row>
          <v-col cols="6" md="4">
            <v-img
              id="img"
              class="white--text align-end"
              height="200px"
              :src="Details.image[0]"
            >
            <Images :images="Details.image" v-if="Details.image.length >1"/>
              <v-card-actions>
                <Map></Map>
              </v-card-actions>
            </v-img>
            <v-overlay :absolute="absolute" :opacity="opacity" :value="overlay" :z-index="zIndex">
              <v-btn id="backbtn" color="orange darken-2" @click="overlay = false">
                <v-icon small>mdi-arrow-left</v-icon>
              </v-btn>
              <v-card>
                <v-img
                  id="gmap"
                  class="white--text align-end"
                  height="400px"
                  src="https://i2.wp.com/www.knowcebu.com/wp-content/uploads/2016/11/tst-25.png?resize=800%2C614"
                ></v-img>
              </v-card>
            </v-overlay>
          </v-col>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-col cols="6" sm="4">
            <v-card-title v-model="bHouseName">{{Details.name}}</v-card-title>
            <v-card-subtitle class="pb-0" v-model="bHouseAddress">{{Details.address}}</v-card-subtitle>
            <v-card-text class="text--primary">
              <br>
              <div>■ {{Details.occupants}} occupants per room</div>
              <div>■ {{Details.freebies}}</div>
            </v-card-text>
          </v-col>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-col>
            <center>
              <v-card-text class="text-success">
                <br />
                <br />
                <h3>₱ {{Details.payment}}.00</h3>
              </v-card-text>
              <Form></Form>
            </center>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<style>
.results{
  margin-top: 2% !important;
}


</style>

<script>
// import axios from 'axios';
import Form from "components/modules/Form.vue";
import Map from "components/modules/Map.vue";
import Images from "components/modules/BhouseImages.vue";

export default {
  props:{
    Details :Object
  },
  data() {
    return {
      bHouseName: "",
      bHouseAddress: "",
      drawer: false,
      absolute: false,
      opacity: 0.46,
      overlay: false,
      zIndex: 5
    };
  },
  components: {Form,Map, Images},
  // mounted(){
  //   axios.get("http://localhost:3000/results").then(res => {
  //     this.bHouseName = res.data,
  //     this.bHouseAddress = res.data
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
};
</script>