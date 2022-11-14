<template>
  <div class="container">
    <div v-if="paymentStatus === 'TBD'">
      <h2 class="title">Finalisation de votre commande</h2>
      <div class="viewContainer">
        <div class="stepContainer">
          <UserForm
            v-if="step === 'USER_FORM'"
            @submitted="
              userForm = $event;
              step = 'PAYMENT_FORM';
            "
          />
          <PaymentForm v-if="step === 'PAYMENT_FORM'" :userForm="userForm" />
        </div>
        <div class="cartRecapContainer">
          <CartRecap />
        </div>
      </div>
    </div>
    <div v-if="paymentStatus != 'TBD'">
      <div class="viewContainer">
        <div
          class="stateInformations success"
          v-if="paymentStatus === 'SUCCESS'"
        >
          <h2>Le paiement a bien été effectué !</h2>
          <img src="@/assets/successIcon.svg" alt="" />
          <p>
            Nous vous remercions pour votre commande et votre confiance. Vous
            recevrez sous peu un mail de confirmation à l'adresse mail indiqué
            lors de la commande.
          </p>
        </div>
        <div
          class="stateInformations loading"
          v-if="paymentStatus === 'PROCESSING'"
        >
          <h2>La validation de votre paiement est toujours en cours</h2>
          <img src="@/assets/loadingIcon.svg" alt="" />
          <p>
            Nous vous remercions pour votre commande et votre confiance. Vous
            recevrez sous peu un mail vous confirmant le statut de votre
            commande à l'adresse mail indiqué lors de la commande.
          </p>
        </div>
        <div class="stateInformations error" v-if="paymentStatus === 'FAILED'">
          <h2>Une erreur est survenue lors du paiement</h2>
          <img src="@/assets/errorIcon.svg" alt="" />
          <p>
            Une erreur est survenue lors du paiement, celui ci n'a pas été
            validé et la commande n'a pas pus être enregistré. merci de bien
            vouloir réessayer.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "../components/payment/userForm.vue";
import CartRecap from "../components/payment/cartRecap.vue";
import PaymentForm from "../components/payment/paymentForm.vue";

// IMPORTANT COMMENT, dodge lint error on import
/* global Stripe */
const stripe = Stripe(process.env.VUE_APP_STRIPE_KEY);

export default {
  components: { CartRecap, PaymentForm, UserForm },

  data() {
    return {
      step: "USER_FORM",
      userForm: null,
      paymentStatus: "TBD",
    };
  },

  mounted() {
    this.checkStatus();
  },

  watch: {
    step() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

  methods: {
    async checkStatus() {
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );

      if (!clientSecret) {
        return;
      }

      const { paymentIntent } = await stripe.retrievePaymentIntent(
        clientSecret
      );

      switch (paymentIntent.status) {
        case "succeeded":
          this.$store.commit("emptyCart");
          this.paymentStatus = "SUCCESS";
          break;
        case "processing":
          console.log("Your payment is processing.");
          this.paymentStatus = "PROCESSING";
          break;
        case "requires_payment_method":
          console.log("Your payment was not successful, please try again.");
          this.paymentStatus = "FAILED";
          break;
        default:
          console.log("Something went wrong.");
          this.paymentStatus = "FAILED";
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../shared/styles/variables.scss";

.container {
  .title {
    padding-top: 5%;
    margin-left: 5%;
    color: $fontColor;
  }

  .viewContainer {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 5% auto;

    .stepContainer {
      width: 60%;
    }
    .cartRecapContainer {
      width: 40%;
    }

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

    @media screen and (max-width: 660px) {
      flex-direction: column-reverse;

      .stepContainer {
        width: auto;
      }
      .cartRecapContainer {
        width: auto;
      }
    }
  }
}
</style>