<template>
  <div class="container">
    <div
      class="productListItem"
      v-for="(item, index) in productList"
      :key="index"
    >
      <img :src="item.media" @click="toProductView(item.id)" />
      <div class="itemText">
        <h3 class="itemName" @click="toProductView(item.id)">{{ item.nom }}</h3>
        <p v-if="item.categorie === 'Boucle d\'oreille'">l'unité</p>
        <p>{{ item.prix }}€</p>
        <p v-if="item.categorie === 'Bague'">Taille: {{ item.size }}</p>
      </div>
      <button @click="removeItem(index)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productList: null,
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
    justify-content: space-between;
    align-items: center;

    margin: 2%;
    border: 0.5px solid $mainColor;
    border-radius: 15px;

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