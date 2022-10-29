<template>
  <div class="bottomContainer">
    <div class="citationContainer">
      <p>
        « Faites ce que vous aimez faire, et faites-le avec autant de sérieux
        que de légèreté. Au moins, vous saurez que vous avez essayé et que -
        quelle que soit l'issue – vous avez emprunté un noble chemin. »
      </p>
      <p>Elizabeth Gilbert</p>
    </div>

    <div class="mediaContainer">
      <img class="media" src="../../../assets/showCollTEST.webp" alt="" />
      <img class="media" src="../../../assets/showCollTEST2.jpg" alt="" />
      <img class="media" src="../../../assets/showCollTEST.webp" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.bottomContainer {
  margin-top: 5%;
  .citationContainer {
    background-color: rgba(193, 199, 201, 0.2);
    width: 80%;
    padding: 20px;
    margin: auto;
    text-align: center;
    font-size: 18px;
  }

  .mediaContainer {
    margin: 3% 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    .media {
      width: 25%;
    }
  }
}
</style>