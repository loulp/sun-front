import axios from 'axios';

export default {
  sendMail(body) {
    return axios.post(`${process.env.VUE_APP_BACK_URL_API}sendMail`, body);
  },
};
