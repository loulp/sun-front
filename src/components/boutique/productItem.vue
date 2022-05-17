<template>
  <div @click="toProductView()" v-if="product" class="itemContainer">
    <div class="productPresentation" ref="productPresentation">
      <div class="productDescription">
        <p>{{ product.attributes.nom }}</p>
        <p>{{ product.attributes.prix }}€</p>
      </div>
    </div>
    <div class="relevantContainer">
      <img
        v-for="(media, index) in this.product.attributes.photo.data"
        :key="index"
        :src="media.attributes.url"
        alt=""
        class="relevantItem"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: null,
  },

  mounted() {
    if (this.product) {
      this.$refs.productPresentation.style.backgroundImage = `url(${this.product.attributes.photo.data[0].attributes.url})`;
    }
  },

  methods: {
    toProductView() {
      this.$router.push({
        name: "productDetail",
        params: { id: this.product.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.itemContainer {
  margin: 2%;
  flex-basis: 25%;

  &:hover {
    .productPresentation .productDescription {
      visibility: visible;
      width: 100%;
      transition: all ease-in-out 1s;
    }

    .relevantContainer {
      visibility: visible;
      transition: all ease-in-out 3s;
    }
  }

  .productPresentation {
    cursor: pointer;
    height: 45vh;
    background-size: cover;
    background-position: center;

    position: relative;

    border: 1px solid;
    border-radius: 15px;

    .productDescription {
      visibility: hidden;
      width: 50%;
      transition: all ease-in-out 0.5s;

      background-color: beige;
      border-radius: 0 0 15px 15px;

      bottom: 0;
      left: 0;
      position: absolute;

      p {
        color: black;
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

      border: 1px solid;
      border-radius: 15px;
    }
  }
}
</style>