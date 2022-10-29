<template>
  <div class="expertiseContainer">
    <h1>Savoir-Faire</h1>
    <expertise />
    <workshop />
    <gemstone />
    <polishing />
    <p class="bottomText">
      Comme dans les plus grande maison de joaillerie, chaque bijou SUN Jewelry
      est contrôlé à la loupe avant la mise en écrin pour vous certifier une
      qualité de travail en accord avec la charte de la maison car pour nous,
      vous méritez le meilleur.
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
.expertiseContainer {
  margin-top: 15%;

  h1 {
    width: fit-content;
    margin: auto;
    text-align: center;
    border-bottom: 2px solid #efdebd;

    padding-left: 10px;
    padding-right: 10px;
  }

  .childContainer {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 30px;

    margin: 5% auto;

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
    }

    &.mediaLeft {
      flex-direction: row;
      background-color: rgba(193, 199, 201, 0.2);

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
      }
    }
  }

  .bottomText {
    margin: -3% auto 3% auto;
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