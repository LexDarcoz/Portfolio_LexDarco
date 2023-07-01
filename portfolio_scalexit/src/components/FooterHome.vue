<template>
  <v-footer dark padless
    ><v-card flat tile class="black white--text py-5 px-5 text-center" width="100%"
      ><v-row>
        <v-col cols="12" sm="4"
          ><v-card-text class="white--text pt-2"
            ><v-btn icon> <v-icon color="#A7121D">Home</v-icon> </v-btn></v-card-text
          ></v-col
        >
        <v-col cols="12" sm="4"
          ><v-card-text class="pt-2"
            ><v-btn v-for="icon in icons" :key="icon" class="mx-1 white--text" icon>
              <a :href="icon.link"
                ><v-icon size="24px" class="white--text"> {{ icon.name }}</v-icon></a
              >
            </v-btn></v-card-text
          ></v-col
        >
        <v-col cols="12" sm="4"
          ><v-card-text class="pt-2"
            ><v-btn class="mx-1 white--text" icon>
              <v-icon color="#A7121D"> mdi-heart </v-icon>
            </v-btn>
            Created by Alexander Schatteman
          </v-card-text></v-col
        >
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { name: 'mdi-facebook', link: 'https://www.facebook.com/profile.php?id=100009950086924' },
      { name: 'mdi-instagram', link: 'https://www.instagram.com/alexander.schatteman/' },
      { name: 'mdi-linkedin', link: 'https://www.linkedin.com/in/alexander-schatteman-a20624213/' },
      { name: 'mdi-github', link: 'https://github.com/LexDarcoz' },
    ],
  }),
};
</script>

<style></style>
