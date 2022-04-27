<template>
  <div class="container">
    <product-item v-for="item in products" :key="item.index" :product="item"></product-item>
  </div>
</template>

<script>
import productItem from "./productItem.vue";
export default {
  components: { productItem },
  props: {
    products: [],
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
}
</style>