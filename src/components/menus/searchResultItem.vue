<template>
  <div class="searchItem">
    <div class="mediaContainer" @click="toProductPage(searchResult.id)">
      <img :src="searchResult.photo[0].url" alt="" />
    </div>
    <div class="textContainer" @click="toProductPage(searchResult.id)">
      <p class="name">{{ searchResult.nom }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchResult: null,
  },
  methods: {
    toProductPage(id) {
      this.$router.push({
        name: "productDetail",
        params: { id: id },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.searchItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin: 3% auto;
  .mediaContainer {
    flex: 2;
    width: 25%;
    cursor: pointer;

    img {
      width: 66%;
    }
  }

  .textContainer {
    flex: 2;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .name {
      font-size: 20px;
    }

    .collection {
      font-size: 16px;
      color: #707070;
    }
  }
}
</style>