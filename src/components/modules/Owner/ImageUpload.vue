<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn large fab v-on="on">
          <v-icon dark>mdi-camera</v-icon>
        </v-btn>
      </template>
      <v-card class="px-10">
        <br />
        <br />
        <v-card-text>
          <v-file-input v-model="imgs" multiple label="Upload Images" prepend-icon="mdi-camera"></v-file-input>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="handleFileUpload">Upload</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<style scoped>
</style>
<script>
export default {
  data: () => ({
    dialog: false,
    imgs: []
  }),
  methods: {
    Upload() {
      console.log(this.imgs);
      
    },
    handleFileUpload() {
      var x = [];
      this.imgs.map(img => {
        this.encode(img).then(res => {
          x.push(res);
        });
      });
      console.log(x);
      
    },
    encode: async file => {
      let result_base64 = await new Promise(resolve => {
        let fileReader = new FileReader();
        fileReader.onload = e => {
          console.log(typeof e);
          resolve(fileReader.result);
        };
        fileReader.readAsDataURL(file);
      });
      return result_base64;
    }
  }
};
</script>