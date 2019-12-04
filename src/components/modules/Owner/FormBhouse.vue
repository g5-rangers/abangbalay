<template>
  <v-row justify="center">
    <v-btn small fab color="indigo" dark @click.stop="dialog = true" class="addBtn">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="350px">
      <v-card :loading="loading" max-width="350px">
        <v-divider class="mx-4"></v-divider>
        <br />
        <v-card-text>
          <div>
            <v-text-field
              outlined
              dense
              v-model="bhouseName"
              prepend-inner-icon="mdi-home"
              label="Name of your boarding house"
            ></v-text-field>
            <v-text-field
              outlined
              dense
              v-model="bhouseAddress"
              prepend-inner-icon="mdi-map-marker"
              label="Property address"
              hint="Ex. Rosillos St. Nasipit Rd. Talamban, Cebu"
            ></v-text-field>
            <v-select
              outlined
              dense
              prepend-inner-icon="mdi-account-multiple"
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
              prepend-inner-icon="mdi-camera"
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
              <v-tooltip left color="info">
                <template v-slot:activator="{ on }">
                  <v-label v-on="on">Contact information</v-label>
                </template>
                <span>Please provide contact information</span>
              </v-tooltip>
              <v-text-field
                outlined
                dense
                v-model="owner_name"
                prepend-inner-icon="mdi-account"
                label="Owner's name"
                hint="Ex. James Reid"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                type="number"
                v-model="contact_number"
                label="Landline or Cellphone no."
                prepend-inner-icon="mdi-phone"
              />
              <v-text-field
                outlined
                dense
                type="email"
                :rules="emailRules"
                v-model="email_add"
                label="Email address"
                prepend-inner-icon="mdi-email"
              />
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
      items: ["1", "2", "3", "4", "5", "6"],
      imgs: [],
      owner_name: null,
      contact_number: null,
      email_add: null,
      emailRules: [v => /.+@.+/.test(v) || "E-mail must be valid"]
    };
  },
  methods: {
    uploadFile: function() {
      if (
        this.bhouseName == null ||
        this.bhouseAddress == null ||
        this.monthlyPayAmount == null ||
        this.freebies == null ||
        this.occupants == null ||
        this.contact_number == null ||
        this.email_add == null
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
          creator: sessionStorage.getItem("Email"),
          owner_name: this.owner_name,
          email: this.email_add,
          contact: this.contact_number
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
            this.contact_number = null;
            this.email_add = null;
            this.owner_name = null;
          })
          .catch(error => {
            console.error("file upload failed", error);
          });
      }
    }
  }
};
</script>