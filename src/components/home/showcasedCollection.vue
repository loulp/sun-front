<template>
  <div class="container">
    <h1 class="title">NOUVELLE COLLECTION</h1>
    <div class="collectionContainer">
      <div class="textContainer">
        <h2>Radiance</h2>
        <p>
          Inspirée des étoiles filantes et de leurs dessins dans le ciel
          nocturne, cette première collection se veut à la fois douce et forte.
          Grâce à son design fin et son motif délicat de perle d'or, elle sera
          votre compagnon idéal au quotidien.<br /><br />Et surtout n'oubliez
          pas de faire un vœu quand vous la porterez !
        </p>
        <button @click="toCollection()" class="mainButton">Découvrir</button>
      </div>
      <div class="mediaContainer">
        <img
          class="media"
          loading="lazy"
          src="../../assets/photoCollection/homeRadianceLeft.jpg"
          alt=""
        />
        <img
          class="media"
          loading="lazy"
          src="../../assets/photoCollection/homeRadianceRight.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toCollection() {
      this.$router.push({ path: "/boutique/collection/2" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";
@import "../../shared/styles/mainButton.scss";

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
      flex: 1;
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

      .mainButton {
        @media screen and (max-width: 660px) {
          margin: 10% 0;
        }
      }
    }

    .mediaContainer {
      flex: 2;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      .media {
        height: calc(100vh - #{$headerHeight});
        margin: 5px;

        @media screen and (max-width: 660px) {
          width: 80%;
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