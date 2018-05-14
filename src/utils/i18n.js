import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '@/locales/en';
import es from '@/locales/es';
import enLocale from 'element-ui/lib/locale/lang/en';
import esLocale from 'element-ui/lib/locale/lang/es';

Vue.use(VueI18n);

const messages = {
  en: {
    ...en,
    ...enLocale,
  },
  es: {
    ...es,
    ...esLocale,
  },
};

export default new VueI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages,
});
