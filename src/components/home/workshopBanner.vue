<template>
  <div class="btnBannerContainer">
    <button class="link" @click="redirect">
      <p class="title">L'ATELIER</p>
      <p class="discover">Découvrir</p>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({
        name: "savoir_faire",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/buttonOnBanner.scss";
@import "../../shared/styles/variables.scss";

.btnBannerContainer {
  height: calc(100vh - #{$headerHeight});
  background-image: url("../../assets/workshop.jpg");

  button {
    cursor: pointer;
  }
}
</style>