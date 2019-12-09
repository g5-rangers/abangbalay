<template>
  <div id="app">
    <v-app id="inspire">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card elevation-2 class="custom-card-1">
            <v-container fluid class="card-content">
              <v-layout row wrap text-xs-center>
                <v-flex xs12>
                  <div>
                    <v-img id="img" height="200px" src="@/assets/images/rangie.png"></v-img>
                  </div>
                  <br />
                  <center>
                    <p class="subheading xs12"><strong>Rangie Laurente</strong></p>
                  </center>
                  <hr />
                  <center>
                    <p><strong>Project Manager</strong></p>
                    <v-text
                      div="dev"
                    >"Don't be pushed around by the fears in your mind.Be led by the dreams in your life."</v-text>
                  </center>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          <v-card elevation-2 class="custom-card-2">
            <v-container fluid class="card-content">
              <v-layout row wrap text-xs-center>
                <v-flex xs12>
                  <div>
                    <v-img id="img" height="200px" src="@/assets/images/madam.png"></v-img>
                  </div>
                  <br />
                  <center>
                    <p class="subheading xs12"><strong>Jeanilyn Mendoza</strong></p>
                  </center>
                  <hr />
                  <center>
                    <p><strong>Back End Developer</strong></p>
                    <v-text div="dev">"It's going to be hard but hard does not mean impossible."</v-text>
                  </center>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          <v-card elevation-2 class="custom-card-3">
            <v-container fluid class="card-content">
              <v-layout row wrap text-xs-center>
                <v-flex xs12>
                  <div>
                    <v-img id="img" height="200px" src="@/assets/images/ismis.jpg"></v-img>
                    <br />
                  </div>
                  <center>
                    <p class="subheading xs12"><strong>Judilyn But-anon</strong></p>
                  </center>
                  <hr />
                  <center>
                    <p><strong>Front End Developer</strong></p>
                    <v-text
                      div="dev"
                    >"Don't worry about failures, worry about the chances you miss when you don't even try."</v-text>
                  </center>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          <v-card elevation-2 class="custom-card-4">
            <v-container fluid class="card-content">
              <v-layout row wrap text-xs-center>
                <v-flex xs12>
                  <center>
                    <div>
                      <v-img id="img" height="200px" src="@/assets/images/jude.png"></v-img>
                    </div>
                  </center>
                  <br />
                  <center>
                    <p class="subheading xs12"><strong>Ma.Judelyn Cabalhao</strong></p>
                    <hr blue />
                    <p><strong>Front End Developer</strong></p>
                    <v-text
                      div="dev"
                    >"Make your life a masterpiece, imagine no limitations on what you can be, have or do."</v-text>
                  </center>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <center>
          <v-text class="title">
            G5-Rangers
            <br />We are the Passerelles Numeriques Scholars batch 2021.
          </v-text>
        </center>
      </v-layout>
      <div class="about">
        <center>
          <span class="misvis">Vision</span>
          <br />
          <span
            class="mean"
          >"To be the best and easiest web application who help migrants find boardinghouses."</span>
          <br />
          <br />
          <span class="misvis">Mission</span>
          <br />
          <span class="mean">"To help people to find safe and decent to stay in."</span>
        </center>
      </div>
    </v-app>
  </div>
</template>

<style>
.custom-card-1,
.custom-card-2,
.custom-card-3,
.custom-card-4 {
  width: 22%;
  margin: 0 1%;
  position: relative;
  float: left;
  top: 70px;
  left: 50px;
  height: 400px;
}
.title {
  font-size: 3px;
  position: absolute;
  left: 30%;
  top:70%;
 
}
</style>

<script>
export default {};
</script>