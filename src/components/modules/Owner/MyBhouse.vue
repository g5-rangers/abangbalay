  <template>
  <v-card class="bhouse_dd">
    <v-img
      :src="bhouseProperties.image[0]"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="250px"
    >
    <BhouseImages :images="bhouseProperties.image" v-if="bhouseProperties.image.length >1"/>
      <v-card-title v-text="bhouseProperties.name"></v-card-title>
    </v-img>
    <v-card-text>
      <section>
        <h6>Address: {{bhouseProperties.address}}</h6>
        <h6>No. of occupants: {{bhouseProperties.occupants}}</h6>
        <h6>Monthly payment: {{bhouseProperties.payment}}</h6>
        <h6>Freebies: {{bhouseProperties.freebies}}</h6>
        <v-card-title>Contact Details</v-card-title>
          <h6>Name: {{bhouseProperties.owner_name}}</h6>
          <h6>Contact no. :{{bhouseProperties.contact}}</h6>
          <h6>Email address: {{bhouseProperties.email}}</h6>
      </section>
      
    </v-card-text>
    <v-spacer></v-spacer>
  </v-card>
</template>

<style scoped>

.bhouse_dd{
  margin-top: 10% !important;
}
</style>

<script>
export default {
  props: {
    bhouseProperties: {
      type: Object
    }
  },
  components: {
    BhouseImages: () => import("components/modules/BhouseImages.vue")
  }
};
</script>