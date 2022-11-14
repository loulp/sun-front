<template>
  <div id="messageBox">
    <div v-if="from == 'footer'">
      <p>
        Tu viens de trouver une étoile !<br />Fais un vœu et il se réalisera
      </p>
      <img src="../assets/favIconFill.svg" alt="" />
      <p>Ps : Tu es incroyable</p>
    </div>
    <div v-if="from == 'inspiration'">
      <img src="../assets/favIconFill.svg" style="margin-top: 20px" alt="" />
      <p>
        Tel l'éclat de l'étoile polaire<br />
        Tu resplendis de mille feux
      </p>
    </div>
  </div>
</template>

<script>
import EventBus from "@/shared/eventBus.js";

export default {
  data() {
    return {
      from: "",
    };
  },

  methods: {
    showMessage() {
      this.changeStyle(0);
      setTimeout(() => {
        this.changeStyle('-500px');
      }, 4000);
    },

    changeStyle(pos) {
      let messageBox = document.getElementById("messageBox");
      messageBox.style.right = pos;
    },
  },

  created() {
    EventBus.$on("showCuteMessage", (from) => {
      this.from = from;
      this.showMessage();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../shared/styles/variables.scss";

#messageBox {
  position: fixed;
  top: 25%;
  right: -500px;
  padding: 10px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(234, 246, 246, 0.8);

  text-align: center;
  font-size: 20px;

  img {
    width: 20px;
  }

  transition: all ease 0.5s;
}
</style>