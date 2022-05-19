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
import paymentService from "@/shared/services/payment.services";

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
    this.initPayment();
  },

  methods: {
    async initPayment() {
      const body = this.makeBody();

      await paymentService.payment(body).then(
        (res) => {
          this.clientSecret = res.data;
          console.log(`order creation successfull : `);
          console.log(res);
        },
        (err) => {
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
      const body = this.makeBody();

      paymentService.createOrder(body).then(
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
          return_url: "http://localhost:8081/payment",
          //TODO set to customer email
          receipt_email: "louislepogam@gmail.com",
        },
      });

      if (error.type === "card_error" || error.type === "validation_error") {
        console.log("SUBMIT ERROR");
      } else {
        console.log("SUBMIT UNEXPECTED");
      }
    },

    makeBody() {
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
      };

      console.log(body);

      return body;
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

@media screen and (max-width: 660px) {
  .container {
    margin-top: 10%;
  }

  #payment-form {
    width: 100%;
  }
}
</style>