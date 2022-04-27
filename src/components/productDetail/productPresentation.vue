<template>
  <div class="container">
    <div class="namePriceContainer">
      <h3>{{ product.attributes.nom }}</h3>
      <p>Prix: {{ product.attributes.prix }}</p>
    </div>
    <div class="description">{{ product.attributes.description }}</div>
    <div>
      <div class="fingerSize">
        <p>Taille de doigt :</p>
        <select name="fingerSize" id="fingerSize">
          <option
            class="selectSizeOptions"
            v-for="size in getSizes"
            :key="size"
            :value="size"
          >
            {{ size }}
          </option>
        </select>
      </div>
      <router-link
        :to="{
          name: 'Home',
        }"
        >* Consulter le guide des tailles *</router-link
      >
    </div>
    <button class="cartButton" @click="addToCart()">Ajouter au panier</button>
  </div>
</template>

<script>
export default {
  props: {
    product: null,
  },

  computed: {
    getSizes() {
      const sizes = [];
      for (let i = 43; i < 61; i++) {
        sizes.push(i);
      }
      return sizes;
    },
  },

  methods: {
    addToCart() {
      const selectSize = document.getElementById("fingerSize");
      this.$store.commit("addItemToCart", {
        product: this.product,
        size: selectSize.value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5%;

  > * {
    margin-bottom: 10%;
  }

  p {
    margin-left: 0;
  }

  .namePriceContainer {
    h3 {
      margin-top: 0;
    }
    p {
      color: #707070;
    }
  }

  .fingerSize {
    display: flex;
    flex-direction: row;
    align-items: center;

    select {
      height: 30px;
      width: 50px;
      padding-left: 2%;

      margin-left: 5%;

      border: none;
      border-bottom: 1px solid black;

      .selectSizeOptions {
        margin: 5%;
      }
    }
  }

  .description {
    width: 75%;
  }

  .cartButton {
    width: fit-content;
    border: none;
    padding: 3% 10%;
    font-size: 18px;
    border-radius: 15px;
    cursor: pointer;
  }
}
</style>