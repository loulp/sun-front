<template>
  <div class="container">
    <img src="../../assets/showCollTEST2.jpg" alt="" />
    <p>
      La seule chose qu'on est sûr de ne pas réussir est celle que l'on ne tente
      pas
    </p>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.container {
  height: calc(100vh - #{$scrolledHeaderHeight});
  display: flex;
  flex-direction: row;
  margin-bottom: $homeElementsBottomMargin;

  img {
    flex: 33%;
    padding: 2% 10%;

    @media screen and (max-width: 660px) {
      margin-bottom: 15%;
    }
  }

  p {
    flex: 66%;
    font-size: 35px;
    padding: 10%;
    color: $fontColor;

    @media screen and (max-width: 660px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
  }

  @media screen and (max-width: 660px) {
    flex-direction: column-reverse;
  }
}
</style>