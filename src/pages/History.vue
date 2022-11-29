<template>
  <div>
    <creatrice />
    <vision />
  </div>
</template>

<script>
import Creatrice from "../components/house/history/creatrice.vue";
import Vision from "../components/house/history/vision.vue";
export default {
  metaInfo: {
    title: "L'histoire",
    link: [{ rel: "canonical", href: "https://sunjewelry.fr/histoire" }],
    meta: [
      {
        name: "description",
        content:
          "Découvrez l’histoire et les valeurs de la maison de joaillerie SUN Jewelry, Atelier de joaillerie Lyonnais",
      },
    ],
  },
  components: { Creatrice, Vision },
};
</script>

<style lang="scss" scoped>
</style>