<template>
  <div class="container">
    <div class="content">
      <div class="logoContainer">
        <img src="../assets/logoTxtShortBlue.png" class="logo" alt="" />
      </div>
      <div>
        <h3>AIDE</h3>
        <a href="/retours-et-livraison">Livraison et retours</a>
        <a href="/contact">Contactez nous</a>
        <a href="/test">CGV & Mentions légales</a>
      </div>
      <div>
        <h3>À PROPOS</h3>
        <a href="">Joaillerie durable</a>
        <a href="">Made in France</a>
        <a href="/revendeurs">Nos revendeurs</a>
      </div>
      <div class="logoArtisanContainer">
        <img class="logo" src="../assets/logoArtisan.png" alt="" />
      </div>
      <div class="mediaIconContainer">
        <a
          class="link"
          href="https://www.instagram.com/s.u.n.jewelry/"
          target="_blank"
          ><img class="sociallogo" src="../assets/insta.svg" alt=""
        /></a>
        <a
          class="link"
          href="https://www.facebook.com/profile.php?id=100065676961761"
          target="_blank"
          ><img class="sociallogo" src="../assets/facebook.svg" alt=""
        /></a>
        <a class="link" href="/contact"
          ><img class="sociallogo" src="../assets/mail.svg" alt=""
        /></a>
        <div @click="cuteAlert()" class="link">
          <img class="sociallogo" src="../assets/starIcon.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/shared/eventBus.js";

export default {
  methods: {
    cuteAlert() {
      EventBus.$emit("showCuteMessage", "footer");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../shared/styles/variables.scss";

.container {
  z-index: 95;
  background-color: #efeeec;

  .content {
    display: flex;
    flex-flow: row wrap;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: 5%;
    width: 100%;
    padding: 20px 0;

    & > * {
      width: 15%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      & > * {
        margin: 2%;
      }

      h3 {
        color: $fontColor;
        font-size: 18px;

        @media screen and (max-width: 660px) {
          font-size: 12px;
        }
      }

      a {
        font-size: 16px;
        color: $fontColor;
        text-decoration: none;

        @media screen and (max-width: 660px) {
          font-size: 10px;
        }
      }

      @media screen and (max-width: 660px) {
        width: 30%;
        margin-top: 2%;
        margin-bottom: 2%;
      }
    }

    .mediaIconContainer {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      position: relative;
      height: fit-content;
      width: 10%;

      .link {
        width: 35%;

        .sociallogo {
          width: 75%;
          margin: 8%;
          cursor: pointer;
        }
      }
    }

    .logoArtisanContainer {
      .logo {
        width: 50%;
      }
    }

    & > :first-child,
    & > :last-child {
      @media screen and (max-width: 660px) {
        width: 20%;
      }
    }

    .logoContainer {
      align-items: center;

      & > * {
        width: 80%;
      }
    }

    @media screen and (max-width: 660px) {
      gap: 10%;
      padding: 0;
    }
  }

  @media screen and (max-width: 660px) {
    padding: 3%;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>