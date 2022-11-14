<template>
  <div class="visionContainer">
    <div class="textContainer">
      <h2>La vision :</h2>
      <p>Pourquoi avoir choisi ce nom ?</p>
      <p>
        Outre le fait que SUN soit l'anagramme de Songe d'une Nuit, une
        symbolique forte se cache derrière. Je trouve très intéressant de
        travailler sur la dualité Jour/Nuit, mais également tous les messages
        qui en découlent :
      </p>
      <p>
        Coté Sun : Fort.e et sûr.e de toi, part à la conquête de tes objectifs.
        Ton bijou est comme une armure, une amulette de protection qui canalise
        et diffuse ton pouvoir pour briller dans tout ce que tu entreprends.
      </p>
      <p>
        Coté Nuit : intime, murmure tes rêves et tes envies, ils seront écoutés.
        Ton bijou est ton meilleur ami, ton confident. Il veille sur tes
        souvenirs pour te les chuchoter à l'oreille quand tu en as besoin.
      </p>
      <p>
        Entre Jour et Nuit, pourquoi choisir ? Les bijoux SUN Jewelry sont le
        pont entre ces deux faces d'une même pièce. Elles sont complémentaires
        et grâce à cet équilibre, tu seras à même de dévoiler ton plein pouvoir
        qui te fera rayonner aux yeux du monde.
      </p>
    </div>

    <div class="citationContainer">
      <p>
        Te permettre de rêver et rayonner : telle est la mission que je me suis
        donnée et la ligne directrice que je souhaite donner à mes créations.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../shared/styles/variables.scss";

.visionContainer {
  width: 75%;
  margin: auto;
  font-size: 20px;
  text-align: justify;

  .textContainer {
    padding-left: 5%;
    padding-right: 5%;
  }

  .citationContainer {
    background-color: $lightBlue;
    padding: 20px;
    margin: auto;
    text-align: center;
    margin: 5% auto;
  }
}
</style>