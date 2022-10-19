<template>
  <div class="container">
    <div class="content">
      <div class="logoContainer">
        <img src="../assets/logoTxtShortBlue.png" class="logo" alt="" />
      </div>
      <div>
        <!-- TODO add url  -->
        <h3>AIDE</h3>
        <a href="">Livraison et retours</a>
        <a href="/contact">Contactez nous</a>
        <a href="">CGV</a>
        <a href="">Mentions légales</a>
      </div>
      <div>
        <h3>À PROPOS</h3>
        <a href="">Joaillerie durable</a>
        <a href="">Made in France</a>
        <a href="">Nos boutiques</a>
        <a href="">Nos revendeurs</a>
      </div>
      <div>
        <div class="mediaIconContainer">
          <a
            class="link"
            href="https://www.instagram.com/s.u.n.jewelry/"
            target="_blank"
            ><img class="sociallogo" src="../assets/insta.svg" alt=""
          /></a>
          <a
            class="link"
            href="https://www.facebook.com/search/top?q=s.u.n%20jewelry"
            target="_blank"
            ><img class="sociallogo" src="../assets/facebook.svg" alt=""
          /></a>
          <a class="link" href="/contact"
            ><img class="sociallogo" src="../assets/mail.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background-color: #efeeec;

  .content {
    display: flex;
    flex-flow: row wrap;
    position: relative;
    justify-content: center;
    gap: 10%;
    width: 100%;

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
        color: #38515f;
        font-size: 18px;

        @media screen and (max-width: 660px) {
          font-size: 12px;
        }
      }

      a {
        font-size: 16px;
        color: #38515f;
        text-decoration: none;

        @media screen and (max-width: 660px) {
          font-size: 10px;
        }
      }

      .mediaIconContainer {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        position: relative;
        height: fit-content;
        width: 66%;

        .link {
          width: 35%;

          .sociallogo {
            width: 75%;
            margin: 8%;
            cursor: pointer;
          }
        }
      }
    }

    .logoContainer {
      align-items: center;

      & > * {
        width: 80%;
      }
    }
  }
}
</style>