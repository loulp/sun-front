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
          <!-- TODO fix image not taking full div width -->
          <div class="productPresentation">
            <div class="imgContainer">
              <img class="productMedia" :src="product.mainMedia" alt="" />
            </div>
            <div class="productDescription">
              <p>{{ product.attr.nom }}</p>
              <p>{{ product.attr.prix }}€</p>
            </div>
          </div>

          <div class="relevantContainer">
            <img
              v-for="(media, index) in product.img"
              :key="index"
              :src="media.attributes.url"
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
    this.getProducts();
  },

  methods: {
    getProducts() {
      productsServices.getProducts().then(
        (res) => {
          console.log(res);
          res.data.data.forEach((el) => {
            const product = {
              id: el.id,
              attr: el.attributes,
              mainMedia: el.attributes.photo.data[0].attributes.url,
              img: el.attributes.photo.data,
            };
            this.products.push(product);
          });
          //TODO requête coté back pour limité la taille de la liste
          this.products = this.products.slice(0, 9);
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

  .titleContainer {
    width: 45%;
    margin: 3% auto;
    text-align: center;
    h2 {
      font-size: 25px;

      span {
        border-top: 2px solid $mainColor;
      }

      @media screen and (max-width: 660px) {
        margin: 15% auto 15% 3%;
      }
    }

    @media screen and (max-width: 660px) {
      width: 75%;
    }
  }

  .carouselContainer {
    position: relative;

    .productList {
      display: flex;
      overflow-x: auto;
      padding-bottom: 5%;

      &::-webkit-scrollbar {
        display: none;
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

            border: 0.5px solid;
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