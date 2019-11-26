  <template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="250px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>
            <v-card-text>
                <h4>Boarding House Description</h4>
            </v-card-text>
            <v-spacer></v-spacer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Carmelites Dormitory",
        src:
          "https://www.passerellesnumeriques.org/wp-content/uploads/2018/07/IMG_20180419_144038.png",
        flex: 4
      },
      {
        title: "Indian Residence",
        src: "https://www.affordablecebu.com/_bd/830/63210760.jpg",
        flex: 4
      },
      {
        title: "Madam French Dormitory",
        src: "https://www.mybenta.com/img/151179481844714405.jpg",
        flex: 4
      },
      
    ]
  })
};
</script>