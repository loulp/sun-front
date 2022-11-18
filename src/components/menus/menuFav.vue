<template>
  <div class="flexContainer">
    <div class="favContainer">
      <h2>Vos favoris :</h2>
      <fav-list-item v-for="(fav, index) in favList" :key="index" :fav="fav" />
    </div>
    <div class="image" ref="imageSide" @click="$emit('hideMenu')"></div>
  </div>
</template>

<script>
import FavListItem from "./favListItem.vue";
export default {
  components: {
    FavListItem,
  },

  data() {
    return {
      favList: [],
    };
  },

  mounted() {
    this.favList = this.$store.state.fav;
  },
};
</script>

<style lang="scss" scoped>
@import "@/shared/styles/variables.scss";

.flexContainer {
  height: 90vh;
  width: 100%;

  display: flex;
  flex-direction: row;

  .favContainer {
    flex: 40%;
    background-color: white;

    overflow-y: scroll;
    padding-left: 3%;
    padding-top: 3%;

    border-right: 0.1px solid #0101010d;

    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    @media screen and (max-width: 660px) {
      width: 100%;
    }
  }

  .image {
    flex: 40%;

    background-position: center;
    background-size: cover;
    // background-image: url("../../assets/housebanner.jpg");
    transition: background-image 0.3s ease-in-out;

    @media screen and (max-width: 660px) {
      display: none;
    }
  }
}
</style>