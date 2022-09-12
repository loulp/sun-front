<template>
  <div class="container">
    <h1 class="title">NOUVELLE COLLECTION</h1>
    <div class="collectionContainer">
      <div class="textContainer">
        <h2>Radiance</h2>
        <p>
          Oui, ma gâtée, RS4 gris nardo, bien sûr qu'ils m'ont raté, Soleil dans
          la bulle, sur le Prado, Shifter pro' Contre-sens , ma chérie, tu es à
          contre-sens Puta, où tu étais quand j'mettais des sept euros d'essence
          Tu veux nous faire la guerre, par Dieu, c'est B Ça prend ton Audi, ça
          prend ta gadji, ça prend ta CB
        </p>
        <button class="discoverButton">Découvrir</button>
      </div>
      <div class="mediaContainer">
        <img class="media" src="../../assets/showCollTEST.webp" alt="" />
        <img class="media" src="../../assets/showCollTEST2.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.container {
  color: $fontColor;

  .title {
    text-align: center;

    @media screen and (max-width: 660px) {
      margin-top: 10%;
      margin-bottom: 0;
    }
  }

  .collectionContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 3%;
    margin: auto 5%;

    .textContainer {
      flex-basis: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      p {
        font-size: 18px;
        padding: 0 25px;

        @media screen and (max-width: 660px) {
          margin: 0;
        }
      }

      .discoverButton {
        margin-top: 3%;
        width: fit-content;
        background-color: $mainColor;
        color: white;
        border: none;
        padding: 2% 3%;
        font-size: 18px;
        cursor: pointer;

        @media screen and (max-width: 660px) {
          margin: 10% 0;
        }
      }
    }

    .mediaContainer {
      flex-basis: 66%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      .media {
        width: 45%;
        height: calc(100vh - #{$headerHeight});

        margin: 5px;

        @media screen and (max-width: 660px) {
          width: 90%;
          height: unset;
        }
      }

      @media screen and (max-width: 660px) {
        flex-direction: column;
        align-items: center;
      }
    }

    @media screen and (max-width: 660px) {
      flex-direction: column;
    }
  }
}
</style>