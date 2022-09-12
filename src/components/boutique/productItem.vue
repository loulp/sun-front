<template>
  <div
    v-if="product"
    class="productItem"
    @click="toProductView()"
    @mouseenter="mainMedia = product.attributes.photo.data[1].attributes.url"
    @mouseleave="mainMedia = product.attributes.photo.data[0].attributes.url"
  >
    <div class="productPresentation">
      <div class="imgContainer">
        <img class="productMedia" :src="mainMedia" alt="" />
      </div>
      <div class="productDescription">
        <p>{{ product.attributes.nom }}</p>
        <p>{{ product.attributes.prix }}€</p>
      </div>
    </div>
    <div class="relevantContainer">
      <img
        v-for="(media, index) in product.attributes.photo.data"
        :key="index"
        :src="media.attributes.url"
        alt=""
        class="relevantItem"
        @mouseenter="mainMedia = media.attributes.url"
        @mouseleave="
          mainMedia = product.attributes.photo.data[0].attributes.url
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: null,
  },

  data() {
    return {
      mainMedia: this.product.attributes.photo.data[0].attributes.url,
    };
  },

  mounted() {
    console.log("debug item");
    console.log(this.product);
  },

  methods: {
    toProductView() {
      this.$router.push({
        name: "productDetail",
        params: { id: this.product.id },
      });
    },

    scrollCarousel(side) {
      const self = this;
      const carousel = document.getElementsByClassName("productList")[0];
      const scrollLength = 25;

      carousel.style.scrollBehavior = "smooth";
      if (side === "LEFT") {
        carousel.scrollLeft = carousel.scrollLeft - scrollLength;
      } else {
        carousel.scrollLeft = carousel.scrollLeft + scrollLength;
      }

      this.scrolling = window.setTimeout(function () {
        self.scrollCarousel(side);
      }, 100);
    },

    stopScroll() {
      window.clearTimeout(this.scrolling);
    },
  },
};
</script>

<style lang="scss" scoped>
.productItem {
  margin: 1%;
  flex-basis: 21%;
  cursor: pointer;

  .productPresentation {
    position: relative;

    .imgContainer {
      width: 100%;
      height: 60vh;

      .productMedia {
        width: 100%;
        height: 100%;
      }
    }

    .productDescription {
      visibility: hidden;
      width: 100%;
      height: 0;
      transition: all ease-in-out 0.5s;

      background-color: rgba(239, 222, 189, 0.5);

      bottom: 0;
      left: 0;
      position: absolute;

      p {
        margin-left: 2%;
        font-size: 0;
        color: black;
      }

      @media screen and (max-width: 660px) {
        visibility: visible;
        width: 100%;
      }
    }

    @media screen and (max-width: 660px) {
      min-width: 66%;

      .imgContainer {
        height: auto;
      }
    }
  }

  .relevantContainer {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;

    visibility: hidden;

    .relevantItem {
      cursor: pointer;

      flex-basis: 20%;
      height: 50px;
      width: 50px;

      margin: 5px 5px 0 0;
    }
  }

  &:hover {
    .relevantContainer {
      visibility: visible;
      transition: all ease-in-out 3s;
    }

    .productPresentation .productDescription {
      visibility: visible;
      height: 25%;
      transition: all ease-in-out 1s;
    }

    .productPresentation .productDescription p {
      font-size: inherit;
      transition: all ease-in-out 1s;
    }
  }
}
</style>