const SET_LANGUAGE = (state, lang) => {
  state.language = lang;
};

const ADD_LOADED_LANGUAGE = (state, lang) => {
  state.loadedLanguages.push(lang);
};

export default {
  SET_LANGUAGE,
  ADD_LOADED_LANGUAGE,
};
