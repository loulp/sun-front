<template>
  <div>
    <top v-if="subject" :subject="subject" />
    <product-list v-if="subject" :products="products" />
  </div>
</template>

<script>
import ProductList from "../components/boutique/productList.vue";
import top from "../components/boutique/top.vue";
// import collectionService from "../shared/services/collections.services";
import productService from "../shared/services/products.services";

export default {
  metaInfo: {
    title: "Boutique",
    meta: [
      {
        name: "description",
        content:
          "Découvrez Radiance, collection de bijoux en or recyclé de la maison de joaillerie SUN Jewelry, Atelier de joaillerie Lyonnais",
      },
    ],
  },
  components: { top, ProductList },

  data() {
    return {
      products: [],
      subject: null,
    };
  },

  props: {
    id: { required: false },
  },

  mounted() {
    this.$route.path.includes("categorie")
      ? this.getProductsByType(this.id)
      : this.getProductsByCollection(this.id);
  },

  methods: {
    getProductsByCollection(id) {
      productService.getProductsByCollection(id).then(
        (res) => {
          this.subject = {
            id: res.data.data.id,
            name: res.data.data.attributes.name,
            description: res.data.data.attributes.description,
            img: res.data.data.attributes.img.data.attributes.url,
          };
          res.data.data.attributes.bijoux.data.forEach((bijou) => {
            this.products.push(bijou);
          });
        },
        (err) => {
          console.log(err);
        }
      );
    },

    getProductsByType(id) {
      productService.getProductsByType(id).then(
        (res) => {
          this.subject = {
            id: res.data.data.id,
            type: res.data.data.attributes.type,
            img: res.data.data.attributes.img.data.attributes.url,
          };
          res.data.data.attributes.bijoux.data.forEach((bijou) => {
            this.products.push(bijou);
          });
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>