<template>
  <div class="emptyList">
    <p>
      Il n'y a rien ici actuellement, consultez la boutique pour voir plus de
      créations !
    </p>
    <div>
      <button @click="sendShowMenuEvent" class="mainButton">
        Montrez moi la Boutique
      </button>
    </div>
  </div>
</template>

<script>
import EventBus from "@/shared/eventBus.js";

export default {
  methods: {
    sendShowMenuEvent() {
      EventBus.$emit("showShopMenu", "SHOP");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";
@import "../../shared/styles/mainButton.scss";

.emptyList {
  width: fit-content;
  margin: auto;

  div {
    margin: 2% auto;
    text-align: center;
  }

  @media screen and (max-width: 660px) {
    width: 80%;
  }
}
</style>