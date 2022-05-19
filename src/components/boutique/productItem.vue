<template>
  <div @click="toProductView()" v-if="product" class="itemContainer">
    <div class="productPresentation">
      <img
        class="productMedia"
        :src="product.attributes.photo.data[0].attributes.url"
        alt=""
      />
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

    position: relative;

    border: 1px solid;
    border-radius: 15px;

    .productMedia {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }

    .productDescription {
      visibility: hidden;
      width: 50%;
      transition: all ease-in-out 0.5s;

      background-color: #efdebd;
      border-radius: 0 0 15px 15px;

      bottom: 0;
      left: 0;
      position: absolute;

      p {
        color: black;
      }

      @media screen and (max-width: 660px) {
        visibility: visible;
        width: 100%;
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