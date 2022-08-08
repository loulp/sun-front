<template>
  <div class="container">
    <div class="namePriceContainer">
      <h3>{{ product.attributes.nom }}</h3>
      <p>Prix: {{ product.attributes.prix }}€</p>
    </div>
    <vue-markdown-it
      v-if="product.attributes.description"
      :source="product.attributes.description"
      id="editor"
    />
    <div v-if="product.attributes.category.data.attributes.type === 'Bague'">
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
        class="sizeGuideLink"
        >*Consulter le guide des tailles</router-link
      >
    </div>
    <button class="cartButton" @click="addToCart()">Ajouter au panier</button>
  </div>
</template>

<script>
import VueMarkdownIt from "vue-markdown-it";

export default {
  props: {
    product: null,
  },

  components: {
    VueMarkdownIt,
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
@import "../../shared/styles/variables.scss";

.container {
  margin-top: 3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 15%;

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

  #editor {
    width: 75%;
    overflow: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .sizeGuideLink {
    color: black;
  }

  .cartButton {
    width: fit-content;
    background-color: $mainColor;
    color: white;
    border: none;
    padding: 3% 10%;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>