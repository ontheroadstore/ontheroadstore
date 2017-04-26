import Vue from 'vue'
import api from '../../api/'

export const SEARCH_INIT_ITEMS = 'SEARCH_INIT_ITEMS'
export const SEARCH_SET_ITEMS = 'SEARCH_SET_ITEMS'
export const SEARCH_GET_ITEMS = 'SEARCH_GET_ITEMS'
export const SEARCH_CLEAR_ITEMS = 'SEARCH_CLEAR_ITEMS'

export default {
  state: {
    items: [],
    pagination: {
      current: null,
      total: null,
      pagetotal: null
    }
  },
  mutations: {
    SEARCH_INIT_ITEMS: (state, data) => {
      Vue.set(state, 'items', data.list)
      Vue.set(state, 'pagination', {
        current: parseInt(data.current),
        total: parseInt(data.total),
        pagetotal: parseInt(data.pagetotal)
      })
    },
    SEARCH_SET_ITEMS: (state, data) => {
      state.items = state.items.concat(data.list)
      Vue.set(state, 'pagination', {
        current: parseInt(data.current),
        total: parseInt(data.total),
        pagetotal: parseInt(data.pagetotal)
      })
    },
    SEARCH_CLEAR_ITEMS: (state) => {
      state.items = []
      Vue.set(state, 'pagination', {
        current: null,
        total: null,
        pagetotal: null
      })
    }
  },
  actions: {
    async SEARCH_INIT_ITEMS ({ commit, dispatch }, keyword) {
      commit(SEARCH_CLEAR_ITEMS)
      await dispatch(SEARCH_GET_ITEMS, {
        page: 1,
        keyword: keyword
      })
    },
    async SEARCH_GET_ITEMS ({ commit }, params) {
      await api.getSearchList({
        page: params.page,
        keyword: params.keyword
      }).then(res => {
        commit(SEARCH_SET_ITEMS, res.data)
      })
    }
  }
}
