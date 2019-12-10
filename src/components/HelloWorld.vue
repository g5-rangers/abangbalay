<template>
  <div class="hello">
    <center>
      <input style="display: none" type="file" @change="onFileSelected" ref="fileInput" />
      <v-btn @click="$refs.fileInput.click()">Pick file to upload</v-btn>
      <br />
      <button @click="onUpload">Upload</button>
    </center>

    <ul>
      <li v-for="ninja in ninjas" :key="ninja" v-on:click="ninja.show =! ninja.show">
        <h2>{{ninja.name}}</h2>
        <h3 v-show="ninja.show">{{ninja.specialty}}</h3>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#hello {
  margin-right: -30% !important;
  margin-top: 20% !important;
  border: 2px solid black !important;
}
</style>
<script>
import axios from "axios";
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  name: "HelloWorld",
  data() {
    return {
      selectedFile: null
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(event);
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      axios
        .post("http://localhost:3000/upload", fd, {
          onUploadProgress: uploadEvent => {
            console.log(
              "Upload Progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100 + "%")
            );
          }
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
