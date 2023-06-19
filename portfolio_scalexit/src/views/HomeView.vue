<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }"
    ><NavbarHome />

    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img src=""></v-img>
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
