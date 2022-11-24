<template>
  <div class="childContainer mediaLeft">
    <div class="mediaContainer">
      <img class="media" src="../../../assets/inspiration/inspi4.jpg" loading="lazy" alt="" />
    </div>
    <div class="textContainer">
      <div class="content">
        <div class="iconContainer">
          <img
            @click="cuteAlert()"
            class="starIcon"
            src="../../../assets/inspiration/inspiStar.png"
            loading="lazy"
            alt=""
          />
        </div>

        <p>
          "Je suis une nocturne. Pour moi, la créativité vient la nuit. Il se
          passe quelque chose avec la nuit. Une énergie différente. C'est là,
          devant l'immensité de la voie lactée que je me sent la plus inspirée,
          connectée, telle une toile infinie sur laquelle déposer ses idées.
          C'est d'ailleurs de la que vient le nom de "Songe d'une Nuit", de ces
          nombreux voyages entourés d'étoiles."
        </p>
        <p class="signature">Typhen</p>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/shared/eventBus.js";

export default {
  methods: {
    cuteAlert() {
      EventBus.$emit("showCuteMessage", "inspiration");
    },
  },
};
</script>

<style scoped lang="scss">
.mediaContainer {
  @media screen and (max-width: 660px) {
    margin-top: 15%;
  }
}

.iconContainer {
  text-align: center;
  .starIcon {
    width: 33%;
    cursor: pointer;
  }
}

p {
  font-style: italic;
}

.signature {
  margin-bottom: 15%;
  text-align-last: end;
}
</style>