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
  getIndexTop10: () => {
    return fetchApi('index/top10')
  },
  getStoreList: (page) => {
    return fetchApi('store/list', {
      pagesize: 20,
      page: page
    })
  },
  getStoreDetail: (id) => {
    return fetchApi('store/detail', {
      id: id
    })
  },
  getStoreDetailSellers: (id) => {
    return fetchApi('store/detail_sellers', {
      id: id
    })
  },
  getStoreDetailInfo: (id) => {
    return fetchApi('store/detail_info', {
      id: id
    })
  },
  getArticleIndexList: (page) => {
    return fetchApi('article/list', {
      pagesize: 20,
      page: page
    })
  },
  getArticleDetail: (id) => {
    return fetchApi('article/detail', {
      id: id
    })
  },
  getArticleMore: (page) => {
    return fetchApi('article/list', {
      pagesize: 20,
      page: page
    })
  },
  getArticleRecommend: () => {
    return fetchApi('article/recommend')
  },
  getSearchList: (params) => {
    return fetchApi('search/list', {
      pagesize: 20,
      page: params.page,
      keyword: params.keyword
    })
  }
}
