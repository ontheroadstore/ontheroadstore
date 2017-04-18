import Vue from 'vue'
import api from '../../api/'

export const STORE_INDEX_INIT = 'STORE_INDEX_INIT'
export const STORE_INDEX_SET = 'STORE_INDEX_SET'
export const STORE_INDEX_GET_ITEMS = 'STORE_INDEX_GET_ITEMS'
export const STORE_INDEX_SET_ITEMS = 'STORE_INDEX_SET_ITEMS'

export const STORE_PAGES_INIT = 'STORE_PAGES_INIT'
export const STORE_PAGES_SET = 'STORE_PAGES_SET'

export const STORE_DETAIL_INIT = 'STORE_DETAIL_INIT'
export const STORE_DETAIL_SELLERS_SET = 'STORE_DETAIL_SELLERS_SET'
export const STORE_DETAIL_INFO_SET = 'STORE_DETAIL_INFO_SET'
export const STORE_DETAIL_SET = 'STORE_DETAIL_SET'

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
      id: null,
      cover: null,
      sellers: {
        author: {
          id: null,
          nickname: null,
          avatar: null
        },
        items: []
      },
      infos: {
        title: null,
        date: null,
        views: null,
        tags: [],
        price: null,
        express: null,
        inventory: null,
        sales: null
      },
      images: [],
      content: null,
      abstract: null,
      comments_number: null,
      comments: [],
      praise_number: null,
      praise: []
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
    STORE_INDEX_SET: (state, data) => {
      Vue.set(state.index, 'items', data.list)
      Vue.set(state.index, 'pagination', {
        current: parseInt(data.current),
        total: parseInt(data.total),
        pagetotal: parseInt(data.pagetotal)
      })
    },
    STORE_INDEX_SET_ITEMS: (state, data) => {
      state.index.items = state.index.items.concat(data.list)
      Vue.set(state.index, 'pagination', {
        current: parseInt(data.current),
        total: parseInt(data.total),
        pagetotal: parseInt(data.pagetotal)
      })
    },
    STORE_PAGES_SET: (state, data) => {
      Vue.set(state.pages, 'items', data.list)
      Vue.set(state.pages, 'pagination', {
        current: parseInt(data.current),
        total: parseInt(data.total),
        pagetotal: parseInt(data.pagetotal)
      })
    },
    STORE_DETAIL_SELLERS_SET: (state, data) => {
      Vue.set(state.detail.sellers, 'author', data.author)
      Vue.set(state.detail.sellers, 'items', data.list)
    },
    STORE_DETAIL_INFO_SET: (state, data) => {
      Vue.set(state.detail, 'infos', data)
    },
    STORE_DETAIL_SET: (state, data) => {
      Vue.set(state.detail, 'id', data.id)
      Vue.set(state.detail, 'cover', data.cover)
      Vue.set(state.detail, 'images', data.images)
      Vue.set(state.detail, 'content', data.content)
      Vue.set(state.detail, 'abstract', data.abstract)
      Vue.set(state.detail, 'comments_number', data.comments_number)
      Vue.set(state.detail, 'praise_number', data.praise_number)
    }
  },
  actions: {
    async STORE_INDEX_INIT ({commit, dispatch}) {
      await api.getStoreList(1).then(res => {
        commit(STORE_INDEX_SET, res.data)
      })
    },
    async STORE_INDEX_GET_ITEMS ({commit, dispatch}, page) {
      await api.getStoreList(page).then(res => {
        commit(STORE_INDEX_SET_ITEMS, res.data)
      })
    },
    async STORE_PAGES_INIT ({commit}, page) {
      await api.getStoreList(page).then(res => {
        commit(STORE_PAGES_SET, res.data)
      })
    },
    async STORE_DETAIL_INIT ({commit}, id) {
      await api.getStoreDetailSellers(id).then(res => {
        commit(STORE_DETAIL_SELLERS_SET, res.data)
      })
      await api.getStoreDetailInfo(id).then(res => {
        commit(STORE_DETAIL_INFO_SET, res.data)
      })
      await api.getStoreDetail(id).then(res => {
        commit(STORE_DETAIL_SET, res.data)
      })
    }
  }
}
