<template>
  <v-row justify="center">
    <v-btn small fab color="indigo" dark @click.stop="dialog = true" class="addBtn">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="350px">
      <v-card :loading="loading" max-width="350px">
        <v-divider class="mx-4"></v-divider>
        <br>
        <v-card-text>
          <div>
            <v-text-field outlined dense v-model="bhouseName" label="Name of your boarding house"></v-text-field>
            <v-text-field
              outlined
              dense
              v-model="bhouseAddress"
              label="Property address"
              hint="Ex. Rosillos St. Nasipit Rd. Talamban, Cebu"
            ></v-text-field>
            <v-select
              outlined
              dense
              v-model="occupants"
              :items="items"
              label="Number of occupants"
              required
            ></v-select>
            <v-text-field
              outlined
              dense
              v-model="monthlyPayAmount"
              type="number"
              prefix="₱"
              label="Monthly payment"
            ></v-text-field>
            <v-file-input
              outlined
              dense
              v-model="imgs"
              multiple
              label="Upload Images"
              prepend-icon="mdi-camera"
              accept="/*image"
            ></v-file-input>
            <v-container fluid id="radios">
              <v-radio-group v-model="freebies" column>
                <v-label>Freebies</v-label>
                <v-radio label="Free water" value="Free water"></v-radio>
                <v-radio label="Free electricity" value="Free electricity"></v-radio>
                <v-radio label="Both" value="Both free water and electricity"></v-radio>
              </v-radio-group>
            </v-container>
            <v-container fluid>
              <v-label>Contact information</v-label>
              <v-text-field
                outlined
                dense
                type="number"
                v-model="cp_number"
                label="Cellphone no."
                prepend-inner-icon="mdi-cellphone"
              />
              <v-text-field
                outlined
                dense
                type="number"
                v-model="landline_number"
                label="Landline no."
                prepend-inner-icon="mdi-call-split"
              />
              <v-text-field
                outlined
                dense
                type="text"
                v-model="fb_account"
                label="Facebook account"
                prepend-inner-icon="mdi-domain"
              />
              <v-text-field
                outlined
                dense
                suffix="@gmail.com"
                type="text"
                v-model="email_add"
                label="Email"
                prepend-inner-icon="mdi-domain"
              />
            </v-container>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="deep-purple accent-4" text @click="uploadFile">
            <v-icon medium>mdi-arrow-up-bold-box-outline</v-icon>Upload
          </v-btn>
          <v-btn color="deep-purple accent-4" text @click="dialog = false">
            <v-icon medium>mdi-close-outline</v-icon>Close
          </v-btn>
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
</style>

<script>
import axios from "axios";

export default {
  name: "bhouseform",
  data() {
    return {
      bhouseName: null,
      bhouseAddress: null,
      monthlyPayAmount: null,
      freebies: null,
      occupants: null,
      dialog: false,
      loading: false,
      items: ["2", "3", "4", "5", "6"],
      imgs: [],
      contact_number: null
    };
  },
  methods: {
    uploadFile: function() {
      if (
        this.bhouseName == null ||
        this.bhouseAddress == null ||
        this.monthlyPayAmount == null ||
        this.freebies == null ||
        this.occupants == null
      ) {
        this.dialog = true;
        this.$swal.fire({
          title: "Please fill up the provided fields.",
          width: 500,
          padding: "3em",
          backdrop: `rgba(255,0,0,0.4)`
        });
      } else {
        this.loading = true;
        var details = {
          name: this.bhouseName,
          address: this.bhouseAddress,
          payment: this.monthlyPayAmount,
          freebies: this.freebies,
          occupants: this.occupants,
          creator: sessionStorage.getItem("Email")
        };

        let formData = new FormData();
        for (let i = 0; i < this.imgs.length; i++) {
          formData.append("img", this.imgs[i]);
        }
        formData.append("details", JSON.stringify(details));
        axios
          .post(`http://localhost:4000/owner/uploadMultiple`, formData)
          .then(res => {
            setTimeout(() => (this.loading = false), 2000);
            setTimeout(() => (this.dialog = false), 2000);
            console.log(res.data);
            this.$emit("uploaded", res.data);
            this.bhouseName = null;
            this.bhouseAddress = null;
            this.monthlyPayAmount = null;
            this.freebies = null;
            this.occupants = null;
            this.imgs = null;
          })
          .catch(error => {
            console.error("file upload failed", error);
          });
      }
    }
  }
};
</script>