<template>
  <div>
    <Top />
    <Showcased-collection />
    <Products />
    <WorkshopBanner />
    <Citation />
    <InspirationBanner />
    <!-- <Collection /> Remplacer par showcasedCollection-->
    <!-- <BoutiqueBanner /> Supprimé -->
    <!-- TODO zone insta -->
  </div>
</template>

<script>
import BoutiqueBanner from "../components/home/boutiqueBanner.vue";
import Products from "../components/home/products.vue";
import Collection from "../components/home/collection.vue";
import InspirationBanner from "../components/home/inspirationBanner.vue";
import WorkshopBanner from "../components/home/workshopBanner.vue";
import Top from "../components/home/top.vue";
import Citation from "../components/home/citation.vue";
import ShowcasedCollection from "../components/home/showcasedCollection.vue";

export default {
  components: {
    WorkshopBanner,
    BoutiqueBanner,
    InspirationBanner,
    Collection,
    Products,
    Top,
    Citation,
    ShowcasedCollection,
  },
};
</script>

<style lang="scss" scoped>
</style>