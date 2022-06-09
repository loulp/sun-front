<template>
  <div class="btnBannerContainer">
    <button class="link" @click="redirect">
      <p class="title">L'INSPIRATION</p>
      <p class="discover">Découvrir</p>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({
        name: "inspiration",
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
  background-image: url("../../assets/housebanner.jpg");

  button {
    cursor: pointer;
  }
}
</style>