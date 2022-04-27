<template>
  <div>
    <WorkshopBanner />
    <Products />
    <HouseBanner />
    <Collection />
    <BoutiqueBanner />
    <!-- TODO vos preferes (favoris ou global ?) carousel PROBABLEMENT PAS A FAIRE-->
    <!-- TODO zone insta -->
  </div>
</template>

<script>
import BoutiqueBanner from "../components/home/boutiqueBanner.vue";
import Products from "../components/home/products.vue";
import Collection from "../components/home/collection.vue";
import HouseBanner from "../components/home/houseBanner.vue";
import WorkshopBanner from "../components/home/workshopBanner.vue";

export default {
  components: {
    WorkshopBanner,
    BoutiqueBanner,
    HouseBanner,
    Collection,
    Products,
  },
};
</script>

<style lang="scss" scoped>
</style>