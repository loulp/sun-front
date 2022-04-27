<template>
  <div>
    <!-- <img class="sunray" src="@/assets/sunray.png" alt=""> -->

    <Header />
    <div class="viewContainer">
      <router-view :key="$route.path" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Header,
    Footer,
  },

  watch: {
    $route() {
      window.scrollTo({ top: 0 });
    },
  },

  mounted() {
    this.$store.commit("fillCartOnPageLoad");
  },
};
</script>

<style lang="scss">
@import "./shared/styles/variables.scss";

body,
html {
  margin: 0;
}

.viewContainer {
  margin-top: $headerHeight;
}

.sunray {
  z-index: 100;
  position: fixed;
  bottom: 7%;
  left: 5%;
  width: 10%;
}
</style>
