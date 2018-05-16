import Cookies from 'js-cookie';
import i18n from '@/locales';

const setLanguage = async ({ commit, state }, lang) => {
  // Compruebo si el idioma seleccionado
  // es distinto al definido.
  if (i18n.locale !== lang) {
    // Compruebo si el idioma seleccionado
    // se encuentra entre los idiomas disponibles
    if (state.languages.find(language => language.value === lang)) {
      // Compruebo si el idioma
      // se encuentra entre los idiomas cargados
      if (!state.loadedLanguages.includes(lang)) {
        const langLocale = await import(`@/locales/${lang}`);
        const elementLocale = await import(`element-ui/lib/locale/lang/${lang}`);

        const messages = {
          ...langLocale.default,
          ...elementLocale.default,
        };

        // Añado el nuevo idioma
        // a mi lista de idiomas cargados
        i18n.setLocaleMessage(lang, messages);
        commit('ADD_LOADED_LANGUAGE', lang);
      }

      // Defino el nuevo idioma
      Cookies.set('language', lang);
      i18n.locale = lang;
      commit('SET_LANGUAGE', lang);
    }
  }
};

export default {
  setLanguage,
};
