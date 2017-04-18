import Vue from 'vue'
import api from '../../api/'

export const ARTICLE_INDEX_INIT = 'ARTICLE_INDEX_INIT'
export const ARTICLE_INDEX_SET = 'ARTICLE_INDEX_SET'
export const ARTICLE_INDEX_GET_ITEMS = 'ARTICLE_INDEX_GET_ITEMS'
export const ARTICLE_INDEX_SET_ITEMS = 'ARTICLE_INDEX_SET_ITEMS'

export const ARTICLE_DETAIL_INIT = 'ARTICLE_DETAIL_INIT'
export const ARTICLE_DETAIL_GET_ITEMS = 'ARTICLE_DETAIL_GET_ITEMS'
export const ARTICLE_DETAIL_SET_ITEMS = 'ARTICLE_DETAIL_SET_ITEMS'
export const ARTICLE_DETAIL_SET_RECOMMEND = 'ARTICLE_DETAIL_SET_RECOMMEND'
export const ARTICLE_DETAIL_GET_RECOMMEND = 'ARTICLE_DETAIL_SET_RECOMMEND'

export const ARTICLE_PAGES_SET_ITEMS = 'ARTICLE_PAGES_SET_ITEMS'
export const ARTICLE_PAGES_GET_ITEMS = 'ARTICLE_PAGES_GET_ITEMS'

export default {
  state: {
    index: {
      items: [],
      pagination: {
        current: null,
        total: null,
        pagetotal: null
      }
    },
    detail: {
      item: {},
      more: {
        items: [],
        pagination: {
          current: null,
          total: null,
          pagetotal: null
        }
      },
      recommend: []
    },
    pages: {
      items: [],
      pagination: {
        current: null,
        total: null,
        pagetotal: null
      }
    }
  },
  mutations: {
    ARTICLE_INDEX_SET: (state, data) => {
      Vue.set(state.index, 'items', data.list)
      Vue.set(state.index, 'pagination', {
        current: parseInt(data.current),
        total: parseInt(data.total),
        pagetotal: parseInt(data.pagetotal)
      })
    },
    ARTICLE_INDEX_SET_ITEMS: (state, data) => {
      state.index.items = state.index.items.concat(data.list)
      Vue.set(state.index, 'pagination', {
        current: parseInt(data.current),
        total: parseInt(data.total),
        pagetotal: parseInt(data.pagetotal)
      })
    },
    ARTICLE_DETAIL_INIT: (state, data) => {
      Vue.set(state.detail, 'item', data.data)
    },
    ARTICLE_DETAIL_SET_ITEMS: (state, data) => {
      state.detail.more.items = state.detail.more.items.concat(data.list)
      Vue.set(state.detail.more, 'pagination', {
        current: parseInt(data.current),
        total: parseInt(data.total),
        pagetotal: parseInt(data.pagetotal)
      })
    },
    ARTICLE_DETAIL_SET_RECOMMEND: (state, data) => {
      Vue.set(state.detail, 'recommend', data)
    },
    ARTICLE_PAGES_SET_ITEMS: (state, data) => {
      Vue.set(state.pages, 'items', data.list)
      Vue.set(state.pages, 'pagination', {
        current: parseInt(data.current),
        total: parseInt(data.total),
        pagetotal: parseInt(data.pagetotal)
      })
    }
  },
  actions: {
    async ARTICLE_INDEX_INIT ({ commit, dispatch }) {
      await api.getArticleIndexList(1).then(res => {
        commit('ARTICLE_INDEX_SET', res.data)
      })
    },
    async ARTICLE_INDEX_GET_ITEMS ({commit, dispatch}, page) {
      await api.getArticleIndexList(page).then(res => {
        commit(ARTICLE_INDEX_SET_ITEMS, res.data)
      })
    },
    async ARTICLE_DETAIL_INIT ({ commit, dispatch }, id) {
      await api.getArticleDetail(id).then(res => {
        commit('ARTICLE_DETAIL_INIT', res)
      })
      await dispatch('ARTICLE_DETAIL_GET_ITEMS', 1)
      await dispatch('ARTICLE_DETAIL_GET_RECOMMEND')
    },
    async ARTICLE_DETAIL_GET_ITEMS ({ commit, dispatch }, page) {
      await api.getArticleMore(page).then(res => {
        commit('ARTICLE_DETAIL_SET_ITEMS', res.data)
      })
    },
    async ARTICLE_DETAIL_GET_RECOMMEND ({ commit }) {
      await api.getArticleRecommend().then(res => {
        commit('ARTICLE_DETAIL_SET_RECOMMEND', res.data)
      })
    },
    async ARTICLE_PAGES_GET_ITEMS ({ commit }, page) {
      await api.getArticleIndexList(page).then(res => {
        commit(ARTICLE_PAGES_SET_ITEMS, res.data)
      })
    }
  }
}

