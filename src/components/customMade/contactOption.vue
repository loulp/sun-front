<template>
  <div class="contactOptionContainer">
    <p>Du Rêve à la Réalité...</p>
    <p>Pour prendre rendez-vous ou pour me poser des questions :</p>
    <p>
      Directement via notre
      <a href="/Contact" target="_blank" class="link">formulaire de contact</a>
    </p>
    <p>
      Ou par mail :
      <a class="link" href="mailto:s.u.n.jewelry@hotmail.com">
        s.u.n.jewelry@hotmail.com
      </a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.contactOptionContainer {
  background-color: rgb(234, 246, 246);
  padding: 20px;
  margin: 3% auto;
  text-align: center;
  font-size: 18px;

  .link {
    color: $fontColor;
  }
}
</style>