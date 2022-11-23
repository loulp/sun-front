<template>
  <div class="mainContainer">
    <div class="historyContainer">
      <div class="mediaContainer">
        <img
          class="media"
          src="../../../assets/photoCollection/vision1.jpg"
          alt=""
        />
        <img
          class="media"
          src="../../../assets/photoCollection/vision2.jpg"
          alt=""
        />
      </div>
      <div class="textContainer">
        <h2>La vision :</h2>
        <div class="text">
          <p>Pourquoi avoir choisi ce nom ?</p>
          <p>
            Outre le fait que SUN soit l'anagramme de Songe d'une Nuit, une
            symbolique forte se cache derrière. Je trouve très intéressant de
            travailler sur la dualité Jour/Nuit, mais également tous les
            messages qui en découlent :
          </p>
          <p>
            Coté Sun : Fort.e et sûr.e de toi, part à la conquête de tes
            objectifs. Ton bijou est comme une armure, une amulette de
            protection qui canalise et diffuse ton pouvoir pour briller dans
            tout ce que tu entreprends.
          </p>
          <p>
            Coté Nuit : intime, murmure tes rêves et tes envies, ils seront
            écoutés. Ton bijou est ton meilleur ami, ton confident. Il veille
            sur tes souvenirs pour te les chuchoter à l'oreille quand tu en as
            besoin.
          </p>
          <p>
            Entre Jour et Nuit, pourquoi choisir ? Les bijoux SUN Jewelry sont
            le pont entre ces deux faces d'une même pièce. Elles sont
            complémentaires et grâce à cet équilibre, tu seras à même de
            dévoiler ton plein pouvoir qui te fera rayonner aux yeux du monde.
          </p>
        </div>
      </div>
    </div>
    <div class="citationContainer">
      <p>
        "Te permettre de rêver et rayonner : telle est la mission que je me suis
        donnée et la ligne directrice que je souhaite donner à mes créations."
      </p>
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
  flex-direction: row-reverse;
  justify-content: space-between;

  .mediaContainer {
    text-align: center;
    flex: 1;

    .media {
      margin: 2% 15%;
      width: 50%;
    }
  }

  .textContainer {
    flex: 1;
    padding-left: 10%;
    margin-top: 5%;

    .titleContainer {
      width: 66%;

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