import Vue from 'vue';
import Vuex from 'vuex';

import actions from '@/store/modules/global/actions';
import getters from '@/store/modules/global/getters';
import mutations from '@/store/modules/global/mutations';

Vue.use(Vuex);

describe('Global Module Store', async () => {
  const store = new Vuex.Store({
    state: {
      language: '',
      languages: [{
        value: 'es',
        title: 'Español',
      }, {
        value: 'en',
        title: 'English',
      }],
      loadedLanguages: [],
    },
    mutations,
    getters,
    actions,
  });

  it('No debería de hacer nada sino se le pasa ningún idioma', () => {
    const lang = '';
    return store.dispatch('setLanguage', lang)
      .then(() => {
        expect(store.getters.language).toEqual('');
        expect(store.getters.languages[0]).toMatchObject({ value: 'es', title: 'Español' });
        expect(store.state.loadedLanguages).toHaveLength(0);
      });
  });

  it('Debería cargar y definir un idioma valido', () => {
    const lang = 'es';
    return store.dispatch('setLanguage', lang)
      .then(() => {
        expect(store.getters.language).toEqual('es');
        expect(store.getters.languages[0]).toMatchObject({ value: 'es', title: 'Español' });
        expect(store.state.loadedLanguages[0]).toEqual('es');
        expect(store.state.loadedLanguages).toHaveLength(1);
      });
  });

  it('No debería hacer nada si le pasamos el mismo idioma', () => {
    const lang = 'es';
    return store.dispatch('setLanguage', lang)
      .then(() => {
        expect(store.getters.language).toEqual('es');
        expect(store.state.loadedLanguages).toHaveLength(1);
      });
  });

  it('Debería cargar y definir un nuevo idioma valido', () => {
    const lang = 'en';
    return store.dispatch('setLanguage', lang)
      .then(() => {
        expect(store.getters.language).toEqual('en');
        expect(store.state.loadedLanguages[1]).toEqual('en');
        expect(store.state.loadedLanguages).toHaveLength(2);
      });
  });

  it('Debería definir un idioma valido previamente cargado sin volverlo a cargar', () => {
    const lang = 'es';
    return store.dispatch('setLanguage', lang)
      .then(() => {
        expect(store.getters.language).toEqual('es');
        expect(store.state.loadedLanguages[0]).toEqual('es');
        expect(store.state.loadedLanguages).toHaveLength(2);
      });
  });

  it('No debería hacer nada si le pasamos un idioma no definido', () => {
    const lang = 'it';
    return store.dispatch('setLanguage', lang)
      .then(() => {
        expect(store.getters.language).toEqual('es');
        expect(store.state.loadedLanguages).toHaveLength(2);
      });
  });
});
