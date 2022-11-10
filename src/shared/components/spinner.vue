<template>
  <div class="loaderContainer">
    <ring-loader :color="'#d44a7b'" :size="size"></ring-loader>
  </div>
</template>

<script>
import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
  components: {
    RingLoader,
  },

  props: {
    size: null,
  },
};
</script>

<style>
.loaderContainer {
  display: flex;
  justify-content: center;
}
</style>