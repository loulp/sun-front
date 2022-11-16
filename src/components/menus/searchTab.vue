<template>
  <div class="flexContainer">
    <div class="searchContainer">
      <div class="inputContainer">
        <label for="test">Votre recherche :&nbsp;&nbsp;</label>
        <input
          class="searchInput"
          type="text"
          @keyup="search()"
          v-model="searchInput"
          name="test"
        />
      </div>
      <p v-if="searchResults.length < 1 && hasSearched">
        Aucun résultat n'a été trouvé
      </p>
      <search-result-item
        v-for="(res, index) in searchResults"
        :key="index"
        :searchResult="res"
      />
    </div>
    <div class="image" ref="imageSide" @click="$emit('hideMenu')"></div>
  </div>
</template>

<script>
import productsServices from "../../shared/services/products.services";
import SearchResultItem from "./searchResultItem.vue";
export default {
  components: {
    SearchResultItem,
  },

  data() {
    return {
      searchInput: null,
      searchResults: [],
      hasSearched: false,
    };
  },

  methods: {
    search() {
      productsServices.getSearchResult(this.searchInput).then(
        (res) => {
          this.searchResults = res.data.bijoux;
          this.hasSearched = true;
        },
        (err) => {
          console.log(err);
        }
      );
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

  .inputContainer {
    .searchInput {
      border: none;
      border-bottom: 1px solid $fontColor;
      color: $fontColor;

      &:focus {
        outline: none;
        border-bottom: 1px solid $mainColor;
      }
    }
  }

  .searchContainer {
    flex: 40%;
    background-color: white;

    overflow-y: scroll;
    padding-left: 3%;
    padding-top: 3%;

    border-right: 0.1px solid #0101010d;

    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    @media screen and (max-width: 660px) {
      width: 100%;
    }
  }

  .image {
    flex: 40%;

    background-position: center;
    background-size: cover;
    // background-image: url("../../assets/housebanner.jpg");
    transition: background-image 0.3s ease-in-out;

    @media screen and (max-width: 660px) {
      display: none;
    }
  }
}
</style>