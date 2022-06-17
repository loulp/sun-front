import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import Cookies from 'js-cookie';

export default new Vuex.Store({
  state: {
    cart: [],
    collections: [],
    categories: [],
  },
  mutations: {
    addItemToCart(state, item) {
      const newItem = {
        id: item.product.id,
        nom: item.product.attributes.nom,
        description: item.product.attributes.description,
        prix: item.product.attributes.prix,
        media: item.product.attributes.photo.data[0].attributes.url,
        size: item.size,
      };

      state.cart.push(newItem);
      const json = JSON.stringify(state.cart);
      Cookies.set('SUNcart', json, {
        expires: 7,
        domain: process.env.VUE_APP_DOMAIN,
      });
    },
    removeItemFromCart(state, index) {
      state.cart.splice(index, 1);
      const json = JSON.stringify(state.cart);
      Cookies.set('SUNcart', json, {
        expires: 7,
        domain: process.env.VUE_APP_DOMAIN,
      });
    },
    fillCartOnPageLoad(state) {
      const existingCart = Cookies.get('SUNcart');
      if (existingCart) {
        const json = JSON.parse(existingCart);
        state.cart = json;
      }
    },
    updateStorage(state, token) {
      localStorage.setItem('auth_token', token);
      state.authToken = localStorage.getItem('auth_token');
    },
    fillCollections(state, collections) {
      state.collections = collections;
    },
    fillCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {},
  modules: {},
});
