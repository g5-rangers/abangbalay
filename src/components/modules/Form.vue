<template>
  <v-row justify="center">
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
            <v-icon>mdi-account</v-icon>
            <h6>Name: {{ bhouseProperties.onwer_name }}</h6>
          </div>
          <div class="mt-12 text-left">
            <v-icon>mdi-cellphone</v-icon>
            <h6>Contact #: {{ bhouseProperties.contact_number }}</h6>
          </div>
          <div class="mt-12 text-left">
            <v-icon>mdi-email</v-icon>
            <h6>Email address: {{ bhouseProperties.email_add }}</h6>
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

<script>
export default {
  props: {
    bhouseProperties: {
      type: Object
    }
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>