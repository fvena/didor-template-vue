<template lang="pug">
  #app
    router-view
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

<style lang="scss" scoped>

</style>
