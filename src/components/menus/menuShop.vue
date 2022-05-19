<template>
  <div class="flexContainer">
    <div class="menu">
      <div class="menuDiv">
        <h3>Collections</h3>
        <span v-if="collections.length === 0"
          >Pas de collection disponible</span
        >
        <ul v-if="collections.length > 0">
          <li v-for="collection in collections" :key="collection.index">
            <div
              @mouseover="changeImage(collection.img)"
              @mouseleave="$refs.imageSide.style.backgroundImage = 'none'"
              @click="$emit('hideMenu')"
            >
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
      </div>

      <div class="menuDiv">
        <h3>Catégories</h3>
        <span v-if="categories.length === 0">Pas de categorie disponible</span>
        <ul v-if="categories.length > 0">
          <li v-for="category in categories" :key="category.index">
            <div
              @mouseover="changeImage(category.img)"
              @mouseleave="$refs.imageSide.style.backgroundImage = 'none'"
              @click="$emit('hideMenu')"
            >
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
      </div>
    </div>
    <div class="image" ref="imageSide" @click="$emit('hideMenu')"></div>
  </div>
</template>

<script>
import collectionService from "@/shared/services/collections.services.js";

export default {
  data() {
    return {
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
    getCollections() {
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
            img: el.attributes.img.data.attributes.url,
          };
          this.categories.push(category);
        });
        this.$store.commit("fillCategories", this.categories);
      });
    },

    changeImage(url) {
      this.$refs.imageSide.style.backgroundImage = `url(${url})`;
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

<style lang="scss" scoped>
@import "@/shared/styles/variables.scss";

.flexContainer {
  height: calc(100vh - #{$headerHeight});
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
            color: black;
            font-size: 20px;
          }

          & :hover {
            padding-left: 15px;

            transition: padding-left ease 0.5s;
          }
        }

        & :hover {
          list-style: url("../../assets/favIcon.svg");
        }
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