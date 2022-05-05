<template>
  <div class="emptyList">
    <p>
      Il n'y a rien ici actuellement, consultez la boutique pour voir plus de
      créations !
    </p>
    <div>
      <button @click="sendShowMenuEvent">Montrez moi la Boutique</button>
    </div>
  </div>
</template>

<script>
import EventBus from "@/shared/eventBus.js";

export default {
  methods: {
    sendShowMenuEvent() {
      EventBus.$emit("showShopMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.emptyList {
  width: fit-content;
  margin: auto;

  div {
    margin: 2% auto;
    text-align: center;

    button {
      width: fit-content;
      border: none;
      padding: 10px 20px;
      font-size: 18px;
      border-radius: 15px;
      cursor: pointer;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
      margin: 5%;
      background-color: #efdebd;
      color: white;
    }
  }
}
</style>