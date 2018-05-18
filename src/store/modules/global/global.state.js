import Cookies from 'js-cookie';

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

export default state;
