<template>
  <div class="mainContainer">
    <div class="itemList">
      <h2>Votre panier</h2>
      <ItemList v-if="productList.length > 0" :productList="productList" />
    </div>
    <div class="priceAnbutton">
      <p>Prix total: {{ totalPrice }}€</p>
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
.mainContainer {
  display: flex;
  flex-direction: row;

  .itemList {
    flex: 85%;
  }

  .priceAnbutton {
    flex: 15%;
    font-size: 22px;

    width: fit-content;
    margin-right: 5%;
    margin-top: 10%;
    margin-left: auto;

    .paymentButton {
     margin-top: 3%;
    width: fit-content;
    background-color: #efdebd;
    color: white;
    border: none;
    padding: 10% 25%;
    font-size: 18px;
    cursor: pointer;
    }
  }
}
</style>