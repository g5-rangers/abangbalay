<template>
  <v-carousel height="400px">
    <v-carousel-item
      v-for="(item,i) in images"
      :key="i"
      :src="item"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    images: { type: Array }
  }
};
</script>