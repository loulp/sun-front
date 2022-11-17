import axios from 'axios';
const qs = require('qs');

export default {
  getProducts() {
    return axios.get(
      `${process.env.VUE_APP_BACK_URL_API}bijoux?populate=photo`,
      {
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`,
        },
      }
    );
  },

  getProduct(id) {
    return axios.get(
      `${process.env.VUE_APP_BACK_URL_API}bijoux/${id}?populate=*`,
      {
        headers: { Authorization: `Bearer ${process.env.VUE_APP_TOKEN}` },
      }
    );
  },

  getProductsById(idList) {
    const query = qs.stringify(
      {
        filters: {
          id: {
            $in: idList,
          },
        },
        populate: {
          photo: {
            populate: '*',
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    return axios.get(`${process.env.VUE_APP_BACK_URL_API}bijoux?${query}`, {
      headers: { Authorization: `Bearer ${process.env.VUE_APP_TOKEN}` },
    });
  },

  getProductsByCollection(id) {
    const query = qs.stringify(
      {
        populate: {
          img: {
            populate: '*',
          },
          bijoux: {
            populate: '*',
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    return axios.get(
      `${process.env.VUE_APP_BACK_URL_API}collections/${id}?${query}`,
      {
        headers: { Authorization: `Bearer ${process.env.VUE_APP_TOKEN}` },
      }
    );
  },

  getProductsByType(id) {
    const query = qs.stringify(
      {
        populate: {
          img: {
            populate: '*',
          },
          bijoux: {
            populate: '*',
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    return axios.get(
      `${process.env.VUE_APP_BACK_URL_API}categories/${id}?${query}`,
      {
        headers: { Authorization: `Bearer ${process.env.VUE_APP_TOKEN}` },
      }
    );
  },

  getLatestProducts() {
    const query = qs.stringify(
      {
        sort: ['createdAt:desc'],
        pagination: {
          start: 0,
          limit: 10,
        },
        populate: {
          photo: {
            populate: '*',
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    return axios.get(`${process.env.VUE_APP_BACK_URL_API}bijoux?${query}`, {
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`,
      },
    });
  },

  getSearchResult(input) {
    return axios.get(
      `${process.env.VUE_APP_BACK_URL_API}fuzzy-search/search?query=${input}`
    );
  },
};
