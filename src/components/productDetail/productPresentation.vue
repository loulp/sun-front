<template>
  <div class="container">
    <div class="namePriceContainer">
      <div class="textContainer">
        <h3>{{ product.attributes.nom }}</h3>
        <p>Prix: {{ getValue }}€</p>
      </div>
      <img
        @click="addToFav()"
        v-if="!isFav"
        class="favIcon"
        :src="require('../../assets/favIcon.svg')"
        alt=""
      />
      <img
        @click="removeFromFav()"
        v-if="isFav"
        class="favIcon"
        :src="require('../../assets/favIconFill.svg')"
        alt=""
      />
    </div>
    <vue-markdown-it
      v-if="product.attributes.description"
      :source="product.attributes.description"
      id="editor"
    />

    <div class="goldSelectorContainer">
      <label for="goldSelector">Or:</label>
      <select name="goldSelector" v-model="goldColor">
        <option class="selectOptions">Blanc</option>
        <option class="selectOptions">Jaune</option>
        <option class="selectOptions">Rose</option>
      </select>
    </div>

    <div v-if="product.attributes.category.data.attributes.type === 'Bague'">
      <div class="fingerSize">
        <p class="selectText">Taille de doigt :</p>
        <select name="fingerSize" id="fingerSize" v-model="ringSize">
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
      <!-- <router-link
        :to="{
          name: 'Home',
        }"
        class="sizeGuideLink"
        >*Consulter le guide des tailles</router-link
      > -->
    </div>
    <div
      v-if="
        product.attributes.category.data.attributes.type === 'Boucle d\'Oreille'
      "
    >
      <div class="earingQuantityContainer">
        <p>Commander en paire ou à l'unité :</p>
        <select name="earingQuantity" id="earingQuantity" v-model="byUnity">
          <option class="selectOptions" :value="true">L'unité</option>
          <option class="selectOptions" :value="false">La paire</option>
        </select>
      </div>
    </div>
    <button class="cartButton" @click="addToCart()">Ajouter au panier</button>
  </div>
</template>

<script>
import VueMarkdownIt from "vue-markdown-it";
import EventBus from "@/shared/eventBus.js";

export default {
  props: {
    product: null,
  },

  data() {
    return {
      byUnity: false,
      ringSize: "43",
      goldColor: "Blanc",
    };
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

    getValue() {
      if (
        this.product.attributes.category.data.attributes.type ===
        "Boucle d'Oreille"
      ) {
        if (this.byUnity) {
          return this.product.attributes.prix;
        } else {
          return this.product.attributes.prix * 2;
        }
      } else {
        return this.product.attributes.prix;
      }
    },

    isFav() {
      return this.$store.state.fav.some((item) => item.id === this.product.id);
    },
  },

  methods: {
    addToCart() {
      if (this.product.attributes.category.data.attributes.type !== "Bague") {
        this.ringSize = "unique";
      }

      this.addTostore();

      if (
        this.product.attributes.category.data.attributes.type ===
          "Boucle d'Oreille" &&
        !this.byUnity
      ) {
        this.addTostore();
      }

      EventBus.$emit("showCuteMessage", "cart");
    },

    addTostore() {
      this.$store.commit("addItemToCart", {
        product: this.product,
        size: this.ringSize,
        goldColor: `Or ${this.goldColor}`,
      });
    },

    addToFav() {
      this.$store.commit("addItemToFav", { product: this.product });
    },

    removeFromFav() {
      this.$store.commit("removeItemFromFav", this.product.id);
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
  color: $fontColor;

  p {
    margin-left: 0;
  }

  .namePriceContainer {
    display: flex;
    flex-direction: row;

    .favIcon {
      width: 20px;
      align-self: flex-start;
      margin-left: 3%;
      cursor: pointer;
    }

    .textContainer {
      h3 {
        margin-top: 0;

        @media screen and (max-width: 660px) {
          font-size: 21px;
          margin: 0;
        }
      }
      p {
        color: #707070;
        @media screen and (max-width: 660px) {
          margin: 3% 0;
          font-size: 18px;
        }
      }
    }
  }

  .fingerSize {
    display: flex;
    flex-direction: row;
    align-items: center;

    .selectText {
      @media screen and (max-width: 660px) {
        font-size: 18px;
      }
    }

    select {
      color: $fontColor;
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

  .goldSelectorContainer {
    select {
      color: $fontColor;
      height: 30px;
      width: 80px;
      padding-left: 2%;

      margin-left: 5%;

      border: none;
      border-bottom: 1px solid black;

      .selectOptions {
        margin: 5%;
      }
    }
  }

  .earingQuantityContainer {
    display: flex;
    flex-direction: row;
    align-items: center;

    select {
      color: $fontColor;
      height: 30px;
      width: fit-content;
      padding-left: 2%;

      margin-left: 5%;

      border: none;
      border-bottom: 1px solid black;

      .selectOptions {
        margin: 5%;
      }
    }

    @media screen and (max-width: 660px) {
      font-size: 18px;
    }
  }

  #editor {
    width: 75%;
    overflow: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    @media screen and (max-width: 660px) {
      width: 100%;
    }
  }

  .sizeGuideLink {
    color: $fontColor;
    @media screen and (max-width: 660px) {
      font-size: 18px;
    }
  }

  .cartButton {
    width: fit-content;
    background-color: $mainColor;
    color: white;
    border: none;
    padding: 3% 10%;
    font-size: 18px;
    cursor: pointer;

    @media screen and (max-width: 660px) {
      font-size: 20px;

      margin: 3% 0;
    }
  }

  @media screen and (max-width: 660px) {
    padding-left: 0;
    margin: 5%;
  }
}
</style>