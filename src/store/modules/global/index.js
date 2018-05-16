import Cookies from 'js-cookie';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  language: Cookies.get('language') || 'en',
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
