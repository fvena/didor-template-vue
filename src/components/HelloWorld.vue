<template src="./HellowWorld.pug" lang="pug"></template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    ...mapGetters({
      languages: 'global/languages',
    }),
  },
  methods: {
    ...mapActions({
      setLanguage: 'global/setLanguage',
    }),
    updateLanguage(language) {
      this.setLanguage(language);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./HelloWorld.scss" lang="scss" scoped></style>
