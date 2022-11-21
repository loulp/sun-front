<template>
  <div class="container">
    <div class="mediaContainer">
      <img src="../../assets/liseDEV.jpg" alt="" />
    </div>
    <div class="textContainer">
      <p>Célébrons l'Amour</p>
      <p>
        De l'amour à s'offrir, de l'amour à offrir, pour marquer votre amour ou
        pour célébrer l'Amour tout simplement.<br />
        Rien de tel qu'un bijou pour se dire : Je t'aime.
      </p>
      <p>
        Chez SUN Jewelry,nous militons pour l'Amour, tous les Amours. C'est pour
        cela que de la réalisation au message, nos bijoux en sont le reflet.
      </p>
      <p class="lightText">
        Une légende raconte que si on zoom beaucoup sur nos créations, on peut y
        voir des petites paillettes de love incrustées.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.container {
  height: calc(100vh - #{$scrolledHeaderHeight});
  display: flex;
  flex-direction: row-reverse;
  margin-top: $homeElementsBottomMargin;
  margin-bottom: $homeElementsBottomMargin;

  .mediaContainer {
    flex: 2;
    text-align: center;

    img {
      height: calc(100vh - #{$scrolledHeaderHeight});
      @media screen and (max-width: 660px) {
        height: auto;
        width: 66%;
        margin-bottom: 15%;
      }
    }
    @media screen and (max-width: 660px) {
      margin-top: 6%;
    }
  }

  .textContainer {
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: justify;

    p {
      font-size: 18px;
      color: $fontColor;
      width: 75%;

      @media screen and (max-width: 660px) {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: justify;
        padding: 0;
        margin: 5%;
      }
    }

    .lightText {
      font-size: 16px;
      color: $lightBlue;
    }
  }

  @media screen and (max-width: 660px) {
    height: auto;
    flex-direction: column-reverse;
  }
}
</style>