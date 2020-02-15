import axios from 'axios';

export default {

  sendMail: function (name, email, message) {
    return axios.post('/api/sendmail', {name, email, message})
  }
}