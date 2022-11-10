<template>
  <div>
    <Header />
    <div class="viewContainer">
      <router-view :key="$route.path" />
    </div>
    <scroll-up />
    <message-box />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import ScrollUp from "./components/scrollUp.vue";
import MessageBox from "./components/messageBox.vue";

export default {
  components: {
    Header,
    Footer,
    ScrollUp,
    MessageBox,
  },

  watch: {
    $route() {
      window.scrollTo({ top: 0 });
    },
  },

  mounted() {
    this.$store.commit("fillCartOnPageLoad");
    this.$store.commit("fillFavOnPageLoad");
  },
};
</script>

<style lang="scss">
@import "./shared/styles/variables.scss";

body,
html {
  margin: 0;
  font-family: "Abhaya Libre", serif;
  color: $fontColor;
}

.viewContainer {
  margin-top: $headerHeight;
}
</style>
