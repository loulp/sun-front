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
    <button class="paymentButton" @click="submit()">Payer</button>
    <!-- TODO ajoutez message rassurant-->
    <!-- <span>Paiment sécurisé</span> -->
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
    userForm: null,
  },

  data() {
    return {
      formLoad: false,
      clientSecret: null,
      elements: null,
      productList: [],
      stripeKey: process.env.VUE_APP_STRIPE_KEY,
      body: null,
      loading: false,
    };
  },

  mounted() {
    this.productList = this.$store.state.cart;
    this.initPayment();
  },

  methods: {
    async initPayment() {
      this.loading = !this.loading;
      this.createBody();

      await paymentService.payment(this.body).then(
        (res) => {
          this.clientSecret = res.data.client_secret;
          this.body.paymentIntent = res.data.id;
          this.loading = !this.loading;
          console.log(`order creation successfull : `);
          console.log(res);
        },
        (err) => {
          this.loading = !this.loading;
          console.log(`order creation error : ${err}`);
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
      paymentService.createOrder(this.body).then(
        (res) => {
          console.log(res);
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
          // TODO change to prod url
          return_url: "http://localhost:8081/payment",
          //TODO set to customer email
          receipt_email: "louislepogam@gmail.com",
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
        nom: this.userForm.lastname,
        prenom: this.userForm.firstname,
        email: this.userForm.email,
        adresse: `${this.userForm.address} ${this.userForm.postalCode}`,
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
}

.paymentButton {
  width: fit-content;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 15px;
  cursor: pointer;
  margin: 5% 0;
  background-color: $mainColor;
  color: white;
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