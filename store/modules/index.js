import Vue from 'vue'
import api from '../../api/'
export const INDEX_GET_ITEMS = 'INDEX_GET_ITEMS'
export const INDEX_SET_ITEMS = 'INDEX_SET_ITEMS'
export const INDEX_INIT_ITEMS = 'INDEX_GET_ITEMS'
export const INDEX_SET_BANNER_ITEMS = 'INDEX_SET_BANNER_ITEMS'

export default {
  state: {
    banneraa: {
      carousel: [],
      recommend: []
    }
  },
  mutations: {
    INDEX_SET_BANNER_ITEMS: (state, data) => {
      Vue.set(state.banneraa, data.type, data.data)
    }
  },
  actions: {
    async nuxtServerInit (store) {
      await store.dispatch('INDEX_GET_BANNER_ITEMS')
    },
    // async INDEX_INIT_ITEMS ({ dispatch }) {
    //   await dispatch('INDEX_GET_BANNER_ITEMS')
    // },
    INDEX_GET_BANNER_ITEMS: ({ commit }) => {
      api.getIndexBannerCarousel().then(res => {
        commit(INDEX_SET_BANNER_ITEMS, {
          type: 'carousel',
          data: res.data
        })
      })
      api.getIndexBannerRecommend().then(res => {
        commit(INDEX_SET_BANNER_ITEMS, {
          type: 'recommend',
          data: res.data
        })
      })
    }
  }
}
