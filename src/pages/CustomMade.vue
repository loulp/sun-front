<template>
  <div class="customMadeContainer">
    <div class="titleContainer">
      <h1>
        <img src="../assets/starIcon.png" class="titleIcon" />Le Sur-Mesure
      </h1>
      <p>Et si on créait ensemble le bijou de vos rêves ?</p>
    </div>
    <meeting />
    <realisation />
    <contact-option />
    <div class="mediaHolder">
      <img src="../assets/photoCollection/customBottom.jpg" loading="lazy" alt="" />
    </div>
  </div>
</template>

<script>
import ContactOption from "../components/customMade/contactOption.vue";
import meeting from "../components/customMade/meeting.vue";
import Realisation from "../components/customMade/realisation.vue";
export default {
  components: { meeting, Realisation, ContactOption },
};
</script>

<style lang="scss">
@import "../shared/styles/variables.scss";

.customMadeContainer {
  margin-top: 10%;

  .titleContainer {
    h1 {
      width: fit-content;
      margin: auto;
      text-align: center;
      border-bottom: 2px solid $lightBlue;

      padding: 3% 10px 0 10px;

      .titleIcon {
        width: 30px;
        margin-right: 10px;
        margin-bottom: -5px;
      }
    }

    p {
      font-style: italic;
      text-align: center;
      margin: 3% auto;
      font-size: 18px;
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
      background-color: $lightBlue;

      flex-direction: row;
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

    @media screen and (max-width: 660px) {
      height: auto;
    }
  }

  @media screen and (max-width: 660px) {
    h1 {
      padding-top: 5%;
    }
  }

  .mediaHolder {
    margin: 3% auto;
    text-align: center;
    img {
      width: 50%;
      @media screen and (max-width: 660px) {
        width: 75%;
      }
    }
  }
}
</style>