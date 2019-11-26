<template>
  <v-row justify="center">
    <v-btn small fab color="indigo" dark @click.stop="dialog = true" class="addBtn">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="350px">
      <v-card :loading="loading" max-width="350px">
        <div id="container">
          <ImageUpload id="uploadicon"></ImageUpload>
        </div>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <div>
            <v-text-field label="Name of your boarding house"></v-text-field>
            <v-text-field
              label="Property address"
              hint="Ex. Rosillos St. Nasipit Rd. Talamban, Cebu"
            ></v-text-field>
            <v-select v-model="select" :items="items" label="Number of occupants" required></v-select>
            <v-text-field type="number" label="Monthly payment"></v-text-field>
            <v-container fluid id="radios">
              <v-radio-group v-model="column" column>
                <v-label>Freebies</v-label>
                <v-radio label="Free water" value="Free water"></v-radio>
                <v-radio label="Free electricity" value="Free electricity"></v-radio>
                <v-radio label="Both" value="Both"></v-radio>
              </v-radio-group>
            </v-container>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="deep-purple accent-4" text @click="upload"><v-icon medium>mdi-arrow-up-bold-box-outline</v-icon>Done</v-btn>
          <v-btn color="deep-purple accent-4" text @click="dialog = false"><v-icon medium>mdi-close-outline</v-icon>Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>
#radios {
  margin-top: -8% !important;
  margin-bottom: -10% !important;
}

#container {
  padding: 15% !important;
}
</style>

<script>
import ImageUpload from "components/modules/Owner/ImageUpload.vue";

export default {
  components: {
    ImageUpload
  },
  data: () => ({
    dialog: false,
    loading: false,
    select: null,
    items: ["2", "3", "4", "5", "6"]
  }),
  methods: {
    upload() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
      setTimeout(() => (this.dialog = false), 2000);
    }
  }
};
</script>