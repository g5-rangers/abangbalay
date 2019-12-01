<template>
  <div id="create">
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn id="btn" v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <FormBhouse @uploaded="updateDashboard"></FormBhouse>
      <v-btn fab dark small color="green">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn fab dark small color="red">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>
<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute !important;
}

#btn {
 margin-top: 100% !important;
}
</style>

<script>
import FormBhouse from "components/modules/Owner/FormBhouse.vue";

export default {
  components: {
    FormBhouse
  },
  data: () => ({
    direction: "bottom",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: true,
    right: true,
    bottom: false,
    left: false,
    transition: "slide-y-reverse-transition"
  }),

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    }
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  },
  methods: {
    updateDashboard(item) {
      this.$emit("uploaded", item);
    }
  }
};
</script>