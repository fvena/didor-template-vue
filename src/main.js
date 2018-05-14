import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App';
import router from './router';
import i18n from './utils/i18n';

import './stylesheets/app.scss';

Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>',
});
