<template>
  <div class="container">
    <!-- TODO virer, creer composant -->
    <div v-if="showPopin" class="modal-mask">
      <div class="modal-wrapper">
        <div v-if="showPopin" class="modal-container">
          <p>
            Les commandes via le site web sont temporairement indisponibles. Pour toutes commandes vous
            pouvez toujours me contacter via le
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

    <div class="namePriceContainer">
      <div class="textContainer">
        <h3>{{ product.attributes.nom }}</h3>
        <p>Prix: {{ getValue }}€</p>
      </div>
      <img
        @click="addToFav()"
        v-if="!isFav"
        class="favIcon"
        :src="require('../../assets/icon/favIcon.svg')"
        alt=""
      />
      <img
        @click="removeFromFav()"
        v-if="isFav"
        class="favIcon"
        :src="require('../../assets/icon/favIconFill.svg')"
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
    <button class="mainButton" @click="showUnavailablePopin()">
      Ajouter au panier
    </button>
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
      showPopin: false,
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
    showUnavailablePopin() {
      this.showPopin = !this.showPopin;
    },
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
@import "../../shared/styles/mainButton.scss";

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

  @media screen and (max-width: 660px) {
    padding-left: 0;
    margin: 5%;
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