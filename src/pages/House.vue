<template>
  <div>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
    metaInfo: {
    title: "La maison",
  },
};
</script>

<style scoped lang="scss">
</style>