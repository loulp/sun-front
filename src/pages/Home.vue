<template>
  <div>
    <Top />
    <Showcased-collection />
    <Products />
    <WorkshopBanner />
    <Citation />
    <InspirationBanner />
    <CitationAmour />
    <div class="banner"></div>
    <Instagram />
  </div>
</template>

<script>
import Products from "../components/home/products.vue";
import InspirationBanner from "../components/home/inspirationBanner.vue";
import WorkshopBanner from "../components/home/workshopBanner.vue";
import Top from "../components/home/top.vue";
import Citation from "../components/home/citation.vue";
import ShowcasedCollection from "../components/home/showcasedCollection.vue";
import Instagram from "../components/home/instagram.vue";
import CitationAmour from "../components/home/citationAmour.vue";

export default {
    metaInfo: {
    title: "Accueil",
  },
  components: {
    WorkshopBanner,
    InspirationBanner,
    Products,
    Top,
    Citation,
    ShowcasedCollection,
    Instagram,
    CitationAmour,
  },
};
</script>

<style lang="scss" scoped>
@import "../shared/styles/variables.scss";
.banner {
  height: calc(100vh - #{$scrolledHeaderHeight});
  background-image: url("../assets/banner/coupleBanner.jpg");
  position: relative;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>