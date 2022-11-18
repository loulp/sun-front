<template>
  <div class="bannerContainer">
    <div class="textContainer">
      <h2>Joaillerie Poétique et Rêveuse</h2>
      <p>
        Plongez dans l'univers de SUN Jewelry, doux voyage aux pays des rêves et
        des bijoux magiques.
      </p>
      <p>
        Chaque bijou est unique et réalisé à la main sur commande dans notre
        atelier lyonnais.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.bannerContainer {
  position: relative;
  height: calc(100vh - #{$headerHeight});
  background-image: url("../../assets/banniere.png");
  background-position: center;
  background-size: cover;
  margin-bottom: $homeElementsBottomMargin;

  .textContainer {
    position: absolute;
    width: 33%;
    left: 3%;
    bottom: 8%;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    color: $fontColor;

    h2 {
      margin-bottom: 5%;
    }

    p {
      font-size: 18px;
    }
    @media screen and (max-width: 660px) {
      width: 50%;
    }
  }

  @media screen and (max-width: 660px) {
    background-size: cover;
  }
}
</style>