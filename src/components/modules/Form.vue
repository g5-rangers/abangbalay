<template>
  <v-row justify="center" >
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn color="success" dark v-on="on">
          <v-icon dark left>mdi-check</v-icon>Inquire
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Owner's Contact Information</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <div class="mt-12 text-left">
               <v-icon>mdi-account</v-icon>Name: {{ contactForm.ownername }}
          </div>
          <div class="mt-12 text-left">
                <v-icon>mdi-cellphone</v-icon>Contact #: {{ contactForm.number }} / {{contactForm.landline}}
          </div>
          <div class="mt-12 text-left">
                <v-icon>mdi-email</v-icon>Email address: {{ contactForm.emailadd }}
          </div>
          <div class="mt-12 text-left">
                <v-icon>mdi-domain</v-icon>Facebook Account: {{ contactForm.fbacc }}
          </div>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange darken-2" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>


</style>

<script>

import axios from 'axios';

export default {

  data() {
    return {
      dialog: false,
      contactForm: {
        ownername: "Jeanilyn Tancinco",
        fbacc: "JeanilynTan",
        emailadd: "jeanilyntancinco@gmail.com",
        number: "+639502352712",
        landline: "723-2525"
      }
    };
  },
  mounted(){
    axios.get("http://localhost:3000/results").then(res => {
      this.ownername = res.data,
      this.fbacc = res.data,
      this.emailadd = res.data,
      this.number = res.data,
      this.landline = res.data
      this.dialog = false;
    }).catch(err => {
      console.log(err)
    })
  }
};
</script>