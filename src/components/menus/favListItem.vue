<template>
  <div class="favItem">
    <div class="logoContainer">
      <img
        @click="removeFromFav()"
        class="favIcon"
        :src="require('../../assets/icon/favIconFill.svg')"
        alt=""
      />
    </div>
    <div class="mediaContainer" @click="toProductPage(fav.id)">
      <img :src="fav.media" alt="" />
    </div>
    <div class="textContainer" @click="toProductPage(fav.id)">
      <p class="name">{{ fav.nom }}</p>
      <p class="collection">Collection : {{ fav.collection }}</p>
      <p class="collection">{{ fav.matiere }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fav: null,
  },
  methods: {
    toProductPage(id) {
      this.$router.push({
        name: "productDetail",
        params: { id: id },
      });
    },
    removeFromFav() {
      this.$store.commit("removeItemFromFav", this.fav.id);
    },
  },
};
</script>

<style scoped lang="scss">
.favItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin: 3% auto;

  .logoContainer {
    flex: 1;
    .favIcon {
      width: 20px;
      cursor: pointer;
    }
  }

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