<template>
  <div class="childContainer mediaLeft">
    <img
      class="floatingMedia"
      src="../../../assets/savoirFaire/sf5.png"
      alt=""
    />
    <div class="mediaContainer">
      <img class="media" src="../../../assets/savoirFaire/sf6.jpg" alt="" />
    </div>
    <div class="textContainer">
      <div class="content">
        <h2>Polissage et Finition :</h2>
        <p>
          Dernière étape qui permettra de donner toute sa brillance et sa
          splendeur au bijou, le polissage est un moment important de la
          fabrication. Une fois réalisé, le bijou sera nettoyé avec le plus
          grand soin dans un bain à ultrason puis à la vapeur pour être certain
          qu'il ne reste plus aucun résidu d'abrasif.
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
  top: 10px;
  z-index: 50;

  @media screen and (max-width: 660px) {
    width: 130px;
    left: 50%;
    top: 35%;
  }
}
</style>