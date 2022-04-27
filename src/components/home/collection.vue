<template>
  <div class="container">
    <h2>LES COLLECTIONS</h2>
    <div class="collectionList">
      <div
        class="collectionItem"
        v-for="(coll, index) in collections"
        :key="index"
        @click="toShop(coll.id)"
      >
        <div
          class="imgContainer"
          :style="{
            'background-image': `url(${strapiMediaUrl + coll.img})`,
          }"
        ></div>
        <div class="collectionNameContainer">
          <h3>
            Collection <br />
            "{{ coll.name }}"
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      collections: [],
      strapiMediaUrl: process.env.VUE_APP_BACK_URL_IMG,
    };
  },

  mounted() {
    axios
      .get(`${process.env.VUE_APP_BACK_URL_API}collections?populate=img`, {
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`,
        },
      })
      .then(
        (res) => {
          console.log(res);
          res.data.data.forEach((el) => {
            const collection = {
              id: el.id,
              name: el.attributes.name,
              img: el.attributes.img.data.attributes.url,
            };
            this.collections.push(collection);
          });
        },
        (err) => {
          console.log(err);
        }
      );
  },

  methods: {
    toShop(id) {
      this.$router.push({
        name: "BoutiqueColl",
        params: { id: id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 5% auto;
  h2 {
    margin: 2% auto 2% 3%;
  }

  .collectionList {
    display: flex;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .collectionItem {
      min-width: 30%;
      margin: 1%;
      position: relative;
      cursor: pointer;

      .collectionNameContainer {
        left: 0;
        right: 0;
        top: 0;
        margin: 15% auto;
        position: absolute;

        border-radius: 25px;

        width: 45%;
        min-width: fit-content;
        height: fit-content;

        background: rgba(255, 255, 255, 0.5);
        h3 {
          text-align: center;
          color: white;
          font-size: 22px;
        }
      }

      .imgContainer {
        border-radius: 10px;

        width: 100%;
        height: 45vh;

        background-position: center;
        background-size: cover;
      }
    }
  }
}
</style>