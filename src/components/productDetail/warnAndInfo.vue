<template>
  <div class="infoContainer">
    <div class="warn">
      <p>
        Votre bijou étant réalisé à la commande, nous vous rappelons que le
        délai de fabrication est compris entre 3 et 6 semaines.
      </p>
    </div>

    <div class="info">
      <p>
        Votre bijou est comme vous, il est unique.<br />Chaque bijou est
        accompagné d'un certificat d'authenticité.
      </p>
      <p>
        Chaque pièce est fabriquée à la main dans notre atelier Lyonnais, par
        des mains ayant à coeur l'amour du métier de la joaillerie.<br />Nous
        accordons la plus grande attention aux détails et avons recours aux
        technologies les plus récentes. Chacune de nos pièces subit de stricts
        contrôles de qualité.
      </p>
      <p>
        Tous nos bijoux sont réalisés en or 18k et certifié RJC-CoC
        (certification garantissant l'application de normes éthiques et une
        traçabilité totale).
      </p>
      <p>
        Chaque diamant faisant plus de 0,30ct est accompagné d'un certificat.<br />Les
        couleurs de nos diamants sont classées D, E ou F et leurs puretés VVS ou
        VS.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.infoContainer {
  .warn {
    margin: 5% auto;
    padding: 10px;
    text-align: center;
    width: 30%;
    border: 1px solid #d44a7b;
    @media screen and (max-width: 660px) {
      width: 75%;
    }
  }

  .info {
    margin: 5% auto;
    width: 80%;
    text-align: center;
  }
}
</style>