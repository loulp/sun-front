<template>
  <div class="mainContainer">
    <!-- TODO virer, creer composant -->
    <div v-if="showPopin" class="modal-mask">
      <div class="modal-wrapper">
        <div v-if="showPopin" class="modal-container">
          <p>
            Les commandes via le site web sont temporairement indisponibles.
            Pour toutes commandes vous pouvez toujours me contacter via le
            <a href="/contact" target="_blank" class="link"
              >formulaire de contact</a
            >
            ou sur
            <a
              href="https://www.instagram.com/s.u.n.jewelry/"
              target="_blank"
              class="link"
              >instagram</a
            >
          </p>
          <button @click="showUnavailablePopin()" class="mainButton">
            Retour
          </button>
        </div>
      </div>
    </div>
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
        @click="showUnavailablePopin()"
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
  metaInfo: {
    title: "Panier",
    link: [{ rel: "canonical", href: "https://sunjewelry.fr/panier" }],
  },
  components: { ItemList },

  data() {
    return {
      productList: [],
      showPopin: false
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
    showUnavailablePopin() {
      this.showPopin = !this.showPopin;
    },
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

//TODO sortir de la
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;

    .modal-container {
      width: 40%;
      max-width: 400px;
      min-width: 250px;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: white;
      border-radius: 10px;
      border: 1px solid $mainColor;

      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;

      text-align: center;
      .link {
        color: $fontColor;
      }
    }
  }
}
</style>