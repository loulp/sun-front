<template>
  <div class="expertiseContainer">
    <h1><img src="../assets/starIcon.png" class="titleIcon" />Savoir-Faire</h1>
    <expertise />
    <workshop />
    <gemstone />
    <polishing />
    <p class="bottomText">
      Comme dans les plus grandes maisons de joaillerie, chaque bijou SUN
      Jewelry est contrôlé à la loupe avant la mise en écrin pour vous certifier
      une qualité de travail en accord avec la charte de la maison, car pour
      nous, vous méritez le meilleur.
    </p>
  </div>
</template>

<script>
import expertise from "../components/house/expertise/expertise.vue";
import Gemstone from "../components/house/expertise/gemstone.vue";
import Polishing from "../components/house/expertise/polishing.vue";
import Workshop from "../components/house/expertise/workshop.vue";
export default {
  components: { expertise, Workshop, Gemstone, Polishing },
};
</script>

<style lang="scss">
@import "../shared/styles/variables.scss";

.expertiseContainer {
  margin-top: 10%;

  h1 {
    width: fit-content;
    margin: auto;
    text-align: center;
    border-bottom: 2px solid $mainColor;

    padding: 3% 10px 0 10px;

    .titleIcon {
      width: 30px;
      margin-right: 10px;
      margin-bottom: -5px;
    }

    @media screen and (max-width: 660px) {
      margin-bottom: 15%;
    }
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

        h2 {
          width: 100%;
          text-align: center;
        }

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
        margin: 3%;
      }
    }

    &.mediaLeft {
      flex-direction: row;
      background-color: rgb(234, 246, 246);

      .textContainer {
        justify-content: flex-start;
      }

      @media screen and (max-width: 660px) {
        flex-direction: column;
      }
    }
    &.mediaRight {
      flex-direction: row-reverse;
      .textContainer {
        justify-content: flex-end;
      }

      @media screen and (max-width: 660px) {
        flex-direction: column;
        height: auto
      }
    }
  }

  .bottomText {
    margin: 3% auto 3% auto;
    width: 70%;
    text-align: justify;
    font-size: 18px;
    line-height: 1.6;
  }

  @media screen and (max-width: 660px) {
    h1 {
      padding-top: 5%;
    }
  }
}
</style>