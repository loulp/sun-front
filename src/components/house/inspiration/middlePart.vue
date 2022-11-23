<template>
  <div class="childContainer mediaRight">
    <div class="mediaContainer">
      <img class="media" src="../../../assets/inspiration/inspi2.jpg" alt="" />
      <img
        class="floatingImg"
        src="../../../assets/inspiration/inspi3.png"
        alt=""
      />
    </div>
    <div class="textContainer">
      <div class="content">
        <p>
          Choisie pour sa couleur, sa forme ou ses propriétés en lithothérapie ;
          chaque pierre est source d'inspiration, car comme son futur porteur,
          elle est unique.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.floatingImg {
  position: absolute;
  width: 165px;
  bottom: 5px;
  right: 30%;

  @media screen and (max-width: 660px) {
    width: 125px;
    bottom: 40%;
    right: 55%;
  }
}
</style>