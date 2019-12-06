<template>
  <div class="empty" >
    <v-container fluid>
        <center>
        <h4><v-icon>mdi-magnify</v-icon>No Results available</h4>
        </center>
    </v-container>
  </div>
</template>

<style>
.empty{
  margin-top: 2% !important;
}

</style>

<script>

export default {
  props:{
    Details :Object
  },
};
</script>