<template>
  <div class="container">
    <div id="banner" v-if="!isScrolled">
      <img
        class="bannerLogoMain"
        @click="toHome()"
        src="@/assets/mainLogoBlue.png"
        alt=""
      />
      <img
        class="bannerLogo"
        @click="toHome()"
        src="@/assets/logoTxtLongBlue.png"
        alt=""
      />
    </div>
    <div class="menuContainer">
      <div class="burgerMenu">
        <img
          v-if="!showMobileMenu"
          src="@/assets/menuIcon.svg"
          alt=""
          @click="showMobileMenu = !showMobileMenu"
        />
        <img
          v-if="showMobileMenu"
          src="@/assets/cross.svg"
          alt=""
          @click="showMobileMenu = !showMobileMenu"
        />
      </div>
      <img
        class="menuLogo"
        @click="toHome()"
        src="@/assets/mainLogoBlue.png"
        alt=""
        v-if="isScrolled"
      />
      <div class="inlineMenu">
        <span @click="showMenu('HOUSE')" class="menuItem">LA MAISON</span>
        <span @click="showMenu('SHOP')" class="menuItem">JOAILLERIE</span>
        <span @click="redirectTo('SUR-MESURE')" class="menuItem"
          >SUR-MESURE</span
        >
        <!-- <span @click="showMenu('')" class="menuItem">GUIDE</span> -->
        <span @click="redirectTo('CONTACT')" class="menuItem"
          >CONTACTEZ NOUS</span
        >
      </div>
      <div class="iconContainer">
        <!-- <img src="@/assets/searchIcon.svg" alt="" /> -->
        <div class="iconWithCounter">
          <img @click="showMenu('FAV')" src="@/assets/favIcon.svg" alt="" />
          <span @click="showMenu('FAV')">{{ nbFavItem }}</span>
        </div>
        <div class="iconWithCounter">
          <img @click="toCart()" src="@/assets/cartIcon.svg" alt="" />
          <span @click="toCart()">{{ nbCartItem }}</span>
        </div>
      </div>
    </div>
    <menuMobile v-if="showMobileMenu" />
    <menuShop v-if="currentMenu === 'SHOP'" @hideMenu="currentMenu = null" />
    <menuHouse v-if="currentMenu === 'HOUSE'" @hideMenu="currentMenu = null" />
    <menuFav v-if="currentMenu === 'FAV'" @hideMenu="currentMenu = null" />
  </div>
</template>

<script>
import menuShop from "./menus/menuShop.vue";
import menuHouse from "./menus/menuHouse.vue";
import menuMobile from "./menus/menuMobile.vue";
import menuFav from "./menus/menuFav.vue";
import EventBus from "@/shared/eventBus.js";

export default {
  components: { menuShop, menuHouse, menuMobile, menuFav },

  data() {
    return {
      currentMenu: null,
      showMobileMenu: false,
      isScrolled: false,
    };
  },

  computed: {
    nbCartItem() {
      return this.$store.state.cart.length;
    },
    nbFavItem() {
      return this.$store.state.fav.length;
    },
  },

  mounted() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > 80 && !this.isScrolled) {
        this.isScrolled = !this.isScrolled;
      } else if (scrollY < 79 && this.isScrolled) {
        this.isScrolled = !this.isScrolled;
      }
    });
  },

  watch: {
    $route() {
      this.currentMenu = null;
      this.showMobileMenu = false;
    },
  },

  methods: {
    toHome() {
      this.$router.push({ path: "/" });
    },
    toCart() {
      this.$router.push({ path: "/panier" });
    },

    showMenu(menu) {
      if (this.currentMenu === null) {
        this.currentMenu = menu;
      } else if (this.currentMenu != null && this.currentMenu != menu) {
        this.currentMenu = menu;
      } else {
        this.currentMenu = null;
      }
    },

    redirectTo(page) {
      switch (page) {
        case "CONTACT":
          this.$router.push({
            name: "Contact",
          });
          break;
        case "SUR-MESURE":
          this.$router.push({
            name: "sur-mesure",
          });
          break;

        default:
          console.log("An error occured");
          break;
      }
    },
  },

  created() {
    EventBus.$on("showShopMenu", (menu) => {
      this.currentMenu = menu;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../shared/styles/variables.scss";

.container {
  z-index: 100;
  width: 100%;

  position: fixed;
  top: 0;

  #banner {
    width: 100%;
    text-align: center;
    background-color: white;
    height: 80px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all ease 0.5s;

    img {
      transition: all ease 0.5s;
    }

    .bannerLogoMain {
      width: 8%;

      @media screen and (max-width: 660px) {
        width: 25%;
      }
    }

    .bannerLogo {
      width: 11%;
      @media screen and (max-width: 660px) {
        width: 33%;
      }
    }

    border-bottom: 1px solid rgba(56, 81, 95, 0.1);

    @media screen and (max-width: 660px) {
      img {
        width: 25%;
      }
    }
  }

  .menuContainer {
    background-color: white;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    height: 60px;

    .menuLogo {
      width: 6%;
      cursor: pointer;

      @media screen and (max-width: 660px) {
        margin-left: 15%;
        width: 25%;
      }
    }

    .inlineMenu {
      position: relative;
      width: 75%;

      display: flex;
      justify-content: space-around;
      flex-flow: row nowrap;
      align-items: center;

      .menuItem {
        font-size: 16px;
        color: $fontColor;
        cursor: pointer;
      }
    }

    .iconContainer {
      width: 10%;
      display: flex;
      flex-direction: row;
      margin-right: 3%;
      justify-content: space-around;

      img {
        margin: auto 5%;
        width: 25px;
        height: 25px;
        cursor: pointer;
      }

      .iconWithCounter {
        position: relative;
        span {
          position: absolute;
          top: -2px;
          right: -10px;
          color: white;
          background-color: $mainColor;
          padding: 1px 4px;
          border-radius: 15px;
          text-align: center;
          cursor: pointer;
        }
      }

      @media screen and (max-width: 660px) {
        width: 25%;
        margin-right: 10%;
        gap: 10px;
      }
    }

    .burgerMenu {
      display: none;
      position: relative;
      img {
        width: 30px;
        height: 30px;
      }
    }

    @media screen and (max-width: 660px) {
      justify-content: space-between;

      .burgerMenu {
        margin-left: 5%;
        display: block;
      }

      .inlineMenu {
        display: none;
      }
    }
  }
}
</style>