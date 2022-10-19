<template>
  <div class="container">
    <div class="productDetailContainer">
      <div class="productMedia">
        <div class="mediaContainer">
          <img :src="mainMedia" class="mainMedia" />
          <div class="secondaryMediaContainer">
            <img
              class="mediaList"
              v-for="img in medias"
              :key="img.index"
              :src="img"
              alt=""
              @click="changeMainMedia(img)"
            />
          </div>
        </div>
      </div>
      <div class="productDetail">
        <product-presentation :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductPresentation from "./productPresentation.vue";

export default {
  components: {
    ProductPresentation,
  },

  props: {
    product: null,
  },

  data() {
    return {
      medias: [],
      mainMedia: null,
      collection: this.product.attributes.collection.data,
    };
  },

  mounted() {
    this.fillMedia();
  },

  methods: {
    fillMedia() {
      this.product.attributes.photo.data.forEach((img) => {
        this.medias.push(img.attributes.url);
      });
      this.mainMedia = this.medias[0];
    },

    changeMainMedia(url) {
      this.mainMedia = url;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.container {
  .productDetailContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    .productMedia {
      flex: 50%;
      width: 100%;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      .mediaContainer {
        display: flex;
        flex-direction: row-reverse;
        height: 85vh;

        .mainMedia {
          width: 66%;

          @media screen and (max-width: 660px) {
            height: auto;
            width: 100%;
          }
        }

        .secondaryMediaContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 33%;

          .mediaList {
            width: 40%;
            cursor: pointer;
            margin: 5px 0;

            @media screen and (max-width: 660px) {
              width: 50%;
            }
          }
          @media screen and (max-width: 660px) {
            flex-direction: row;
          }
        }

        @media screen and (max-width: 660px) {
          flex-direction: column;
          height: 100%;
        }
      }
    }
    .productDetail {
      height: calc(100vh - #{$headerHeight});
      flex: 50%;
    }

    @media screen and (max-width: 660px) {
      flex-direction: column;
    }
  }
}
</style>