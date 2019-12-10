<template>
<div class="footer">
  <v-footer
    dark
    padless
    absolute
  >
    <v-card
      flat
      width="100%"
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>abangbalay</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</div>
</template>

<style>

.footer{
  margin-top: 15% !important;
}

</style>


<script>

export default {
  
}
</script>
