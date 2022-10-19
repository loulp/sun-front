<template>
  <div>
    <Top />
    <Showcased-collection />
    <Products />
    <WorkshopBanner />
    <Citation />
    <InspirationBanner />
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

export default {
  components: {
    WorkshopBanner,
    InspirationBanner,
    Products,
    Top,
    Citation,
    ShowcasedCollection,
    Instagram,
  },
};
</script>

<style lang="scss" scoped>
</style>