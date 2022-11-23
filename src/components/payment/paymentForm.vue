<template>
  <div class="container">
    <spinner v-if="loading" />
    <form id="payment-form" ref="paymentForm" v-if="!loading">
      <div id="payment-element">
        <!--Stripe.js injects the Payment Element-->
      </div>
      <button v-if="formLoad" id="submit">
        <div class="spinner hidden" id="spinner"></div>
        <span id="button-text" @click="submit()">Pay now</span>
      </button>
      <div id="payment-message" class="hidden"></div>
    </form>
    <div class="CGVCheckbox">
      <input
        type="checkbox"
        v-model="isCGVaccepted"
        value="false"
        id="cgv"
        name="cgv"
      />
      <label for="cgv"
        >En cochant cette case vous confirmez avoir lu et accepté nos
        <a href="/contact">Conditions Générales de Ventes</a>
      </label>
    </div>
    <button
      class="paymentButton"
      @click="submit()"
      type="submit"
      :disabled="!isCGVaccepted"
    >
      Payer
    </button>
  </div>
</template>

<script>
import paymentService from "@/shared/services/payment.services";
import spinner from "../../shared/components/spinner.vue";

// IMPORTANT COMMENT, dodge lint error on import
/* global Stripe */
const stripe = Stripe(process.env.VUE_APP_STRIPE_KEY);

export default {
  components: { spinner },
  props: {
    deliveryForm: null,
    billingForm: null,
  },

  data() {
    return {
      formLoad: false,
      clientSecret: null,
      elements: null,
      stripeKey: process.env.VUE_APP_STRIPE_KEY,
      body: null,
      loading: false,
      isCGVaccepted: false,
    };
  },

  mounted() {
    this.initPayment();
  },

  methods: {
    async initPayment() {
      this.loading = !this.loading;
      this.createBody();

      await paymentService.createPaymentIntent(this.body).then(
        (res) => {
          this.clientSecret = res.data.client_secret;
          this.body.paymentIntent = res.data.id;
          this.loading = !this.loading;
        },
        (err) => {
          this.loading = !this.loading;
          console.log(`order creation error : ${err}`);
        }
      );

      const appearance = {
        theme: "stripe",
        variables: {
          colorPrimary: "#d44a7b",
        },
      };

      const clientSecret = this.clientSecret;
      this.elements = stripe.elements({ appearance, clientSecret });

      const paymentElement = this.elements.create("payment");

      paymentElement.mount(this.$refs.paymentForm);

      this.formLoad = true;
    },

    async submit() {
      paymentService.createOrder(this.body).then(
        (res) => {
          this.loading = !this.loading;
        },
        (err) => {
          console.log(err);
          this.loading = !this.loading;
        }
      );

      const elements = this.elements;
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // return_url: "http://localhost:8081/payment",
          // return_url: "https://sun-test.netlify.app/payment",
          return_url: "https://sunjewelry.fr/payment",
          receipt_email: this.deliveryForm.email,
        },
      });

      // TODO message d'erreur ici
      if (error.type === "card_error" || error.type === "validation_error") {
        console.log("SUBMIT ERROR");
      } else {
        console.log("SUBMIT UNEXPECTED");
      }
    },

    createBody() {
      const products = this.$store.state.cart;

      let totalPrice = () => {
        let total = 0;
        if (products.length > 0) {
          products.forEach((item) => {
            total = total + item.prix;
          });
        }

        return total;
      };

      const body = {
        LIVR_nom: this.deliveryForm.lastname,
        LIVR_prenom: this.deliveryForm.firstname,
        LIVR_telephone: this.deliveryForm.phoneNumber,
        LIVR_adresse: `${this.deliveryForm.address}, ${this.deliveryForm.postalCode}, ${this.deliveryForm.city}`,
        LIVR_retrait_atelier: this.deliveryForm.handPickup,
        FACT_nom: this.billingForm.lastname,
        FACT_prenom: this.billingForm.firstname,
        FACT_telephone: this.billingForm.phoneNumber,
        FACT_adresse: `${this.billingForm.address}, ${this.billingForm.postalCode}, ${this.billingForm.city}`,
        suivi_commande: this.deliveryForm.followupChoice,
        email: this.deliveryForm.email,
        prix_total: totalPrice(),
        produits: products,
        date: Date.now(),
        PaymentIntent: null,
        PaymentConfirmed: false,
      };

      this.body = body;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

#payment-form {
  width: 75%;
  margin: 5% 0;
}

.CGVCheckbox {
  margin-top: 5%;
}

.paymentButton {
  width: fit-content;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  margin: 5% 0;
  background-color: $mainColor;
  color: white;

  &:disabled {
    background-color: grey;
  }
}

@media screen and (max-width: 660px) {
  .container {
    margin-top: 10%;
  }

  #payment-form {
    width: 100%;
  }
}
</style>