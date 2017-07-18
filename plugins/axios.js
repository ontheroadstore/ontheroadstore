import Vue from 'vue'
import Axios from 'axios'
import { Message } from 'element-ui'

const service = Axios.create({
  baseURL: 'https://apitest.ontheroadstore.com/www/'
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
    Message.error({
      message: {
        'code': response.data.status,
        'info': response.data.info
      },
      type: 'error'
    })
    return response
  }
}, error => {
  Message.error({
    message: {
      'message': error.message,
      'url': error.config.url,
      'params': error.config.params
    },
    type: 'error'
  })
  return Promise.reject(error)
})

Vue.prototype.$http = Axios
export default service
