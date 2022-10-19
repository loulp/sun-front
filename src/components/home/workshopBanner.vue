<template>
  <div class="btnBannerContainer">
    <!-- <button class="link" @click="redirect">
      <p class="title">L'ATELIER</p>
      <p class="discover">Découvrir</p>
    </button> -->
    <div class="textContainer">
      <h2>L'ATELIER</h2>
      <button @click="redirect">Découvrir</button>
    </div>
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
  height: calc(100vh - #{$scrolledHeaderHeight});
  background-image: url("../../assets/workshop.jpg");
  position: relative;
  margin-bottom: $homeElementsBottomMargin;

  .textContainer {
    position: absolute;
    width: fit-content;
    left: 5%;
    bottom: 15%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);

    h2 {
      margin: 0 0 10px 0;
      color: white;
    }

    button {
      background: none;
      box-shadow: none;
      border: none;

      padding: 0;

      cursor: pointer;

      font-size: 22px;
      font-weight: bold;
      border-bottom: 1px solid white;
      font-family: "Abhaya Libre", serif;
      color: white;
    }
  }

  @media screen and (max-width: 660px) {
    margin-bottom: 10%;
  }
}
</style>