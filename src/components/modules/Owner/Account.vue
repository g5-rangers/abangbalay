<template>
  <div class="text-center" id="account">
    <v-dialog v-model="dialog" width="350">
      <template v-slot:activator="{ on }">
        <v-card :loading="loading" class="mx-auto my-12" max-width="350" id="acc">
          <v-avatar color="indigo">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
          <v-card-title style="color:orange ; font-size: 25px">My Account</v-card-title>
          <v-card-text>
            <div>
              <v-text-field v-model="email" label="Email address" readonly></v-text-field>
              <v-text-field v-model="password" type="password" label="Password" readonly></v-text-field>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-purple accent-4" @click="new_email = email" text v-on="on">Edit</v-btn>
          </v-card-actions>
        </v-card>
      </template>

      <v-card>
        <v-card-title style="color:orange ; font-size: 25px">Edit account</v-card-title>
        <br />
        <v-card-text>
          <div>
            <v-form lazy-validation ref="form">
              <v-text-field
                outlined
                prepend-inner-icon="mdi-email"
                dense
                type="email"
                label="Email address"
                v-model="new_email"
                :rules="[rules.emailRules ,rules.required]"
              ></v-text-field>
              <v-text-field
                outlined
                prepend-inner-icon="mdi-lock"
                dense
                type="password"
                label="Old Password"
                :rules="[rules.required,v=>v==password || 'Incorrect password',rules.passwordRules]"
                v-model="old_password"
              ></v-text-field>
              <v-text-field
                outlined
                type="password"
                prepend-inner-icon="mdi-lock"
                v-model="new_password"
                dense
                label="New Password"
              ></v-text-field>
              <v-text-field
                outlined
                type="password"
                :rules="[v=>v==new_password || 'Unmatched password',v=>v=='']"
                prepend-inner-icon="mdi-lock"
                v-model="confirm_password"
                dense
                label="Confirm Password"
              ></v-text-field>
            </v-form>
          </div>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="deep-purple accent-4" text @click="validate">Save</v-btn>
          <v-btn color="deep-purple accent-4" text @click="closeDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
#checkboxes {
  margin-top: -10% !important;
}

#acc {
  border: 1px gray !important;
}
</style>

<script>
import jwt_decode from "jwt-decode";
export default {
  data: () => ({
    dialog: false,
    loading: false,
    email: "",
    new_email: "",
    password: "",
    old_password: "",
    new_password: "",
    confirm_password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters",
      emailRules: v => /.+@.+\..+/.test(v) || "E-mail must be valid",
      passwordRules: v =>
        (v && v.length >= 8) || "Password must be more than 8 characters",
      passwordValidate: v =>
        !!v ||
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/.test(
          v
        ) ||
        "Password must be valid"
    }
  }),
  mounted() {
    var token = jwt_decode(localStorage.getItem("jwt"));
    this.email = token.email;
    this.password = token.password;
  },
  methods: {
    validate() {
      console.log(this.new_email);
      if (this.$refs.form.validate()) {
        var emailValid = /.+@.+\..+/;
        var valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/;

        if (this.new_emai) {
          if (emailValid.test(this.new_email)) {
            if (this.new_password) {
              if (valid.test(this.new_password)) {
                this.password = this.new_password;
                console.log(this.new_password);
              } else {
                alert("invalid password");
              }
            } else {
              this.password = this.old_password;
            }
          } else {
            alert("invalid");
          }
        } else if (this.new_password && this.new_email) {
          if (
            valid.test(this.new_password) &&
            emailValid.test(this.new_email)
          ) {
            this.email = this.new_email;
            this.password = this.new_password;
            this.dialog = false;
            console.log(this.new_password);
            alert("Email and password updated");
            // sessionStorage.setItem("Email",this.email);
            this.closeDialog();
            var data = {
              email: sessionStorage.setItem("Email",this.email),
              newemail: this.email,
              newpassword: this.password
            };
            this.$store.dispatch("updateAsync", data);
          }
        } else {
          this.email = this.new_email;
          console.log(this.old_password);
          this.closeDialog();

          this.dialog = false;
          alert("Data update");
        }
      } else {
        alert("Input old password");
      }
    },
    closeDialog() {
      this.$refs.form.reset();
      this.dialog = false;
    },
    upload() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    edit(e) {
      e.preventDefault();
    }
  }
};
</script>