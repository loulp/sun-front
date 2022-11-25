<template>
  <div class="notFoundContainer">
    <div class="messageContainer">
      <div class="error">
        <p class="e1">4</p>
        <p class="e2">0</p>
        <p class="e3">4</p>
      </div>
      <p class="oops">
        Oups ! La page que vous recherchez n'est pas disponible ou n'existe pas
        !
      </p>
      <button class="mainButton" @click="redirectToHome()">Retournez a la page d'accueil</button>
    </div>
  </div>
</template>

<script>
export default {
    metaInfo: {
    title: "404",
  },
  methods: {
    redirectToHome() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../shared/styles/variables.scss";
@import "../shared/styles/mainButton.scss";

.notFoundContainer {
  width: 100%;
  height: calc(100vh - #{$headerHeight});
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .messageContainer {
    text-align: center;
    img {
      width: 25%;
    }
    .error {
      display: flex;
      flex-direction: row;
      p {
        flex: 1;
        font-size: 100px;
        margin-top: 50px;
        margin-bottom: 50px;
      }

      .e1,
      .e3 {
        color: $mainColor;
      }

      .e2 {
        animation: bounce2 2s ease infinite;
      }

      @keyframes bounce2 {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-30px);
        }
        60% {
          transform: translateY(-15px);
        }
      }
    }

    .oops {
      font-size: 22px;
    }
  }
}
</style>