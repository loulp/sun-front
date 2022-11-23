<template>
  <div class="container">
    <div class="titleContainer">
      <h2>
        Découvrez les <br />
        <span>NOUVELLES CREATIONS</span>
      </h2>
    </div>
    <div v-if="products.length > 0" class="carouselContainer">
      <img
        @mouseover="scrollCarousel('LEFT')"
        @mouseout="stopScroll"
        src="@/assets/control_left.svg"
        alt=""
        class="controls left"
      />
      <img
        @mouseover="scrollCarousel('RIGHT')"
        @mouseout="stopScroll"
        src="@/assets/control_right.svg"
        alt=""
        class="controls right"
      />
      <div class="productList">
        <div
          class="productItem"
          v-for="(product, index) in products"
          :key="index"
          @click="toProductView(product.id)"
          @mouseenter="product.mainMedia = product.img[1].attributes.url"
          @mouseleave="product.mainMedia = product.img[0].attributes.url"
        >
          <div class="productPresentation">
            <div class="imgContainer">
              <img class="productMedia" :src="product.mainMedia" loading="lazy" alt="" />
            </div>
            <div class="productDescription">
              <p class="name">{{ product.attr.nom }}</p>
              <p>{{ product.attr.matiere }}</p>
              <p>
                {{
                  calculPrice(
                    product.attr.prix,
                    product.attr.category.data.attributes.type
                  )
                }}€
              </p>
            </div>
          </div>

          <div class="relevantContainer">
            <img
              v-for="(media, index) in product.img"
              :key="index"
              :src="media.attributes.url"
              loading="lazy"
              alt=""
              class="relevantItem"
              @mouseenter="product.mainMedia = media.attributes.url"
              @mouseleave="product.mainMedia = product.img[0].attributes.url"
            />
          </div>
        </div>
      </div>
    </div>
    <empty-list-message v-else />
  </div>
</template>

<script>
import emptyListMessage from "@/components/home/emptyListMessage.vue";
import productsServices from "../../shared/services/products.services";

export default {
  components: { emptyListMessage },
  data() {
    return {
      products: [],
      scrolling: null,
    };
  },

  mounted() {
    if (this.$store.state.latestProducts.length != 0) {
      this.products = this.$store.state.latestProducts;
    } else {
      this.getProducts();
    }
  },

  methods: {
    calculPrice(prix, type) {
      if (type === "Boucle d'Oreille") {
        return prix * 2;
      } else {
        return prix;
      }
    },
    getProducts() {
      productsServices.getLatestProducts().then(
        (res) => {
          res.data.data.forEach((el) => {
            const product = {
              id: el.id,
              attr: el.attributes,
              mainMedia: el.attributes.photo.data[0].attributes.url,
              img: el.attributes.photo.data,
            };
            this.products.push(product);
          });
          this.$store.commit("fillLatestProducts", this.products);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    toProductView(id) {
      this.$router.push({
        name: "productDetail",
        params: { id: id },
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
@import "../../shared/styles/variables.scss";

.container {
  margin: 5% auto;
  color: $fontColor;

  .titleContainer {
    width: 45%;
    margin: 3% auto;
    text-align: center;
    h2 {
      font-size: 25px;

      span {
        border-top: 2px solid $lightBlue;
      }

      @media screen and (max-width: 660px) {
        margin: 15% auto 15% auto;
      }
    }

    @media screen and (max-width: 660px) {
      width: 90%;
    }
  }

  .carouselContainer {
    position: relative;

    .productList {
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;

      &::-webkit-scrollbar {
        display: none;
      }

      & {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .productItem {
        min-width: 21%;
        margin: 1%;
        position: relative;
        cursor: pointer;

        .productPresentation {
          position: relative;

          .imgContainer {
            width: 100%;

            .productMedia {
              width: 100%;
              aspect-ratio: 3/4;
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
              color: $fontColor;
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
          }
        }

        .relevantContainer {
          max-width: fit-content;
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
            height: 33%;
            transition: all ease-in-out 1s;
          }

          .productPresentation .productDescription p {
            opacity: 1;
            transition: all ease-in-out 1.5s;
          }
        }

        @media screen and (max-width: 660px) {
          min-width: 50%;
        }
      }
    }

    .controls {
      position: absolute;
      width: 35px;
      z-index: 75;
      margin: auto;
      top: 0;
      bottom: 0;

      background-color: rgba(193, 199, 201, 0.2);
      padding: 5px;

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }
    }
  }

  @media screen and (max-width: 660px) {
    height: auto;
  }
}
</style>