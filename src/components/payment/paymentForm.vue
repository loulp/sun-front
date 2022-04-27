<template>
  <div class="container">
    <form id="payment-form" ref="paymentForm">
      <div id="payment-element">
        <!--Stripe.js injects the Payment Element-->
      </div>
      <button v-if="formLoad" id="submit">
        <div class="spinner hidden" id="spinner"></div>
        <span id="button-text" @click="submit()">Pay now</span>
      </button>
      <div id="payment-message" class="hidden"></div>
    </form>
    <button class="paymentButton" @click="submit()">Payer</button>
    <span>Paiment sécurisé</span>
  </div>
</template>

<script>
import productService from "@/shared/services/products.services";

// IMPORTANT COMMENT, dodge lint error on import
/* global Stripe */
const stripe = Stripe(process.env.VUE_APP_STRIPE_KEY);

export default {
  props: {
    userForm: null,
  },

  data() {
    return {
      formLoad: false,
      clientSecret: null,
      elements: null,
      productList: [],
      stripeKey: process.env.VUE_APP_STRIPE_KEY,
    };
  },

  mounted() {
    this.productList = this.$store.state.cart;
    this.paying();
    this.checkStatus();
  },

  methods: {
    async paying() {
      const body = {
        nom: "nom",
        prenom: "prenom",
        email: "email@email.com",
        adresse: "adresse",
        prix_total: 10,
        produits: {},
        date: Date.now(),
      };

      await productService.payment(body).then(
        (res) => {
          this.clientSecret = res.data;
          console.log(`paying success : `);
          console.log(res);
        },
        (err) => {
          console.log(`paying error : ${err}`);
        }
      );

      const appearance = {
        theme: "stripe",
        variables: {
          colorPrimary: "#efdebd",
        },
      };

      const clientSecret = this.clientSecret;
      this.elements = stripe.elements({ appearance, clientSecret });

      const paymentElement = this.elements.create("payment");

      paymentElement.mount(this.$refs.paymentForm);

      this.formLoad = true;
    },

    async submit() {
      const body = {
        nom: "doe",
        prenom: "john",
        email: "mail@mail.com",
        adresse: "adresse",
        prix_total: 10,
        produits: {},
        date: Date.now(),
      };
      productService.createOrder(body).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );

      const elements = this.elements;
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:8081/panier",
          receipt_email: "louislepogam@gmail.com",
        },
      });

      if (error.type === "card_error" || error.type === "validation_error") {
        console.log("SUBMIT ERROR");
      } else {
        console.log("SUBMIT UNEXPECTED");
      }
    },

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
          console.log("Payment succeeded!");
          break;
        case "processing":
          console.log("Your payment is processing.");
          break;
        case "requires_payment_method":
          console.log("Your payment was not successful, please try again.");
          break;
        default:
          console.log("Something went wrong.");
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#payment-form {
  width: 75%;
}

.paymentButton {
  width: fit-content;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 15px;
  cursor: pointer;
  margin: 5% 0;
  background-color: #efdebd;
  color: white;
}
</style>