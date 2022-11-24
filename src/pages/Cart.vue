<template>
  <div class="mainContainer">
    <div class="itemList customScrollbar">
      <h2>Votre panier</h2>
      <ItemList v-if="productList.length > 0" :productList="productList" />
      <div class="emptyMessageContainer" v-if="productList.length === 0">
        <p>
          Votre panier est vide pour le moment, consultez la boutique pour
          découvrir nos bijoux !
        </p>
        <button @click="sendShowMenuEvent()" class="mainButton">
          Boutique
        </button>
      </div>
    </div>
    <div class="priceAnbutton">
      <div class="flexContainer">
        <p>sous-total:</p>
        <p>{{ totalPrice }}€</p>
      </div>
      <div class="flexContainer">
        <p>Livraison:</p>
        <p>Gratuite</p>
      </div>
      <hr />
      <div class="flexContainer">
        <p>Total:</p>
        <p>{{ totalPrice }}€</p>
      </div>

      <button
        @click="toPayment()"
        class="mainButton"
        :disabled="productList.length === 0"
      >
        Paiement
      </button>
      <p class="secure">
        <img src="../assets/icon/lock.svg" alt="" />Paiement sécurisé
      </p>
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
      EventBus.$emit("showShopMenu", "SHOP");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../shared/styles/variables.scss";
@import "../shared/styles/customScrollbar.scss";
@import "../shared/styles/mainButton.scss";

.mainContainer {
  display: flex;
  flex-direction: row;
  color: $fontColor;

  .itemList {
    flex: 3;

    h2 {
      margin-left: 3%;
    }

    .emptyMessageContainer {
      width: 66%;
      margin: 5% auto;
    }
  }

  .priceAnbutton {
    flex: 1;
    font-size: 22px;
    text-align: center;

    width: fit-content;
    margin-right: 5%;
    margin-top: 10%;
    margin-left: auto;

    .flexContainer {
      display: flex;
      justify-content: space-between;

      p {
        margin: 10px 0;
      }
    }

    .secure {
      font-size: 20px;
      img {
        width: 15px;
      }
    }

    @media screen and (max-width: 660px) {
      width: 90%;
      margin: 5%;
    }
  }

  margin-bottom: 3%;
  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
}
</style>