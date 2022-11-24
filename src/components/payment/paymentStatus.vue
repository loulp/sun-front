<template>
  <div class="viewContainer">
    <div class="stateInformations success" v-if="paymentStatus === 'SUCCESS'">
      <h2>Le paiement a bien été effectué !</h2>
      <img src="@/assets/icon/successIcon.svg" alt="" />
      <p>
        Nous vous remercions pour votre commande et votre confiance. Vous
        recevrez sous peu un mail de confirmation à l'adresse mail indiqué lors
        de la commande.
      </p>
    </div>
    <div
      class="stateInformations loading"
      v-if="paymentStatus === 'PROCESSING'"
    >
      <h2>La validation de votre paiement est toujours en cours</h2>
      <img src="@/assets/icon/loadingIcon.svg" alt="" />
      <p>
        Nous vous remercions pour votre commande et votre confiance. Vous
        recevrez sous peu un mail vous confirmant le statut de votre commande à
        l'adresse mail indiqué lors de la commande.
      </p>
    </div>
    <div class="stateInformations error" v-if="paymentStatus === 'FAILED'">
      <h2>Une erreur est survenue lors du paiement</h2>
      <img src="@/assets/icon/errorIcon.svg" alt="" />
      <p>
        Une erreur est survenue lors du paiement, celui ci n'a pas été validé et
        la commande n'a pas pus être enregistré. merci de bien vouloir
        réessayer.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paymentStatus: null,
  },
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.viewContainer {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 2% auto;
  .stateInformations {
    margin: 5% auto;
    text-align: center;
    width: 60%;
    color: $fontColor;

    img {
      width: 65px;
    }

    p {
      width: 60%;
      margin: 3% auto;
      font-size: 18px;

      @media screen and (max-width: 660px) {
        width: 90%;
        margin: 5% auto;
      }
    }

    @media screen and (max-width: 660px) {
      width: 90%;
    }
  }
}
</style>