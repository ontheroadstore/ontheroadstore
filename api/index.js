import axios from 'axios'
axios.defaults.baseURL = 'http://api.douban.com'

// console.log(axios)
// Vue.axios.post('/aaa', {
//   aaa: 'fff'
// }).then(res => {
//   console.log('aaaaa')
// })
export default {
  getIndex: () => {
    return axios.get('/v2/movie/top250')
  }
}
