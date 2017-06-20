import Vue from 'vue'
import Axios from 'axios'

const service = Axios.create({
  baseURL: 'https://apitest.ontheroadstore.com/www/index',
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  }
})
// 拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  if (response.data.status === 0) {
    return response.data.data
  } else {
    return response
  }
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$http = Axios
export default service
