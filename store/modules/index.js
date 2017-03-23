import Vue from 'vue'
import api from '../../api/'

export const INDEX_INIT_ITEMS = 'INDEX_GET_ITEMS'
export const INDEX_SET_BANNER_ITEMS = 'INDEX_SET_BANNER_ITEMS'
export const INDEX_SET_VIDEO_ITEMS = 'INDEX_SET_VIDEO_ITEMS'
export const INDEX_SET_ARTICLE_ITEMS = 'INDEX_SET_ARTICLE_ITEMS'
export const INDEX_SET_STORE_ITEMS = 'INDEX_SET_STORE_ITEMS'

export default {
  state: {
    banner: {
      carousel: [],
      recommend: []
    },
    video: [],
    aticle: [],
    store: {
      items: [],
      pagination: {}
    }
  },
  mutations: {
    INDEX_SET_BANNER_ITEMS: (state, data) => {
      Vue.set(state.banner, data.type, data.data)
    },
    INDEX_SET_VIDEO_ITEMS: (state, data) => {
      Vue.set(state, 'video', data)
    },
    INDEX_SET_ARTICLE_ITEMS: (state, data) => {
      Vue.set(state, 'aticle', data)
    },
    INDEX_SET_STORE_ITEMS: (state, data) => {
      Vue.set(state.store, 'items', data.list)
      Vue.set(state.store, 'pagination', {
        total: null,
        current: null,
        pagetotal: null
      })
    }
  },
  actions: {
    async INDEX_INIT_ITEMS ({ commit, dispatch }) {
      await api.getIndexBannerCarousel().then(res => {
        commit(INDEX_SET_BANNER_ITEMS, {
          type: 'carousel',
          data: res.data
        })
      })
      await api.getIndexBannerRecommend().then(res => {
        commit(INDEX_SET_BANNER_ITEMS, {
          type: 'recommend',
          data: res.data
        })
      })
      await api.getIndexVideo().then(res => {
        commit(INDEX_SET_VIDEO_ITEMS, res.data)
      })
      await api.getIndexArticle().then(res => {
        commit(INDEX_SET_ARTICLE_ITEMS, res.data)
      })
      api.getIndexStore(1).then(res => {
        console.log(res)
        commit(INDEX_SET_STORE_ITEMS, res.data)
      })
    }
  }

}
