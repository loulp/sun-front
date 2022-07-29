<template>
  <div class="container">
    <h2>LES COLLECTIONS</h2>
    <div v-if="!loading">
      <div v-if="collections.length > 0" class="collectionList">
        <div
          class="collectionItem"
          v-for="(coll, index) in collections"
          :key="index"
          @click="toShop(coll.id)"
        >
          <div class="imgContainer">
            <img class="collectionMedia" :src="coll.img" alt="" />

            <div class="collectionNameContainer">
              <h3>
                Collection <br />
                "{{ coll.name }}"
              </h3>
            </div>
          </div>
        </div>
      </div>
      <empty-list-message v-else />
    </div>
    <spinner class="spinner" :size="'50px'" v-if="loading" />
  </div>
</template>

<script>
import emptyListMessage from "./emptyListMessage.vue";
import collectionsServices from "@/shared/services/collections.services";
import Spinner from "../../shared/components/spinner.vue";

export default {
  components: { emptyListMessage, Spinner },
  data() {
    return {
      collections: [],
      loading: false,
    };
  },

  mounted() {
    this.getCollections();
  },

  methods: {
    getCollections() {
      this.loading = true;
      collectionsServices.getCollections().then(
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
          this.loading = !this.loading;
        },
        (err) => {
          this.loading = !this.loading;

          console.log(err);
        }
      );
    },
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

    @media screen and (max-width: 660px) {
      margin: 15% auto 15% 3%;
    }
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

      .imgContainer {
        border-radius: 10px;

        width: 100%;
        height: 45vh;
        max-width: fit-content;
        position: relative;

        .collectionMedia {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }

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
      }

      @media screen and (max-width: 660px) {
        min-width: 66%;

        .imgContainer {
          height: 33vh;
        }
      }
    }
  }

  .spinner {
    margin: 10% auto 15% auto;
  }
}
</style>