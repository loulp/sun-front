<template>
  <div class="btnBannerContainer">
    <button class="link">
      <p class="title">LA MAISON</p>
      <p class="discover">Découvrir</p>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/buttonOnBanner.scss";
@import "../../shared/styles/variables.scss";

.btnBannerContainer {
  height: calc(100vh - #{$headerHeight});
  background-image: url("../../assets/jewelnb.jpg");
}
</style>