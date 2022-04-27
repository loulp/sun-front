<template>
  <div v-if="subject">
    <div class="imgContainer" ref="imgContainer">
      <h1 class="subjectName">{{subject.name}}</h1>
    </div>
    <h3 class="description">{{ subject.description }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    subject: null
  },

  mounted() {
    if (this.subject) {
      this.$refs.imgContainer.style.backgroundImage = `url(${this.subject.img})`;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.imgContainer {
  position: relative;
  height: calc(80vh - #{$headerHeight});
  width: 100%;

  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;

  .subjectName {
    margin-left: 10%;
    font-size: 50px;
  }
}

.description {
  margin: 3% 10%;
  color: black;
  width: 50%
}
</style>