<template>
  <div class="container">
    <h1 class="title">NOUVELLE COLLECTION</h1>
    <div class="collectionContainer">
      <div class="textContainer">
        <h2>Radiance</h2>
        <p>
          Inspiré des étoiles filantes et de leurs dessins dans le ciel
          nocturne, cette première collection se veut à la fois douce et forte.
          Grâce à son design fin et son motif délicat de perle d'or, elle sera
          ton compagnon idéal au quotidien.<br /><br />Et surtout n'oublie pas de
          faire un vœu quand tu la porteras !
        </p>
        <button @click="toCollection()" class="discoverButton">Découvrir</button>
      </div>
      <div class="mediaContainer">
        <img class="media" src="../../assets/liseDEV.jpg" alt="" />
        <img class="media" src="../../assets/liseDEV.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toCollection() {
      // TODO verifier que c'est le bonne id en prod
      this.$router.push({ path: "/boutique/collection/2" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.container {
  color: $fontColor;
  margin-bottom: $homeElementsBottomMargin;

  .title {
    text-align: center;
    margin-bottom: 4%;

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
        text-align: justify;

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