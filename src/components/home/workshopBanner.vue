<template>
  <div class="btnBannerContainer">
    <button class="link">
      <p class="title">L'ATELIER</p>
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
  background-image: url("https://thumbs.dreamstime.com/b/bijoutier-travaillant-avec-la-cha%C3%AEne-dans-l-atelier-le-se-ferment-vers-haut-de-photo-cultiv%C3%A9e-homme-dou%C3%A9-r%C3%A9parant-collier-pour-140725539.jpg");
}
</style>