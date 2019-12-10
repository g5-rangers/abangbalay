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
            <h6><v-icon color="orange darken-2">mdi-account</v-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{ bhouseProperties.owner_name }}</h6>
          </div>
          <div class="mt-12 text-left">
            <h6><v-icon color="orange darken-2">mdi-phone</v-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{ bhouseProperties.contact }}</h6>
          </div>
          <div class="mt-12 text-left">
            <h6><v-icon color="orange darken-2">mdi-email</v-icon>&nbsp;&nbsp;&nbsp;&nbsp;{{ bhouseProperties.email }}</h6>
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