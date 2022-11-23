<template>
  <div class="contactOptionContainer">
    <p>Du Rêve à la Réalité...</p>
    <p>Pour prendre rendez-vous ou pour me poser des questions :</p>
    <p>
      Directement via notre
      <a href="/contact" target="_blank" class="link">formulaire de contact</a>
    </p>
    <p>
      Ou par mail :
      <a class="link" href="mailto:contact@sunjewelry.fr">
       contact@sunjewelry.fr
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
  background-color: $lightBlue;
  padding: 20px;
  margin: 3% auto;
  text-align: center;
  font-size: 18px;

  .link {
    color: $fontColor;
  }
}
</style>