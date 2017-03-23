import axios from 'axios'
axios.defaults.baseURL = 'http://v2apitest.ontheroadstore.com'

function fetchApi (type, params) {
  return axios.get(type, params)
  .then(res => {
    if (typeof res.data !== 'object') {
      return JSON.parse(res.data)
    }
    return res.data
  })
  .catch(error => {
    this.$message({
      message: error,
      type: 'warning'
    })
  })
}

export default {
  getIndexBannerCarousel: () => {
    return fetchApi('index/banner/carousel')
  },
  getIndexBannerRecommend: () => {
    return fetchApi('index/banner/recommend')
  },
  getIndexVideo: () => {
    return fetchApi('index/video')
  }
}
