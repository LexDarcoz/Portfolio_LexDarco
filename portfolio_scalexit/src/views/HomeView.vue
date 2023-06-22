<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }"
    ><NavbarHome />

    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img src="../../public/pictures/LexsIT_logo_transparant.png" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="red--text text--darken-4 top">Hello I'm Alexander Schatteman</h5>
          <h1 class="white--text">Software developer</h1>
          <p class="grey--text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, nihil! Enim, sequi. Quas eveniet consequuntur ea pariatur dolorum vitae dolorem odio quod, dicta beatae sapiente, culpa
            tempora praesentium ducimus similique.
          </p>
          <v-btn tile color="#A7121D" dark>about me</v-btn>
        </v-col>
        <v-col cols="12" class="padd">
          <div class="first" id="projects">
            <v-row>
              <v-col cols="12">
                <div class="child bgColor1">
                  <v-icon color="#A7121D" x-large class="ml-3">mdi-palette-swatch</v-icon>
                  <h3 class="white--text ml-3mt-4">UI Design</h3>
                  <p class="grey--text ml-3 mt-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </p>
                  <v-btn color="#A7121D" dark text
                    >know more
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor2">
                  <v-icon x-large class="ml-3" dark>mdi-shopping</v-icon>
                  <h3 class="white--text ml-3 mt-4">Product Design</h3>
                  <p class="grey--text ml-3 mt-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </p>
                  <v-btn color="#A7121D" dark text
                    >know more
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import NavbarHome from '../components/NavbarHome.vue';
export default {
  name: 'HomeLanding',

  components: {
    NavbarHome,
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
  background: #1e1e1e;
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
  height: 250px;
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
.child1 {
  display: inline-block;
  vertical-align: middle;
  width: 245px;
}

.mright {
  margin-right: 8px;
}
.mBottom {
  margin-bottom: 8px;
}

.padding {
  padding: 8px 0px;
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
