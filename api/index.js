import axios from '~plugins/axios'

function fetchApi (type, params) {
  return axios.get(type, {
    params: params
  })
  .then(res => {
    if (typeof res.data !== 'object') {
      return JSON.parse(res.data)
    }
    return res.data
  })
  // .catch(error => {
    // 处理500错误
  // })
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
  },
  getIndexArticle: () => {
    return fetchApi('index/article')
  },
  getIndexStore: (page) => {
    return fetchApi('index/store', {
      pagesize: 20,
      page: page
    })
  },
  getStoreList: (page) => {
    return fetchApi('store/list', {
      pagesize: 20,
      page: page
    })
  }
}
