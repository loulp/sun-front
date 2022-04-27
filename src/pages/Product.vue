<template>
  <div class="container" v-if="product">
    <ProductDisplay :product="product" />
    <SimilarProduct :data="data"/>
  </div>
</template>

<script>
import productService from "../shared/services/products.services";
import ProductDisplay from "../components/productDetail/productDisplay.vue";
import SimilarProduct from '../components/productDetail/similarProduct.vue';

export default {
  components: {
    ProductDisplay,
    SimilarProduct,
  },

  data() {
    return {
      product: null,
      data: "test"
    };
  },

  props: {
    id: { required: false },
  },

  mounted() {
    productService.getProduct(this.$route.params.id).then(
      (res) => {
        this.product = res.data.data;
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 1%;
  margin-right: 1%;
}
</style>