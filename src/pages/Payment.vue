<template>
  <div class="container">
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
        <PaymentForm v-if="step === 'PAYMENT_FORM'" :userForm="userForm"/>
      </div>
      <div class="cartRecapContainer">
        <CartRecap />
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "../components/payment/userForm.vue";
import CartRecap from "../components/payment/cartRecap.vue";
import PaymentForm from "../components/payment/paymentForm.vue";

export default {
  components: { CartRecap, PaymentForm, UserForm },

  data() {
    return {
      step: "USER_FORM",
      userForm: null,
    };
  },

  watch: {
    step() {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
  }
}
</style>