<template>
  <div class="inspirationContainer">
    <h1>L'inspiration</h1>
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
  components: { emotion, MiddlePart, InspiCitation },
};
</script>

<style lang="scss">
.inspirationContainer {
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