<template>
  <div class="container">
    <div class="titleContainer">
      <h2>
        Découvrez les <br />
        <span>NOUVELLES CREATIONS</span>
      </h2>
    </div>
    <div class="productList">
      <div
        class="productItem"
        v-for="(product, index) in products"
        :key="index"
        @click="toProductView(product.id)"
      >
        <div
          class="imgContainer"
          :style="{
            'background-image': `url(${strapiMediaUrl + product.img})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      strapiMediaUrl: process.env.VUE_APP_BACK_URL_IMG,
    };
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      axios
        .get(`${process.env.VUE_APP_BACK_URL_API}bijoux?populate=photo`, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`,
          },
        })
        .then(
          (res) => {
            res.data.data.forEach((el) => {
              const product = {
                id: el.id,
                img: el.attributes.photo.data[0].attributes.url,
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
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 160px);
  margin: 5% auto;

  .titleContainer {
    width: 45%;
    margin: 3% auto;
    text-align: center;
    h2 {
      font-size: 25px;
      margin: 2% auto 2% 3%;

      span {
        border-top: 2px solid #efdebd;
      }
    }
  }

  .productList {
    display: flex;
    overflow-x: auto;
    padding-bottom: 5%;

    &::-webkit-scrollbar {
      display: none;
    }

    .productItem {
      min-width: 30%;
      margin: 1%;
      position: relative;
      box-shadow: 3px 3px 5px #bdbcbc;
      border-radius: 15px;
      cursor: pointer;

      transition: all ease 0.5s;

      .imgContainer {
        border-radius: 10px;

        width: 100%;
        height: 50vh;

        background-position: center;
        background-size: cover;
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 5px 5px 8px #bdbcbc;
      }
    }
  }
}
</style>