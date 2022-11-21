<template>
  <div class="container">
    <div class="priceInfoContainer">
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
    </div>

    <div class="listContainer">
      <div
        class="productListItem"
        v-for="(item, index) in getCompactedList"
        :key="index"
      >
        <img :src="item.media" @click="toProductView(item.id)" />
        <div class="itemText">
          <h3 class="itemName" @click="toProductView(item.id)">
            {{ item.nom }}
          </h3>
          <p>{{ item.matiere }}</p>
          <p v-if="item.categorie === 'Boucle d\'Oreille'">l'unité</p>
          <p>{{ item.prix }}€</p>
          <p v-if="item.categorie === 'Bague'">Taille: {{ item.size }}</p>
        </div>
        <p>{{ item.nbItem }}</p>
      </div>
    </div>
    <div class="infoContainer">
      <p>
        Le délai de fabrication et de livraison est de 3 à 6 semaines maximum.
        <a href="/retours-et-livraison"
          >retrouvez toutes les informations ici.</a
        >
      </p>
      <p class="secure">
        <img src="../../assets/lock.svg" alt="" />SUN Jewelry utilise un système
        de paiement sécurisé.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: this.$store.state.cart,
    };
  },

  computed: {
    getCompactedList() {
      var compactedList = [];

      this.productList.forEach((cartItem) => {
        const existingIndex = compactedList.findIndex(
          (item) => item.id === cartItem.id
        );

        if (existingIndex != -1) {
          if (cartItem.categorie !== "Bague") {
            compactedList[existingIndex].nbItem += 1;
          } else if (compactedList[existingIndex].size == cartItem.size) {
            compactedList[existingIndex].nbItem += 1;
          } else {
            const newProduct = { ...cartItem, nbItem: 1 };
            compactedList.push(newProduct);
          }
        } else {
          const newProduct = { ...cartItem, nbItem: 1 };
          compactedList.push(newProduct);
        }
      });

      return compactedList;
    },
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
    toProductView(id) {
      this.$router.push({
        name: "productDetail",
        params: { id: id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.container {
  width: 90%;
  border: 0.5px solid $lightBlue;
  color: $fontColor;

  .priceInfoContainer {
    font-size: 20px;
    width: 80%;
    margin: 5% auto;
    .flexContainer {
      display: flex;
      justify-content: space-between;

      p {
        margin: 10px 0;
      }
    }
  }

  .listContainer {
    height: 30vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .productListItem {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      > * {
        margin: auto 7%;
      }

      img {
        width: 15%;
        cursor: pointer;
      }

      .itemText {
        width: 100%;

        .itemName {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }

        > * {
          margin: 5%;
        }
      }
    }
  }

  .infoContainer {
    width: 85%;
    text-align: center;
    margin: auto;

    a {
      color: $fontColor;
    }

    .secure {
      img {
        width: 15px;
        margin-right: 10px;
      }
    }
  }

  @media screen and (max-width: 660px) {
    width: 100%;
  }
}
</style>