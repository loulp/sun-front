<template>
  <div v-if="subject">
    <!-- TODO Only if collection -->
    <div class="imgContainer" ref="imgContainer"></div>
    <div class="titleContainer">
      <h1 class="subjectName">{{ subject.name }}</h1>
    </div>
    <vue-markdown-it
      v-if="subject.description"
      :source="subject.description"
      id="editor"
    />
  </div>
</template>

<script>
import VueMarkdownIt from "vue-markdown-it";

export default {
  props: {
    subject: null,
  },

  components: {
    VueMarkdownIt,
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
  height: calc(80vh - #{$headerHeight});
  background-position: center;
  background-size: cover;
}

.titleContainer {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  .subjectName {
    margin-left: 10%;
    margin: 3% 10% 1% 10%;
    font-size: 45px;
  }
}

#editor {
  margin: 1% 10%;
  width: 50%;
}
</style>