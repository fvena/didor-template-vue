import Cookies from 'js-cookie';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  language: Cookies.get('language') || 'es',
  languages: [{
    value: 'es',
    title: 'Español',
  }, {
    value: 'en',
    title: 'English',
  }],
  loadedLanguages: [],
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
