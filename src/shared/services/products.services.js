import axios from 'axios';
const qs = require('qs');

export default {
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

  //TODO Séparer les service et mettre au propre
  payment(body) {
    return axios.post(
      `${process.env.VUE_APP_BACK_URL_API}createPaymentIntent`,
      body
    );
  },

  createOrder(body) {
    return axios.post(`${process.env.VUE_APP_BACK_URL_API}commandes`, {
      data: body,
    });
  },
};
