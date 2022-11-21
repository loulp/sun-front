<template>
  <div class="container">
    <div v-if="paymentStatus === 'TBD'">
      <h2 class="title">Finalisation de votre commande</h2>

      <div class="viewContainer">
        <div class="stepContainer">
          <div class="stepTitleContainer">
            <h2 class="stepTitle">1. Livraison</h2>
            <p
              class="editButton"
              v-if="deliveryForm"
              @click="step = 'DELIVERY_FORM'"
            >
              Modifier
            </p>
          </div>

          <DeliveryForm
            v-if="step === 'DELIVERY_FORM'"
            :deliveryForm="deliveryForm"
            @submitted="
              deliveryForm = $event;
              step = 'BILLING_FORM';
            "
          />

          <div class="stepTitleContainer">
            <h2 class="stepTitle">2. Facturation</h2>
            <p
              class="editButton"
              v-if="billingForm"
              @click="step = 'BILLING_FORM'"
            >
              Modifier
            </p>
          </div>

          <BillingForm
            v-if="step === 'BILLING_FORM'"
            :deliveryForm="deliveryForm"
            :billingForm="billingForm"
            @submitted="
              billingForm = $event;
              step = 'PAYMENT_FORM';
            "
          />

          <div class="stepTitleContainer">
            <h2 class="stepTitle">3. Paiement</h2>
          </div>
          <PaymentForm
            v-if="step === 'PAYMENT_FORM'"
            :deliveryForm="deliveryForm"
            :billingForm="billingForm"
          />
        </div>
        <div class="cartRecapContainer">
          <CartRecap />
        </div>
      </div>
    </div>

    <div v-if="paymentStatus != 'TBD'">
      <payment-status :paymentStatus="paymentStatus" />
    </div>
  </div>
</template>

<script>
import DeliveryForm from "../components/payment/deliveryForm.vue";
import BillingForm from "../components/payment/billingForm.vue";
import CartRecap from "../components/payment/cartRecap.vue";
import PaymentForm from "../components/payment/paymentForm.vue";
import PaymentStatus from "../components/payment/paymentStatus.vue";

// IMPORTANT COMMENT, dodge lint error on import
/* global Stripe */
const stripe = Stripe(process.env.VUE_APP_STRIPE_KEY);

export default {
  components: {
    CartRecap,
    PaymentForm,
    DeliveryForm,
    BillingForm,
    PaymentStatus,
  },

  data() {
    return {
      step: "DELIVERY_FORM",
      deliveryForm: null,
      billingForm: null,
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
    margin: 2% auto;

    .stepContainer {
      width: 60%;

      .stepTitleContainer {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .stepTitle {
          border-bottom: 1px solid #707070;
          width: 60%;
          margin: 3% 0;
        }
        .editButton {
          cursor: pointer;
        }
        @media screen and (max-width: 660px) {
          width: 85%;
        }
      }
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