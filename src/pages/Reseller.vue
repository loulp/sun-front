<template>
  <div>
    <div class="pageTitle">
      <h1>
        <img src="../assets/starIcon.png" class="titleIcon" />Nos Revendeurs
      </h1>
      <p>
        Par-ce que voir, toucher, essayer est aussi important, Retrouvez les
        bijoux SUN Jewelry en boutique !
      </p>
    </div>

    <div class="resellerList">
      <div class="reseller">
        <div class="mediaContainer">
          <img src="../assets/photoCollection/revendeur1.png" alt="" />
        </div>
        <div class="textContainer">
          <h2>Joy d'Or</h2>
          <p>
            Retrouvez des créations exclusives dans cette boutique située à
            Marmande.
          </p>
          <div class="resellerAddress">
            Joy D'or<br />
            46 rue Charles De Gaulle<br />
            47200 MARMANDE<br />
            Horaires d'ouvertures :<br />
            Mardi-Vendredi : 9h30/12h30-13h30/19h<br />
            Samedi : 9h30/12h30-14h/19h
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Revendeurs",
    link: [{ rel: "canonical", href: "https://sunjewelry.fr/revendeurs" }],
  },
};
</script>

<style lang="scss">
@import "../shared/styles/variables.scss";

.pageTitle {
  h1 {
    width: fit-content;
    margin: auto;
    text-align: center;
    border-bottom: 2px solid $lightBlue;

    padding: 3% 10px 0 10px;
    margin-bottom: 3%;

    .titleIcon {
      width: 30px;
      margin-right: 10px;
      margin-bottom: -5px;
    }
  }

  p {
    text-align: center;

    @media screen and (max-width: 660px) {
      margin: 3% 10%;
    }
  }
}

.resellerList {
  margin: 5% 10%;
  .reseller {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .mediaContainer {
      flex: 1;
      img {
        width: 60%;
      }
    }

    .textContainer {
      flex: 1;
      text-align: center;
      font-size: 18px;
    }

    @media screen and (max-width: 660px) {
      flex-direction: column;

      .mediaContainer {
        text-align: center;
      }
    }
  }
}
</style>