<template>
  <div class="btnBannerContainer">
    <div class="textContainer" @click="redirect">
      <h2>L'atelier</h2>
      <p>
        Chaque création est fabriquée au sein de l'atelier lyonnais, par des
        mains mêlant savoir faire, passion et excellence.
      </p>
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
@import "../../shared/styles/variables.scss";

.btnBannerContainer {
  height: calc(100vh - #{$scrolledHeaderHeight});
  background-image: url("../../assets/workshop.jpg");
  position: relative;
  margin-bottom: $homeElementsBottomMargin;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .textContainer {
    cursor: pointer;
    position: absolute;
    width: 33%;
    left: 5%;
    bottom: 15%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);

    h2 {
      margin: 0 0 10px 0;
    }

    @media screen and (max-width: 660px) {
      width: 45%;
    }
  }

  @media screen and (max-width: 660px) {
    margin-bottom: 10%;
  }
}
</style>