<template>
  <div class="container">
    <div
      class="productListItem"
      v-for="(item, index) in productList"
      :key="index"
    >
      <img :src="strapiMediaUrl + item.media" />
      <div class="itemText">
        <h3>{{ item.nom }}</h3>
        <p>{{ item.prix }}</p>
        <p>Taille: {{ item.size }}</p>
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

  data() {
    return {
      strapiMediaUrl: process.env.VUE_APP_BACK_URL_IMG,
    };
  },

  methods: {
    removeItem(index) {
      this.$store.commit("removeItemFromCart", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 5%;
  width: 75%;
  height: 80vh;
  overflow-y: scroll;

  .productListItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 2%;
    border: 0.5px solid #efdebd;
    border-radius: 15px;

    > * {
      margin: auto 10%;
    }

    img {
      width: 10%;
    }

    .itemText {
      width: 100%;
    }

    button {
      cursor: pointer;
      font-size: 16px;
      background: none;
      border: none;
    }
  }
}
</style>