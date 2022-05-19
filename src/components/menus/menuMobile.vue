<template>
  <div class="mobileMenuContainer">
    <span @click="showMenu('HOUSE')" class="menuItem">La Maison</span>
    <div class="menuItem" v-if="currentMenu === 'HOUSE'">
      <router-link
        class="menuLink"
        :to="{
          name: 'creatrice',
        }"
        >La créatrice</router-link
      >
      <router-link
        class="menuLink"
        :to="{
          name: 'savoir_faire',
        }"
        >Savoir faire</router-link
      >
      <router-link
        class="menuLink"
        :to="{
          name: 'inspiration',
        }"
        >inspiration</router-link
      >
    </div>
    <span @click="showMenu('')" class="menuItem">Joaillerie</span>
    <span @click="showMenu('SHOP')" class="menuItem">Boutique</span>
    <div class="menuItem" v-if="currentMenu === 'SHOP'">
      <h3>Collections</h3>
      <span v-if="collections.length === 0">Pas de collection disponible</span>
      <ul v-if="collections.length > 0">
        <li v-for="collection in collections" :key="collection.index">
          <router-link
            class="menuLink"
            :to="{
              name: 'BoutiqueColl',
              params: { id: collection.id },
            }"
            >{{ collection.name | capitalize }}</router-link
          >
        </li>
      </ul>
      <h3>Catégories</h3>
      <span v-if="categories.length === 0">Pas de categorie disponible</span>
      <ul v-if="categories.length > 0">
        <li v-for="category in categories" :key="category.index">
          <router-link
            class="menuLink"
            :to="{
              name: 'BoutiqueCat',
              params: { id: category.id },
            }"
            >{{ category.type | capitalize }}</router-link
          >
        </li>
      </ul>
    </div>
    <span @click="showMenu('')" class="menuItem">Contactez nous</span>
  </div>
</template>

<script>
import collectionService from "@/shared/services/collections.services.js";

export default {
  data() {
    return {
      currentMenu: null,
      collections: [],
      categories: [],
    };
  },

  mounted() {
    if (
      this.$store.state.categories.length != 0 ||
      this.$store.state.collections.length != 0
    ) {
      this.collections = this.$store.state.collections;
      this.categories = this.$store.state.categories;
    } else {
      this.getCollections();
      this.getCategories();
    }
  },

  methods: {
    showMenu(menu) {
      if (this.currentMenu === null) {
        this.currentMenu = menu;
      } else if (this.currentMenu != null && this.currentMenu != menu) {
        this.currentMenu = menu;
      } else {
        this.currentMenu = null;
      }
    },

    getCollections() {
      collectionService.getCollections().then(
        (res) => {
          res.data.data.forEach((el) => {
            const collection = {
              id: el.id,
              name: el.attributes.name,
            };
            this.collections.push(collection);
          });
          this.$store.commit("fillCollections", this.collections);
        },
        (err) => {
          console.log(err);
        }
      );
    },

    getCategories() {
      collectionService.getCategories().then((res) => {
        res.data.data.forEach((el) => {
          const category = {
            id: el.id,
            type: el.attributes.type,
          };
          this.categories.push(category);
        });
        this.$store.commit("fillCategories", this.categories);
      });
    },
  },

  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped lang="scss">
.mobileMenuContainer {
  width: 100vw;
  height: 100vh;
  background-color: white;

  display: flex;
  flex-direction: column;
  font-weight: bold;

  * {
    margin: 3% 5%;
  }

  span {
    font-size: 18px;
  }

  .menuItem {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 16px;
    }

    .menuLink {
      text-decoration: none;
      color: black;
      font-size: 14px;
    }
  }
}
</style>