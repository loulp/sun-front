<template>
  <div class="mainContainer">
    <div class="historyContainer">
      <div class="mediaContainer">
        <img class="media" src="../../../assets/crea1.png" alt="" />
        <img class="media" src="../../../assets/crea2.png" alt="" />
        <img class="media" src="../../../assets/crea3.png" alt="" />
      </div>
      <div class="textContainer">
        <div class="titleContainer">
          <h1>
            <img class="titleIcon" src="../../../assets/starIcon.png" />
            Typhen LE ROMANCER
          </h1>
          <p>Fondatrice de SUN Jewelry</p>
        </div>
        <div class="text">
          <p>
            Après un stage découverte, à 15 ans, je pars suivre une formation de
            bijouterie. J'y ressortirai 4 ans plus tard, diplômée d'un CAP et
            d'un BMA Art du bijou et du joyau. Plus qu'une formation, une
            rencontre : celle d'un métier qui deviendra ma passion.
          </p>
          <p>
            Ainsi, c'est au bout de 10 ans au sein de plusieurs ateliers,
            travaillant pour les grands noms de la place Vendôme en tant que
            joaillière et après avoir rejoint l'atelier d'une célèbre maison
            française ; L'envie de créer et de liberté se fait plus pressante.
          </p>
          <p>
            Comme une évidence sur le chemin que je devais emprunter, je décide
            de tout quitter et créer SUN Jewelry acronyme de Songe d'une Nuit.
            Nouvelle expérience de vie, j'y plonge avec grand plaisir afin de
            m'épanouir pleinement dans ce magnifique métier qu'est la
            Joaillerie.
          </p>
        </div>
      </div>
    </div>
    <div class="citationContainer">
      <p>
        « Faites ce que vous aimez faire, et faites-le avec autant de sérieux
        que de légèreté. Au moins, vous saurez que vous avez essayé et que -
        quelle que soit l'issue - vous avez emprunté un noble chemin. »
      </p>
      <p>Elizabeth Gilbert</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../shared/styles/variables.scss";

.historyContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .mediaContainer {
    text-align: center;
    flex: 1;
    margin-top: 3%;

    .media {
      margin: 2% 15%;
      width: 30%;
    }
  }

  .textContainer {
    flex: 1;
    padding-right: 10%;
    margin-top: 10%;

    .titleContainer {
      width: 66%;

      h1 {
        width: fit-content;
        margin: auto;
        text-align: center;
        border-bottom: 2px solid $lightBlue;

        padding: 3% 10px 0 10px;

        .titleIcon {
          width: 30px;
          margin-right: 10px;
          margin-bottom: -5px;
        }

        @media screen and (max-width: 660px) {
          margin-bottom: 15%;
        }
      }
      p {
        margin: 0;
        text-align: end;
      }
    }

    .text {
      font-size: 20px;
      p {
        margin: 7% auto;
        line-height: 1.5;
      }
    }
    @media screen and (max-width: 660px) {
      padding-right: 0;
    }
  }

  @media screen and (max-width: 660px) {
    margin: auto 5%;
    flex-direction: column-reverse;
  }
}

.citationContainer {
  background-color: $lightBlue;
  width: 80%;
  padding: 20px;
  margin: auto;
  text-align: center;
  font-size: 18px;
  margin: 5% auto;
}
</style>