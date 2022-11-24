<template>
  <div class="scrollUpContainer">
    <img
      v-if="isScrolled"
      @click="scrollUp()"
      src="../assets/icon/scrollUpIcon.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
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

  methods: {
    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.scrollUpContainer {
  position: fixed;
  left: 20px;
  bottom: 30px;
  z-index: 100;

  img {
    width: 30px;
    cursor: pointer;
  }

  @media screen and (max-width: 660px) {
    left: 15px;
    bottom: 20px;
  }
}
</style>