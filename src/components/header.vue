<template>
  <div class="container">
    <div id="banner">
      <img id="logo" @click="toHome()" src="@/assets/logosunBAD.png" alt="" />
    </div>
    <div class="menuContainer">
      <div class="burgerMenu">
        <img src="@/assets/menuIcon.svg" alt="" />
      </div>
      <div class="inlineMenu">
        <span @click="showMenu('HOUSE')" class="menuItem">La Maison</span>
        <span @click="showMenu('')" class="menuItem">Joaillerie</span>
        <span @click="showMenu('SHOP')" class="menuItem">Boutique</span>
        <span @click="showMenu('')" class="menuItem">Contactez nous</span>
      </div>
      <div class="iconContainer">
        <img src="@/assets/searchIcon.svg" alt="" />
        <img src="@/assets/favIcon.svg" alt="" />
        <div class="cartIcon">
          <img @click="toCart()" src="@/assets/cartIcon.svg" alt="" />
          <span>{{ nbCartItem }}</span>
        </div>
      </div>
    </div>
    <menuShop v-if="currentMenu === 'SHOP'" @hideMenu="currentMenu = null" />
    <menuHouse v-if="currentMenu === 'HOUSE'" @hideMenu="currentMenu = null" />
  </div>
</template>

<script>
import menuShop from "./menus/menuShop.vue";
import menuHouse from "./menus/menuHouse.vue";
import EventBus from "@/shared/eventBus.js";

export default {
  components: { menuShop, menuHouse },

  data() {
    return {
      currentMenu: null,
    };
  },

  computed: {
    nbCartItem() {
      return this.$store.state.cart.length;
    },
  },

  mounted() {
    this.manageBannerDisplay();
  },

  watch: {
    $route() {
      this.currentMenu = null;
      this.bannerStyle(true);
    },
  },

  methods: {
    toHome() {
      this.$router.push({ path: "/" });
    },
    toCart() {
      this.$router.push({ path: "/panier" });
    },

    manageBannerDisplay() {
      let previousScroll = window.scrollY;

      window.onscroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 80) {
          if (previousScroll > scrollY) {
            this.bannerStyle(true);
            previousScroll = scrollY;
          } else {
            this.bannerStyle(false);
            previousScroll = scrollY;
          }
        }
      };
    },

    bannerStyle(visible) {
      const bannerEl = document.getElementById("banner");
      const logoEl = document.getElementById("logo");
      if (visible) {
        bannerEl.style.visibility = "visible";
        bannerEl.style.height = "80px";
        bannerEl.style.borderBottom = "2px solid black";
        logoEl.style.width = "10%";
      } else {
        bannerEl.style.visibility = "hidden";
        bannerEl.style.height = "0px";
        bannerEl.style.borderBottom = "none";

        logoEl.style.width = "0";
      }
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
  },

  created() {
    EventBus.$on("showShopMenu", this.showShopMenu);
  },
};
</script>

<style lang="scss" scoped>
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
      width: 10%;
      transition: all ease 0.5s;
    }

    border-bottom: 2px solid black;

    @media screen and (max-width: 660px) {
      img {
        width: 25%;
      }
    }
  }

  .menuContainer {
    background-color: white;
    display: flex;
    justify-content: space-around;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    height: 80px;

    .inlineMenu {
      position: relative;
      width: 75%;

      display: flex;
      justify-content: space-around;
      flex-flow: row nowrap;

      .menuItem {
        font-size: 20px;
        color: #38515f;
        cursor: pointer;
      }
    }

    .iconContainer {
      width: 10%;
      display: flex;
      flex-direction: row;
      margin-right: 5%;

      img {
        margin: auto 10%;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }

      .cartIcon {
        position: relative;
        span {
          position: absolute;
          top: -2px;
          right: -10px;
          color: white;
          background-color: #efdebd;
          padding: 1px 4px;
          border-radius: 15px;
          text-align: center;
        }
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
      .burgerMenu {
        display: block;
      }

      .inlineMenu {
        display: none;
      }
    }
  }
}
</style>