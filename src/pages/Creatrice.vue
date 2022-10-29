<template>
  <div class="creatriceContainer">
    <h1>
      Typhen <br />
      (Fondatrice)
    </h1>
    <childhood />
    <formation />
    <evolution />
    <bottom />
  </div>
</template>

<script>
import Bottom from "../components/house/creatrice/bottom.vue";
import childhood from "../components/house/creatrice/childhood.vue";
import Evolution from "../components/house/creatrice/evolution.vue";
import Formation from "../components/house/creatrice/formation.vue";

export default {
  components: { childhood, Formation, Evolution, Bottom },
};
</script>

<style lang="scss">
.creatriceContainer {
  margin-top: 15%;

  h1 {
    width: 100%;
    text-align: center;
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
      .textContainer {
        justify-content: flex-start;
      }

      @media screen and (max-width: 660px) {
        flex-direction: column;
      }
    }
    &.mediaRight {
      background-color: rgba(193, 199, 201, 0.2);

      flex-direction: row-reverse;
      .textContainer {
        justify-content: flex-end;
      }

      @media screen and (max-width: 660px) {
        flex-direction: column;
      }
    }
  }

  @media screen and (max-width: 660px) {
    h1 {
      padding-top: 5%;
    }
  }
}
</style>