<template>
  <div class="btnBannerContainer">
    <button class="link" @click="sendShowMenuEvent">
      <p class="title">LA BOUTIQUE</p>
      <p class="discover">Découvrir</p>
    </button>
  </div>
</template>

<script>
import EventBus from '@/shared/eventBus.js'

export default {
  methods: {
    sendShowMenuEvent() {
      EventBus.$emit("showShopMenu")
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/buttonOnBanner.scss";
@import "../../shared/styles/variables.scss";

.btnBannerContainer {
  height: calc(100vh - #{$headerHeight});
  background-image: url("../../assets/shopbanner.jpg");

  button {
    cursor: pointer
  }
}
</style>