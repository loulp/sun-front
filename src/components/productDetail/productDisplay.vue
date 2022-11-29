<template>
  <div class="container">
    <div class="productDetailContainer">
      <div class="productMedia">
        <div class="mediaContainer">
          <div class="mainMedia">
            <img :src="mainMedia" />
          </div>
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

      & {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .mediaContainer {
        display: flex;
        flex-direction: row-reverse;

        .mainMedia {
          flex: 2;
          text-align: center;

          img {
            width: 90%;

            @media screen and (max-width: 660px) {
              height: auto;
              width: 100%;
            }
          }
        }

        .secondaryMediaContainer {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;

          gap: 10px;

          max-height: 85vh;
          overflow-y: scroll;

          &::-webkit-scrollbar {
            display: none;
          }

          & {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .mediaList {
            width: 40%;
            cursor: pointer;
            margin: 5px 0;

            @media screen and (max-width: 660px) {
              width: 25%;
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

      @media screen and (max-width: 1000px) {
        flex-direction: column;
        height: auto;
      }
    }

    @media screen and (max-width: 660px) {
      flex-direction: column;
    }
  }
}
</style>