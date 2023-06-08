Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa' || 'md' || 'mdi',
  },
  theme: {
    themes: {
      dark: {
        background: '#11111',
      },
      light: {},
    },
  },
});
