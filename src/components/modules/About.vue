<template>
  <v-container
    class="grey lighten-5"
    id="about"
  >
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        v-for="(item,i) in items"
        :key="i"
        cols="3"
      >
        <v-card
          id="img"
          class="mx-auto"
          max-width="400"
        >
          <b-img
            fluid-grow
            alt="Fluid-grow image"
            rounded="circle"
            lt="Circle image"
            :src="item.src"
            class="white--text align-end"
            height="200px"
          >

          </b-img>
          <v-card-text
            class="text-center"
            style="margin-top: 8px"
          >
           <h5>{{ item.name }}</h5>
            <h6>{{ item.position }}</h6>
            <div>{{item.motto}}</div>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
#about,
#img {
  margin-top: 5% !important;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/images/rangie.png"),
          position: "Project Manager",
          motto:
            "Don't be pushed around by the fears in your mind.Be led by the dreams in your life.",
          name: "Rangie Laurente"
        },
        {
          src: require("@/assets/images/jude.png"),
          position: "Front-End Developer",
          motto: "It's going to be hard but hard does not mean impossible.",
          name: "Ma. Judelyn Cabalhao"
        },
        {
          src: require("@/assets/images/ismis.jpg"),
          position: "Front-End Developer",
          motto:
            "Don't worry about failures, worry about the chances you miss when you don't even try.",
          name: "Judilyn But-anon"
        },
        {
          src: require("@/assets/images/madam.png"),
          position: "Back-End Developer",
          motto:
            "Make your life a masterpiece, imagine no limitations on what you can be, have or do.",
          name: "Jeanilyn Mendoza"
        }
      ]
    };
  }
};
</script>
