<template>
  <div class="mobileMenuContainer">
    <span @click="showMenu('HOUSE')" class="menuItem">LA MAISON</span>
    <div class="menuItem" v-if="currentMenu === 'HOUSE'">
      <ul>
        <li>
          <router-link
            class="menuLink"
            :to="{
              name: 'history',
            }"
            >L'histoire</router-link
          >
        </li>
        <li>
          <router-link
            class="menuLink"
            :to="{
              name: 'savoir_faire',
            }"
            >Le savoir-faire</router-link
          >
        </li>
        <li>
          <router-link
            class="menuLink"
            :to="{
              name: 'inspiration',
            }"
            >L'inspiration</router-link
          >
        </li>
      </ul>
    </div>
    <span @click="showMenu('SHOP')" class="menuItem">JOAILLERIE</span>
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
    <span @click="redirectTo('SUR-MESURE')" class="menuItem">SUR-MESURE</span>
    <!-- <span @click="showMenu('')" class="menuItem">GUIDE</span> -->
    <span @click="redirectTo('CONTACT')" class="menuItem">CONTACTEZ NOUS</span>
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

    redirectTo(page) {
      switch (page) {
        case "CONTACT":
          this.$router.push({
            name: "Contact",
          });
          break;
        case "SUR-MESURE":
          this.$router.push({
            name: "sur-mesure",
          });
          break;

        default:
          console.log("An error occured");
          break;
      }
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
@import "@/shared/styles/variables.scss";

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
    color: $fontColor;

    h3 {
      font-size: 16px;
    }

    ul {
      margin-top: 0;
      list-style: url("../../assets/liStar.jpg");
    }

    .menuLink {
      text-decoration: none;
      color: $fontColor;
      font-size: 14px;
    }
  }
}
</style>