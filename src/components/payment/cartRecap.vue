<template>
  <div class="container">
    <p class="totalPrice">Prix Total: {{ totalPrice }}</p>
    <div
      class="productListItem"
      v-for="(item, index) in productList"
      :key="index"
    >
      <img :src="item.media" />
      <div class="itemText">
        <h3>{{ item.nom }}</h3>
        <p>{{ item.prix }}€</p>
        <p>Taille: {{ item.size }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: this.$store.state.cart,
    };
  },

  computed: {
    totalPrice() {
      let total = 0;
      if (this.productList.length > 0) {
        this.productList.forEach((item) => {
          total = total + item.prix;
        });
      }

      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 70vh;
  overflow-y: scroll;
  width: 90%;
  border: 0.5px solid #efdebd;
  border-radius: 15px;

  &::-webkit-scrollbar {
    display: none;
  }

  .totalPrice {
    font-size: 21px;
    margin-left: 5%;
  }

  .productListItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > * {
      margin: auto 10%;
    }

    img {
      width: 10%;
    }

    .itemText {
      width: 100%;

      > * {
        margin: 5%;
      }
    }
  }

  @media screen and (max-width: 660px) {
    height: 33vh;
    width: 100%;
  }
}
</style>