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
        <p class="name">{{ product.attributes.nom }}</p>
        <p>{{ product.attributes.matiere }}</p>
        <p>
          {{
            calculPrice(
              product.attributes.prix,
              product.attributes.category.data.attributes.type
            )
          }}€
        </p>
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

  methods: {
    calculPrice(prix, type) {
      if (type === "Boucle d'Oreille") {
        return prix * 2;
      } else {
        return prix;
      }
    },
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
  width: 25%;
  cursor: pointer;

  .productPresentation {
    position: relative;

    .imgContainer {
      width: 100%;
      max-height: 435px;
      overflow: hidden;

      .productMedia {
        width: 100%;
      }

      @media screen and (min-width: 1440px) {
        max-height: 500px;
      }
      @media screen and (min-width: 1800px) {
        max-height: 650px;
      }
    }

    .productDescription {
      visibility: hidden;
      width: 100%;
      height: 0;
      transition: all ease-in-out 0.5s;

      background-color: rgba(255, 255, 255, 0.5);

      bottom: 0;
      left: 0;
      position: absolute;

      p {
        opacity: 0;
        margin-left: 2%;
        font-size: 16px;
      }

      .name {
        font-size: 18px;
        font-weight: bold;
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
    width: fit-content;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    visibility: hidden;

    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

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
      height: 30%;
      transition: all ease-in-out 1s;
    }

    .productPresentation .productDescription p {
      opacity: 1;
      transition: all ease-in-out 1.5s;
    }
  }

  @media screen and (max-width: 660px) {
    width: 75%;
  }
}
</style>