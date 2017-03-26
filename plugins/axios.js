import Vue from 'vue'
import axios from 'axios'

export default axios.create({
  baseURL: 'http://v2apitest.ontheroadstore.com',
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  }
})

Vue.prototype.$http = axios
