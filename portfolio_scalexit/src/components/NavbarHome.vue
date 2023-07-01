<template>
  <v-app-bar app color="#111111" dark flat class="px-8">
    <v-img src="../../public/pictures/LexsIT_Logo_Trans.png" contain max-height="60" onclick="" max-width="60"></v-img>

    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('about')">About</v-btn>
    <v-btn text @click="scroll('projects')">Projects</v-btn>
    <v-btn text @click="scroll('contact')">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style></style>
