<template>
  <div class="inspirationContainer">
    <h1><img src="../assets/starIcon.png" class="titleIcon" />L'inspiration</h1>
    <emotion />
    <middle-part />
    <inspi-citation />
  </div>
</template>

<script>
import emotion from "../components/house/inspiration/emotion.vue";
import InspiCitation from "../components/house/inspiration/inspiCitation.vue";
import MiddlePart from "../components/house/inspiration/middlePart.vue";
export default {
  metaInfo: {
    title: "Inspiration",
    link: [{ rel: "canonical", href: "https://sunjewelry.fr/inspiration" }],
    meta: [
      {
        name: "description",
        content:
          "Découvrez l’inspiration et l’univers de la maison de joaillerie SUN Jewelry, Atelier de joaillerie Lyonnais",
      },
    ],
  },
  components: { emotion, MiddlePart, InspiCitation },
};
</script>

<style lang="scss">
@import "../shared/styles/variables.scss";

.inspirationContainer {
  margin-top: 10%;

  h1 {
    width: fit-content;
    margin: auto;
    text-align: center;
    border-bottom: 2px solid $lightBlue;

    padding: 3% 10px 0 10px;
  }

  .titleIcon {
    width: 30px;
    margin-right: 10px;
    margin-bottom: -5px;
  }

  .childContainer {
    position: relative;
    height: calc(100vh - #{$scrolledHeaderHeight});
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 30px;

    margin: 1% auto;

    .mediaContainer {
      display: flex;
      justify-content: center;
      flex: 50%;
      .media {
        width: 50%;
      }
    }

    .textContainer {
      display: flex;
      justify-content: center;
      flex: 50%;

      .content {
        width: 80%;

        p {
          text-align: justify;
          font-size: 18px;
          line-height: 1.6;
        }

        @media screen and (max-width: 660px) {
          width: 100%;
        }
      }

      @media screen and (max-width: 660px) {
        align-items: center;
      }
    }

    &.mediaLeft {
      flex-direction: row;
      .textContainer {
        justify-content: flex-start;
      }

      @media screen and (max-width: 660px) {
        flex-direction: column;
      }
    }
    &.mediaRight {
      background-color: $lightBlue;

      flex-direction: row-reverse;
      .textContainer {
        justify-content: flex-end;
      }

      @media screen and (max-width: 660px) {
        flex-direction: column;
      }
    }
    @media screen and (max-width: 1000px) {
      height: auto;
    }
  }

  @media screen and (max-width: 660px) {
    h1 {
      padding-top: 5%;
    }
  }
}
</style>