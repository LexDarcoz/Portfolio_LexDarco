import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import LexsitLogo from '@/components/LexsitLogo.vue';
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa' || 'md' || 'mdi',
    values: {
      custom: {
        component: LexsitLogo,
      },
    },
  },
  theme: {
    themes: {
      dark: {
        background: '#111111',
      },

      light: {
        background: '#111111',
      },
    },
  },
});
