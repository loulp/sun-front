<template>
  <div class="btnBannerContainer">
    <div class="textContainer" @click="redirect">
      <h2>L'inspiration</h2>
      <p>Plongez au cœur de l'univers SUN Jewelry</p>
    </div>
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
@import "../../shared/styles/variables.scss";

.btnBannerContainer {
  height: calc(100vh - #{$scrolledHeaderHeight});
  background-image: url("../../assets/banner/housebanner.jpg");
  position: relative;

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
}
</style>