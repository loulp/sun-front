<template>
  <div class="childContainer mediaLeft">
    <img
      class="floatingMedia"
      src="../../../assets/savoirFaire/sf3.png"
      alt=""
    />
    <div class="mediaContainer">
      <img class="media" src="../../../assets/savoirFaire/sf2.jpg" alt="" />
    </div>
    <div class="textContainer">
      <div class="content">
        <h2>L'atelier :</h2>
        <p>
          Scier, limer, souder autant détapes réalisées dans notre atelier
          Lyonnais ou techniques anciennes et outils modernes se côtoient. Nous
          avons à cœur l'amour du geste, du fait main et de l'outil traditionnel
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
.floatingMedia {
  position: absolute;
  width: 180px;
  left: 28%;
  bottom: 10px;
  z-index: 50;

  @media screen and (max-width: 660px) {
    width: 130px;
    left: 50%;
    top: 30%;
  }
}

.mediaContainer {
  position: relative;
}
</style>