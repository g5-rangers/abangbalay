<template>
  <div id="topnav">
    <v-toolbar id="toolbar">
      <v-app-bar-nav-icon
        color="black darken-2"
        @click.stop="drawer = !drawer"
        v-if="$route.name =='dashboard' || $route.name =='account' "
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img
          id="logo"
          :src="require('@/assets/images/MyLogo.png')"
          class="my-3"
          contain
          height="45"
        ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        top
        temporary
        height="1000000"
        left
      >
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="light-blue--text text--accent-4">
            <v-list-item v-for="(item, index) in items" :key="index" :to="item.link">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar-items>
        <v-btn
          text
          medium
          id="items"
          @click="logout"
          v-if="$route.name == 'dashboard' || $route.name == 'account' "
        >Logout</v-btn>
        <v-btn
          text
          medium
          id="items"
          @click="redirect('/')"
          v-if="$route.name != 'dashboard' && $route.name !='account' "
        ><v-icon>mdi-home</v-icon></v-btn>
        <v-divider
          class="mx-4"
          inset
          vertical
          v-if="$route.name != 'dashboard' && $route.name !='account' "
        ></v-divider>
        <v-btn
          text
          medium
          id="items"
          @click="redirect('/about')"
          v-if="$route.name != 'dashboard' && $route.name !='account' "
        >About us</v-btn>
        <v-divider
          class="mx-4"
          inset
          vertical
          v-if="$route.name != 'dashboard' && $route.name !='account' "
        ></v-divider>
        <v-btn
          text
          medium
          id="items"
          @click="redirect('/login')"
          v-if="$route.name != 'dashboard' && $route.name !='account' "
        >Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/colors.scss";
#toolbar {
  background-color: transparent !important;
}
#logo {
  margin-left: -30% !important;
  cursor: pointer !important;
}
</style>

<script>
import ROUTER from "router";
import AUTH from "services/auth";

export default {
  name: "headernav",
  data() {
    return {
      auth: AUTH,
      drawer: false,
      group: null,
      items: [
        { icon: "mdi-view-dashboard", title: "Dashboard", link: "/dashboard" },
        { icon: "mdi-account", title: "Account", link: "/account" }
      ]
    };
  },
  watch: {
    group() {
      this.drawer = false;
    }
  },
  methods: {
    redirect(route) {
      ROUTER.push(route);
    },
    logout(e) {
      e.preventDefault();
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$swal
            .fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              cancelButtonText: "No",
              confirmButtonText: "Yes",
              backdrop: `rgba(0,0,123,0.4)`
            })
            .then(result => {
              if (result.value) {
                this.$router.push("/login");
                this.$swal.fire(
                  "You are now logged out",
                  " ",
                  "success"
                );
              }
            });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

