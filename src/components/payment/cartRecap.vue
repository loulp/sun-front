<template>
  <div class="container">
    <p class="totalPrice">Prix Total: {{ totalPrice }}€</p>
    <div
      class="productListItem"
      v-for="(item, index) in getCompactedList"
      :key="index"
    >
      <img :src="item.media" @click="toProductView(item.id)" />
      <div class="itemText">
        <h3 class="itemName" @click="toProductView(item.id)">{{ item.nom }}</h3>
        <p v-if="item.categorie === 'Boucle d\'oreille'">l'unité</p>
        <p>{{ item.prix }}€</p>
        <p v-if="item.categorie === 'Bague'">Taille: {{ item.size }}</p>
      </div>
      <p>{{ item.nbItem }}</p>
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
      getCompactedList() {
        var compactedList = [];

        this.productList.forEach((cartItem) => {
          const existingIndex = compactedList.findIndex(
            (item) => item.id === cartItem.id
          );

          if (existingIndex != -1) {
            if (cartItem.categorie !== "Bague") {
              compactedList[existingIndex].nbItem += 1;
            } else if (compactedList[existingIndex].size == cartItem.size) {
              compactedList[existingIndex].nbItem += 1;
            } else {
              const newProduct = { ...cartItem, nbItem: 1 };
              compactedList.push(newProduct);
            }
          } else {
            const newProduct = { ...cartItem, nbItem: 1 };
            compactedList.push(newProduct);
          }
        });

        return compactedList;
      },
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

  methods: {
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
@import "../../shared/styles/variables.scss";

.container {
  height: 70vh;
  overflow-y: scroll;
  width: 90%;
  border: 0.5px solid $mainColor;
  border-radius: 15px;
  color: $fontColor;

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

      .itemName {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }

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