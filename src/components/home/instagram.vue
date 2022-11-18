<template>
  <div class="instaContainer">
    <div class="textContainer">
      <h2>
        Suivez nous sur <br />
        <span>INSTAGRAM</span>
      </h2>

      <div class="logoAndLink">
        <img src="../../assets/instaViolet.svg" alt="" />
        <a href="https://www.instagram.com/s.u.n.jewelry/" target="_blank"
          >@S.U.N. jewelry</a
        >
      </div>
    </div>
    <div class="mediaContainer">
      <a
        class="mediaItem"
        v-for="media in medias"
        :key="media.index"
        :href="media.url"
        target="_blank"
      >
        <img class="media" :src="media.src" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      medias: [
        {
          src: "./assets/1sun.jpg",
          url: "https://www.instagram.com/p/Cipv5R-onuo/",
        },
        {
          src: "./assets/2ethic.jpg",
          url: "https://www.instagram.com/p/Ci7xeZFI5G9/",
        },
        {
          src: "./assets/3hand.jpg",
          url: "https://www.instagram.com/p/CjxvnLKIAMZ/",
        },
        {
          src: "./assets/4store.jpg",
          url: "https://www.instagram.com/p/Cjni9W-I_11/",
        },
        {
          src: "./assets/5work.jpg",
          url: "https://www.instagram.com/p/CixekcpNH2Q/",
        },
        {
          src: "./assets/6handmade.jpg",
          url: "https://www.instagram.com/p/CiXs1nwoJxV/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../shared/styles/variables.scss";

.instaContainer {
  margin: 5% 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .textContainer {
    flex: 25%;
    text-align: center;
    color: $fontColor;

    h2 {
      font-size: 25px;

      span {
        border-top: 2px solid $lightBlue;
      }
    }

    @media screen and (max-width: 660px) {
      width: 75%;
    }

    .logoAndLink {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      img {
        width: 33px;
        margin-right: 2%;
      }

      a {
        text-decoration: none;
        font-size: 20px;
        color: $fontColor;
      }

      @media screen and (max-width: 660px) {
        padding-top: 0;
        margin-bottom: 10%;
      }
    }
  }

  .mediaContainer {
    flex: 55%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;

    .mediaItem {
      flex-basis: 30%;
      text-align: center;

      .media {
        height: 35vh;
        cursor: pointer;

        @media screen and (max-width: 660px) {
          height: 25vh;
        }
      }
    }
  }

  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
}
</style>