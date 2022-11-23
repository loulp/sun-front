import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    collections: [],
    categories: [],
    latestProducts: [],
    fav: [],
  },
  mutations: {
    addItemToCart(state, item) {
      const newItem = {
        id: item.product.id,
        nom: item.product.attributes.nom,
        prix: item.product.attributes.prix,
        categorie: item.product.attributes.category.data.attributes.type,
        media: item.product.attributes.photo.data[0].attributes.url,
        size: item.size,
        matiere: item.product.attributes.matiere,
        goldColor: item.goldColor,
      };

      state.cart.push(newItem);

      const json = JSON.stringify(state.cart);

      localStorage.setItem('SUNcart', json);
    },
    removeItemFromCart(state, index) {
      state.cart.splice(index, 1);

      const json = JSON.stringify(state.cart);

      localStorage.setItem('SUNcart', json);
    },
    fillCartOnPageLoad(state) {
      const existingCart = localStorage.getItem('SUNcart');
      if (existingCart) {
        const json = JSON.parse(existingCart);
        state.cart = json;
      }
    },
    emptyCart(state) {
      const existingCart = localStorage.getItem('SUNcart');
      if (existingCart) {
        localStorage.removeItem('SUNcart');
        state.cart = [];
      }
    },

    addItemToFav(state, item) {
      const newItem = {
        id: item.product.id,
        nom: item.product.attributes.nom,
        categorie: item.product.attributes.category.data.attributes.type,
        collection: item.product.attributes.collection.data.attributes.name,
        media: item.product.attributes.photo.data[0].attributes.url,
        matiere: item.product.attributes.matiere,
      };

      state.fav.push(newItem);

      const json = JSON.stringify(state.fav);

      localStorage.setItem('SUNfav', json);
    },
    removeItemFromFav(state, id) {
      let favIndex = state.fav.findIndex((item) => item.id === id);
      state.fav.splice(favIndex, 1);

      const json = JSON.stringify(state.fav);

      localStorage.setItem('SUNfav', json);
    },
    fillFavOnPageLoad(state) {
      const existingFav = localStorage.getItem('SUNfav');
      if (existingFav) {
        const json = JSON.parse(existingFav);
        state.fav = json;
      }
    },

    fillCollections(state, collections) {
      state.collections = collections;
    },
    fillCategories(state, categories) {
      state.categories = categories;
    },
    fillLatestProducts(state, latestProducts) {
      state.latestProducts = latestProducts;
    },
  },
  actions: {},
  modules: {},
});
