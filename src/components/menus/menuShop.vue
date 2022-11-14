<template>
  <div class="flexContainer">
    <div class="menu">
      <div class="menuDiv">
        <h3>Collections</h3>
        <span v-if="collections.length === 0 && !loadingCollections"
          >Pas de collection disponible</span
        >
        <ul v-if="collections.length > 0 && !loadingCollections">
          <li v-for="collection in collections" :key="collection.index">
            <!-- <div
              @mouseover="changeImage(collection.img)"
              @mouseleave="$refs.imageSide.style.backgroundImage = 'none'"
              @click="$emit('hideMenu')"
            > -->
            <div @click="$emit('hideMenu')">
              <router-link
                class="menuLink"
                :to="{
                  name: 'BoutiqueColl',
                  params: { id: collection.id },
                }"
                >{{ collection.name | capitalize }}</router-link
              >
            </div>
          </li>
        </ul>
        <spinner v-if="loadingCollections" class="spinner" />
      </div>

      <div class="menuDiv">
        <h3>Catégories</h3>
        <span v-if="categories.length === 0 && !loadingCategories"
          >Pas de categorie disponible</span
        >
        <ul v-if="categories.length > 0 && !loadingCategories">
          <li v-for="category in categories" :key="category.index">
            <div @click="$emit('hideMenu')">
              <!-- <div
              @mouseover="changeImage(category.img)"
              @mouseleave="$refs.imageSide.style.backgroundImage = 'none'"
              @click="$emit('hideMenu')"
            > -->
              <router-link
                class="menuLink"
                :to="{
                  name: 'BoutiqueCat',
                  params: { id: category.id },
                }"
                >{{ category.type | capitalize }}</router-link
              >
            </div>
          </li>
        </ul>
        <spinner v-if="loadingCategories" class="spinner" />
      </div>
    </div>
    <div class="image" ref="imageSide" @click="$emit('hideMenu')"></div>
  </div>
</template>

<script>
import collectionService from "@/shared/services/collections.services.js";
import spinner from "../../shared/components/spinner.vue";

export default {
  components: { spinner },
  data() {
    return {
      collections: [],
      categories: [],
      loadingCategories: false,
      loadingCollections: false,
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
    getCollections() {
      this.loadingCollections = !this.loadingCollections;
      collectionService.getCollections().then(
        (res) => {
          res.data.data.forEach((el) => {
            const collection = {
              id: el.id,
              name: el.attributes.name,
              img: el.attributes.img.data.attributes.url,
            };
            this.collections.push(collection);
          });
          this.$store.commit("fillCollections", this.collections);
          this.loadingCollections = !this.loadingCollections;
        },
        (err) => {
          this.loadingCollections = !this.loadingCollections;
          console.log(err);
        }
      );
    },

    getCategories() {
      this.loadingCategories = !this.loadingCategories;
      collectionService.getCategories().then(
        (res) => {
          res.data.data.forEach((el) => {
            const category = {
              id: el.id,
              type: el.attributes.type,
              img: el.attributes.img.data.attributes.url,
            };
            this.categories.push(category);
          });
          this.$store.commit("fillCategories", this.categories);
          this.loadingCategories = !this.loadingCategories;
        },
        (err) => {
          this.loadingCategories = !this.loadingCategories;
          console.log(err);
        }
      );
    },

    // changeImage(url) {
    //   this.$refs.imageSide.style.backgroundImage = `url(${url})`;
    // },
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

<style lang="scss" scoped>
@import "@/shared/styles/variables.scss";

.flexContainer {
  height: 90vh;
  width: 100%;

  display: flex;
  flex-direction: row;

  .menu {
    flex: 60%;
    background-color: white;

    overflow-y: scroll;
    padding-left: 5%;
    padding-top: 3%;

    .menuDiv {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      color: $fontColor;

      h3 {
        flex: 40%;
        font-size: 24px;
        text-align: center;
      }

      ul {
        flex: 60%;
        list-style: none;

        li {
          div {
            padding: 2% 0;
            width: fit-content;
          }

          .menuLink {
            text-decoration: none;
            color: $fontColor;
            font-size: 20px;
          }

          & :hover {
            padding-left: 15px;

            transition: padding-left ease 0.5s;
          }
        }

        & :hover {
          list-style: url("../../assets/liTEST.jpg");
        }
      }

      span {
        flex: 60%;
      }
      .spinner {
        flex: 60%;
        align-self: center;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }

  .image {
    flex: 40%;

    background-position: center;
    background-size: cover;
    transition: background-image 0.3s ease-in-out;
  }
}
</style>