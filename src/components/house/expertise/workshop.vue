<template>
  <div class="childContainer mediaLeft">
    <div class="mediaContainer">
      <img class="media" src="../../../assets/savoirFaire/sf2.jpg" alt="" />
      <img
        class="floatingMedia"
        src="../../../assets/savoirFaire/sf3.png"
        alt=""
      />
    </div>
    <div class="textContainer">
      <div class="content">
        <h2>L'atelier :</h2>
        <p>
          Scier, limer, souder autant détapes réalisées dans notre atelier
          Lyonnais ou techniques anciennes et outils modernes se côtoient. Nous
          avons à cour l'amour du geste, du fait main et de l'outil traditionnel
          ; Néanmoins l'atelier est équipé de nouvelles technologies permettant
          au joaillier un travail toujours plus précis et minutieux.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.mediaContainer {
  position: relative;
  .floatingMedia {
    position: absolute;
    width: 180px;
    right: 40px;
    bottom: -100px;

    @media screen and (max-width: 660px) {
      width: 150px;
      right: 5px;
      bottom: -60px;
    }
  }
}
</style>