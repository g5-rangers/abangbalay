<template>
  <v-app id="login">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="orange darken-2" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer/>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <br>
                  <v-text-field
                    outlined
                    autocomplete="current-email"
                    :value="email"
                    label="Enter Email"
                    :append-icon="'mdi-email'"
                    :rules="emailRules"
                    @input="_ => (email = _)"
                  ></v-text-field>

                  <v-text-field
                    outlined
                    v-model="password"
                    autocomplete="current-password"
                    :value="userPassword"
                    label="Enter password"
                    hint="Your password passed! Password rules are not meant to be broken!"
                    :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value = !value)"
                    :type="value ? 'password' : 'text'"
                    :rules="[rules.password]"
                    @input="_ => (userPassword = _)"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="regLink">
                  <p>Don't have an account yet?</p>
                  <center>
                    <router-link to="/createaccount">Create account</router-link>
                  </center>
                </div>
                <v-spacer/>
                <v-btn color="orange darken-2" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
.regLink {
  margin-left: 5% !important;
}
</style>


<script>

import axios from "axios";
import AUTH from "services/auth";

export default {
  name: "login",
  data() {
    return {
      auth: AUTH,
      email: "",
      password: "",
      valid: true,
      value: true,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      rules: {
        required: value => !!value || "Required.",
        rulePassword: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        }
      }
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      let user = AUTH.login(this.email, this.password);
      AUTH.setUser(user);
      axios
        .get("http://localhost:3000/user/login")
        .then(res => {
          (this.email = res.data), (this.password = res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>