<template>
  <div>
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
  font-family: "Abhaya Libre", serif;
}

.viewContainer {
  margin-top: $headerHeight;
}
</style>
