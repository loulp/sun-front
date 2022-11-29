<template>
  <div class="infoContainer">
    <div class="warn">
      <div class="customMessage">
        <img src="../../assets/starIcon.png" alt="" />
        <p>
          Votre bijou étant réalisé à la commande, Nous vous rappelons que le
          délai de fabrication est compris entre 3 et 6 semaines.
        </p>
      </div>
      <div class="customMessage">
        <img src="../../assets/starIcon.png" alt="" />
        <p>
          Vous aimez ce modèle, mais vous voulez le personnaliser ? contactez
          nous via <a href="/contact">Le formulaire de contact</a> pour créer
          ensemble le bijou de vos rêves.
        </p>
      </div>
    </div>

    <div class="info">
      <p>Votre bijou est comme vous, il est unique.</p>
      <p>
        Chaque bijou est accompagné d’un certificat d’authenticité. Chaque pièce
        est fabriquée à la main dans notre atelier lyonnais, par des mains ayant
        à cœur l'amour du métier de la joaillerie. Nous accordons la plus grande
        attention aux détails et à la qualité.
      </p>
      <p>
        Tous nos bijoux sont réalisés en or 18k recyclé certifié RJC-CoC
        (certification garantissant l’application de normes éthiques et une
        traçabilité totale). De plus, notre partenaire-fournisseur a obtenu le
        label Origine France Garantie qui garanti un produit 100% Français.
      </p>
      <p>
        Chaque diamant faisant plus de 0,25ct est accompagné d'un certificat
        GIA. Les couleurs de nos diamants sont classées D, E ou F leur pureté
        VS. Nos diamants étant naturel, il se peut que certaine taille et forme
        varie légèrement.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.infoContainer {
  .warn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 5%;

    .customMessage {
      flex: 1;
      display: flex;
      text-align: center;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
        margin-right: 5px;
      }

      p {
        width: 80%;
      }

      a {
        color: $fontColor;
      }
    }
  }

  .info {
    margin: 5% auto;
    width: 75%;
    text-align: center;

    p {
      margin: 3% auto;
    }
  }
}
</style>