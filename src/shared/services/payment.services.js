import axios from 'axios';

export default {
  createPaymentIntent(body) {
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
