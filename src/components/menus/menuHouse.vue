<template>
  <div class="flexContainer">
    <div class="menu">
      <div class="menuDiv">
        <h3>La Maison</h3>
        <ul>
          <li>
            <div @click="$emit('hideMenu')">
              <router-link
                class="menuLink"
                :to="{
                  name: 'history',
                }"
                >L'histoire</router-link
              >
            </div>
          </li>
          <li>
            <div @click="$emit('hideMenu')">
              <router-link
                class="menuLink"
                :to="{
                  name: 'savoir_faire',
                }"
                >Le savoir faire</router-link
              >
            </div>
          </li>
          <li>
            <div @click="$emit('hideMenu')">
              <router-link
                class="menuLink"
                :to="{
                  name: 'inspiration',
                }"
                >L'inspiration</router-link
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="image" ref="imageSide" @click="$emit('hideMenu')"></div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/shared/styles/variables.scss";

.flexContainer {
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: row;

  .menu {
    flex: 60%;
    background-color: white;

    overflow-y: scroll;
    padding-left: 5%;
    padding-top: 3%;

    .menuDiv {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      color: $fontColor;

      h3 {
        flex: 40%;
        font-size: 24px;
        text-align: center;
      }

      ul {
        flex: 60%;
        list-style: none;

        li {
          div {
            padding: 2% 0;
            width: fit-content;
          }

          .menuLink {
            text-decoration: none;
            color: $fontColor;
            font-size: 20px;
          }

          & :hover {
            padding-left: 15px;

            transition: padding-left ease 0.5s;
          }
        }

        & :hover {
          list-style: url("../../assets/liStar.jpg");
        }
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }

  .image {
    flex: 40%;
    background-color: rgba(234, 246, 246, 0.8);
  }
}
</style>