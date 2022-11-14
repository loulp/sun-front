<template>
  <div class="container">
    <div
      class="productListItem"
      v-for="(item, index) in getCompactedList"
      :key="index"
    >
      <img :src="item.media" @click="toProductView(item.id)" />
      <div class="itemText">
        <h3 class="itemName" @click="toProductView(item.id)">{{ item.nom }}</h3>
        <p v-if="item.categorie === 'Boucle d\'Oreille'">l'unité</p>
        <p>{{ item.prix }}€</p>
        <p v-if="item.categorie === 'Bague'">Taille: {{ item.size }}</p>
      </div>
      <p class="nbItemContainer">{{ item.nbItem }}</p>
      <button @click="removeItem(index)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productList: null,
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
  },

  methods: {
    removeItem(index) {
      this.$store.commit("removeItemFromCart", index);
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
@import "../../shared/styles/variables.scss";

.container {
  margin: 5%;
  height: 80vh;
  overflow-y: scroll;

  .productListItem {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    margin: 2%;
    border: 0.5px solid $lightBlue;

    img {
      width: 10%;
    }

    .itemText {
       min-width: 15%;

      .itemName {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    button {
      cursor: pointer;
      font-size: 16px;
      background: none;
      border: none;
    }
  }

  @media screen and (max-width: 660px) {
    width: auto;
    margin: auto;
    height: auto;
  }
}
</style>