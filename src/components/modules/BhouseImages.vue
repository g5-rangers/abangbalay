<template>
  <div id="popUpImg">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn small color="orange darken-2" v-on="on">
          <v-icon medium>mdi-arrow-up-bold-box-outline</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">View images</span>
        </v-card-title>
        <carousel :images="images"></carousel>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange darken-2" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
#popUpImg {
  margin-bottom: -15% !important;
  margin-left: 83% !important;
}
</style>
<script>
import carousel from "components/modules/Carousel.vue";
export default {
  props: {images: Array },
  components: { carousel },
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
  }
};
</script>