<template>
  <div class="container">
    <!-- <div class="collectionName">
      <img src="@/assets/sunray.png" alt="" class="titleIcon" />
      <h2>{{ collection.attributes.name }}</h2>
    </div> -->
    <div class="productDetailContainer">
      <div class="productMedia">
        <div>
          <img :src="mainMedia" class="mainMedia" />
          <div>
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
.container {
  .collectionName {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 15% auto 5% 5%;

    font-size: 24px;

    color: #707070;

    .titleIcon {
      width: 20px;
      height: 15px;
      margin-right: 2%;
    }
  }
  .productDetailContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    .productMedia {
      flex: 50%;
      width: 100%;
      overflow: hidden;

      .mainMedia {
        width: 100%;
        height: 90vh;
      }

      .mediaList {
        width: 10%;
        cursor: pointer;
      }
    }
    .productDetail {
      flex: 50%;
    }
  }
}
</style>