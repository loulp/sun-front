<template>
  <div class="container">
    <div class="mediaContainer">
      <img src="../../assets/photoCollection/homeLifestyle.jpg" alt="" />
    </div>
    <div class="textContainer">
      <div class="citationContainer">
        <p class="citation">
          La seule chose qu'on est sûr de ne pas réussir est celle qu'on ne
          tente pas
        </p>
        <p class="name">- Paul-Emile Victor</p>
      </div>

      <p class="text">
        <span style="font-style: italic">Croire en ses rêves</span>, c'est notre
        mantra<br /><br />
        Nous croyons en vous et votre capacité à réaliser tout ce que vous
        désirez ! Dans cette quête, parfois, on a besoin d'un coup de pouce ou
        de réconfort. Nos bijoux sont conçus pour ça, ils sont votre meilleur
        ami.
      </p>
    </div>
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

  .mediaContainer {
    flex: 2;
    text-align: center;

    img {
      height: calc(100vh - #{$scrolledHeaderHeight});
      @media screen and (max-width: 660px) {
        height: auto;
        width: 90%;
        margin-bottom: 15%;
      }
    }
  }

  .textContainer {
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: justify;

    .citationContainer {
      width: 75%;
    }

    .text {
      font-size: 18px;
      color: $fontColor;
      width: 75%;

      @media screen and (max-width: 660px) {
        padding: 0;
        margin: 5%;
      }
    }

    .citation {
      width: 75%;
      font-size: 22px;
      margin-bottom: 0;
      position: relative;

      &::before {
        content: url("../../assets/quote.svg");
        display: inline-block;
        position: absolute;
        width: 15px;
        height: 15px;
        top: -35px;
        left: -25px;
      }
      &::after {
        content: url("../../assets/quote.svg");
        display: inline-block;
        position: absolute;
        width: 15px;
        height: 15px;
        bottom: 5px;
      }
    }
    .name {
      width: 75%;
      font-size: 22px;
      text-align: end;
    }
  }

  @media screen and (max-width: 660px) {
    height: auto;
    flex-direction: column-reverse;
  }
}
</style>