<template>
  <div class="loaderContainer">
    <img src="../../assets/loader.gif" alt="" />
  </div>
</template>

<script>
// import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
  // components: {
  //   RingLoader,
  // },
  // props: {
  //   size: null,
  // },
};
</script>

<style lang="scss">
.loaderContainer {
  display: flex;
  justify-content: center;

  img {
    width: 140px;
  }
}
</style>