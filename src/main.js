import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './shared/store';
import Vuelidate from 'vuelidate';
import VueMeta from 'vue-meta';

Vue.use(Vuelidate);
Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
