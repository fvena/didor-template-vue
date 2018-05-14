<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      language: 'global/language',
    }),
  },
  methods: {
    ...mapActions({
      setLanguage: 'global/setLanguage',
    }),
    updateLanguage() {
      this.setLanguage(this.language);
    },
  },
  beforeMount() {
    this.updateLanguage();
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
