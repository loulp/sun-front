<template>
  <div class="container">
    <div v-if="paymentStatus === 'TBD'">
      <h2>Finalisation de votre commande</h2>
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
      <!-- TODO améliorer l'affichage -->
      <div class="viewContainer">
        <div v-if="paymentStatus === 'SUCCESS'">SUCCESS</div>
        <div v-if="paymentStatus === 'PROCESSING'">PROCESSING</div>
        <div v-if="paymentStatus === 'FAILED'">FAILED</div>
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
    console.log(`Payment mounted & payment status : ${this.paymentDone}`);
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

      console.log("CLIENT SECRET");
      console.log(clientSecret);

      if (!clientSecret) {
        return;
      }

      const { paymentIntent } = await stripe.retrievePaymentIntent(
        clientSecret
      );

      switch (paymentIntent.status) {
        case "succeeded":
          console.log("Payment succeeded!");
          // TODO vider le panier / le cache
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
.container {
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