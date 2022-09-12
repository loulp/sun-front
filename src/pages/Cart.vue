<template>
  <div class="mainContainer">
    <div class="itemList">
      <h2>Votre panier</h2>
      <ItemList v-if="productList.length > 0" :productList="productList" />
      <div class="emptyMessageContainer" v-if="productList.length === 0">
        <p>
          Votre panier est vide pour le moment, consultez la boutique pour
          découvrir nos bijoux !
        </p>
        <button @click="sendShowMenuEvent()" class="paymentButton">
          Boutique
        </button>
      </div>
    </div>
    <div class="priceAnbutton">
      <p>Prix total: {{ totalPrice }}€</p>
      <button
        @click="toPayment()"
        class="paymentButton"
        :disabled="productList.length === 0"
      >
        Paiement
      </button>
    </div>
  </div>
</template>

<script>
import ItemList from "../components/cart/itemList.vue";
import EventBus from "@/shared/eventBus.js";

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

    sendShowMenuEvent() {
      EventBus.$emit("showShopMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../shared/styles/variables.scss";

.mainContainer {
  display: flex;
  flex-direction: row;

  .itemList {
    flex: 85%;

    h2 {
      margin-left: 3%;
    }

    .emptyMessageContainer {
      width: 66%;
      margin: 5% auto;

      .paymentButton {
        margin-top: 3%;
        width: fit-content;
        background-color: $mainColor;
        color: white;
        border: none;
        padding: 2% 4%;
        font-size: 14px;
        cursor: pointer;
      }
    }
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
      background-color: $mainColor;
      color: white;
      border: none;
      padding: 10% 25%;
      font-size: 18px;
      cursor: pointer;

      &:disabled {
        background-color: #efeeed;
      }
    }
  }

  margin-bottom: 3%;
  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
}
</style>