<template>
  <contact-form />
</template>

<script>
import contactForm from "../components/contact/contactForm.vue";
export default {
  metaInfo: {
    title: "Contact",
    link: [{ rel: "canonical", href: "https://sunjewelry.fr/contact" }],
    meta: [
      {
        name: "description",
        content:
          " Contactez la maison de joaillerie SUN Jewelry, Atelier de joaillerie Lyonnais",
      },
    ],
  },
  components: { contactForm },
};
</script>

<style lang="scss" scoped>
</style>