<template>
  <div class="container">
    <h2>Votre panier</h2>
    <ItemList v-if="productList.length > 0" :productList="productList" />
    <div class="priceAnbutton">
      <p>Prix total: {{ totalPrice }}</p>
      <button @click="toPayment()" class="paymentButton">Paiement</button>
    </div>
  </div>
</template>

<script>
import ItemList from "../components/cart/itemList.vue";

export default {
  components: { ItemList },

  data() {
    return {
      productList: [],
    };
  },

  mounted() {
    this.getProducts();
  },

  computed: {
    totalPrice() {
      let total = 0;
      if (this.productList.length > 0) {
        this.productList.forEach((item) => {
          total = total + item.prix;
        });
      }

      return total;
    },
  },

  methods: {
    getProducts() {
      this.productList = this.$store.state.cart;
    },

    toPayment() {
      this.$router.push({ name: "Payment" });
    },
  },
};
</script>

<style lang="scss" scoped>
.priceAnbutton {
  width: fit-content;
  margin-right: 10%;
  margin-left: auto;

  .paymentButton {
    width: fit-content;
    border: none;
    padding: 10% 25%;
    font-size: 18px;
    border-radius: 15px;
    cursor: pointer;
  }
}
</style>