<template>
  <div class="container">
    <img class="bottomCloud" src="../assets/nuage.png" alt="" />
    <div class="content">
      <div></div>
      <div>
        <h3>AIDE</h3>
        <a href="">Livraison et retours</a>
        <a href="">Contactez nous</a>
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
          <img src="../assets/logo.png" alt="" />
          <img src="../assets/logo.png" alt="" />
          <img src="../assets/logo.png" alt="" />
          <img src="../assets/logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bottomCloud {
  width: 100%;
}

.content {
  margin: 3% 0;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  justify-content: center;
  gap: 3%;

  & > * {
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > * {
      margin: 2%;
    }

    h3 {
      font-size: 18px;

      @media screen and (max-width: 660px) {
        font-size: 12px;
      }
    }

    a {
      font-size: 16px;
      color: black;
      text-decoration: none;

      @media screen and (max-width: 660px) {
        font-size: 10px;
      }
    }

    .mediaIconContainer {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      align-items: center;
      position: relative;
      height: 100%;

      img {
        margin: 0 5%;
        width: 40%;
        height: 20px;
      }
    }
  }
}
</style>