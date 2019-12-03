<template>
  <v-app id="login">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="orange darken-2" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form ref="loginForm">
                  <br />
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
                    :value="password"
                    label="Enter password"
                    hint="Your password passed! Password rules are not meant to be broken!"
                    :append-icon="value ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="() => (value = !value)"
                    :type="value ? 'password' : 'text'"
                    :rules="[rules.rulePassword]"
                    @input="_ => (password = _)"
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
                <v-spacer />
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
// import axios from "axios";
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
      if (this.$refs.loginForm.validate()) {
        e.preventDefault();
        let data = {
          password: this.password,
          email: this.email
        };
        this.$store
          .dispatch("loginAsync", data)
          .then(() => {
            this.$router.push("/dashboard");
            this.$swal.fire({
              title: "Thank you for logging in",
              width: 500,
              padding: "3em",
              backdrop: `rgba(0,0,123,0.4)`
            });
          })
          .catch(err => console.log(err));
      }
    }
  }
};
</script>