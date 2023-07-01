<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }"
    ><NavbarHome />
    <v-container fluid>
      <v-row id="home">
        <v-col cols="12">
          <v-img src="../../public/pictures/LexsIT_logo_transparant.png" contain max-height="500"></v-img>
        </v-col>
        <!-- ABOUT SECTION -->
        <v-col cols="12" class="center">
          <h4 class="red--text text--darken-4">Software developer</h4>
          <h1 class="white--text">Hello I'm Alexander Schatteman</h1>
          <p class="grey--text" id="about">
            👋 Hey there! I'm Alexander Schatteman, <br />
            a software developer fueled by passion and innovation.
          </p>
          <v-btn tile color="#A7121D" dark> about me </v-btn>
        </v-col>
        <v-col cols="12" class="padd">
          <div class="first">
            <v-col cols="12">
              <div class="child bgColor1">
                <v-icon color="#A7121D" x-large class="ml-3">mdi-react</v-icon>
                <h3 class="white--text ml-3 mt-4">Soft skills</h3>
                <p class="grey--text ml-3 mt-6">Effective communication is crucial for collaboration and teamwork.</p>
                <v-btn color="#A7121D" dark text>
                  know more
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>

              <div class="child bgColor2">
                <v-icon color="white" x-large class="ml-3">mdi-code-braces</v-icon>
                <h3 class="white--text ml-3 mt-4">Programming skills</h3>
                <p class="grey--text ml-3 mt-6">Click here to find out what programming languages I am good at! <br /></p>
                <v-btn color="" dark text>
                  know more
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
              <div class="child bgColor1">
                <v-icon color="#A7121D" x-large class="ml-3">mdi-book-open-page-variant</v-icon>
                <h3 class="white--text ml-3 mt-4">My education</h3>
                <p class="grey--text ml-3 mt-6">I am currently studying for my bachelor's degree in applied informatics.</p>
                <v-btn color="#A7121D" dark text>
                  know more
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-col>

            <!-- ADDITIONAL INFO SECTION -->
            <v-col cols="12" class="mt-10">
              <div class="child1">
                <h1 class="red--text text--darken-4 mt-4 number">3rd</h1>
                <h3 class="white--text mt-4">Year Of Bachelor In Applied Informatics</h3>
              </div>
              <div class="child2 mRight">
                <v-row>
                  <v-col cols="12" class="childcol">
                    <div class="child2 mButton padding bgColor1">
                      <h1 class="red--text text--darken-4">2+</h1>
                      <p class="grey--text">Clients</p>
                    </div>
                  </v-col>
                  <v-col cols="12" class="childcol">
                    <div class="child2 padding bgColor1">
                      <h1 class="red--text text--darken-4">08</h1>
                      <p class="grey--text">Completed Projects</p>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div class="child2">
                <v-row>
                  <v-col cols="12" class="childcol">
                    <div class="child2 mButton padding bgColor1">
                      <h1 class="red--text text--darken-4">3</h1>
                      <p class="grey--text">Year experience</p>
                    </div>
                  </v-col>
                  <v-col cols="12" class="childcol">
                    <div class="child2 padding bgColor1" id="projects">
                      <h1 class="red--text text--darken-4">03</h1>
                      <p class="grey--text">Achievements</p>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </div>
        </v-col>

        <!-- PROJECTS SECTION -->
        <v-col md="3" offset-md="3" style="margin-top: 50px">
          <h4 class="white--text">FEATURED PROJECTS</h4>
          <p class="grey--text">Here you can find all my past and future projects!</p>
        </v-col>
        <v-col md="3" class="text-end" style="margin-top: 50px">
          <v-btn tile color="#A7121D" dark> View All </v-btn>
        </v-col>

        <!-- DELAWARE PROJECT APP IMAGE -->
        <v-col md="3" offset-md="3">
          <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
            <v-img src="/public/pictures/Projects/GymderLogo.jpg" contain max-height=""></v-img>
          </v-card>
        </v-col>

        <!-- DELAWARE PROJECT WEB IMAGE -->
        <v-col md="3">
          <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
            <v-img src="2.png" contain max-height=""></v-img>
          </v-card>
        </v-col>

        <!-- DELAWARE PROJECT -->
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="ml-n4"> Delaware b2b application</v-btn><br />
          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>

        <!-- DELAWARE PROJECT -->
        <v-col md="3">
          <v-btn color="white" dark text class="ml-n4"> Delaware b2b webapplication </v-btn><br />
          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>

        <!-- GYMDER PROJECT -->
        <v-col md="3" offset-md="3">
          <v-card class="" outlined tile height="250px" color="#1E1E1E">
            <v-img src="../../public/pictures/Projects/GymderLogo.jpg" contain></v-img>
          </v-card>
        </v-col>
        <!-- LIBRARY PROJECT -->
        <v-col md="3">
          <v-card class="" outlined tile height="250px" color="#1E1E1E">
            <v-img src="../../public/pictures/Projects/LibraryApp Picture.png" contain max-height="250px" min-width="250px"></v-img>
          </v-card>
        </v-col>

        <!-- GYMDER PROJECT -->
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="ml-n4"> Gymder </v-btn><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>

        <!-- LIBRARY PROJECT -->
        <v-col md="3">
          <v-btn color="white" dark text class="ml-n4"> Library app</v-btn><br />
          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>

        <!-- CONTACT SECTION -->
        <v-col cols="12" class="padd topInverse">
          <div class="second">
            <div class="secondchild1" id="contact">
              <v-row>
                <v-col cols="7">
                  <h1 class="white--text">Let's work together on your next project</h1>
                  <p class="grey--text">Click this link to send me an email directly!</p>
                </v-col>
                <v-col cols="5">
                  <a href="mailto:alexander.lexsit@gmail.com"><v-btn tile color="#A7121D" dark class="mt-16"> Contact </v-btn></a>
                </v-col>
              </v-row>
            </div>
          </div>
          <v-toolbar class="topToolbar" color="#111111" dark flat>
            <div style="position: absolute; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center">
              <v-btn text @click="scroll('home')">Home</v-btn>
              <v-btn text @click="scroll('about')">About</v-btn>
              <v-btn text @click="scroll('projects')">Projects</v-btn>
              <v-btn text @click="scroll('contact')">Contact</v-btn>
            </div>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>

    <FooterHome />
  </v-app>
</template>

<script>
import NavbarHome from '../components/NavbarHome.vue';
import FooterHome from '../components/FooterHome.vue';

export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: 'smooth' });
    },
  },
  name: 'HomeLanding',
  components: {
    NavbarHome,
    FooterHome,
  },
};
</script>
<style scoped>
.top {
  margin-top: 180px;
}
.topInverse {
  margin-top: -250px;
}
.topToolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 100%;
  height: 610px;
  background: linear-gradient(to right, #181818, #181818 50%, #111111 50%, #111111 50%);
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
  min-width: 280px;
  max-width: 280px;
  min-height: 320px;
  max-height: 320px;
}
.center {
  text-align: center;
  font-size: larger;
  padding: 2rem 2rem;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #ce1d2a;
}

.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}

.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>
