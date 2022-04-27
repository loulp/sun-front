import axios from 'axios';

export default {
  getCollections() {
    return axios.get(
      `${process.env.VUE_APP_BACK_URL_API}collections?populate=img`,
      {
        headers: { Authorization: `Bearer ${process.env.VUE_APP_TOKEN}` },
      }
    );
  },
  getCategories() {
    return axios.get(`${process.env.VUE_APP_BACK_URL_API}categories?populate=img`, {
      headers: { Authorization: `Bearer ${process.env.VUE_APP_TOKEN}` },
    });
  },
};
