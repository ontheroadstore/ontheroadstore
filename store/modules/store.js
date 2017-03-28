import Vue from 'vue'
import api from '../../api/'
export const STORE_LIST_INIT = 'STORE_LIST_INIT'
export const STORE_LIST_SET = 'STORE_LIST_SET'

export const STORE_DETAIL_INIT = 'STORE_DETAIL_INIT'
export const STORE_SET_DETAIL = 'STORE_SET_DETAIL'

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
      Infos: {
        title: null,
        date: null,
        views: null,
        tags: [],
        express: null,
        inventory: null,
        sales: null
      },
      images: [],
      content: null,
      comments: [],
      praise: []
    },
    pages: {

    }
  },
  mutations: {
    STORE_LIST_SET: (state, data) => {
      state.index.items = state.index.items.concat(data.list)
      Vue.set(state.index, 'pagination', {
        current: parseInt(data.current),
        total: parseInt(data.total),
        pagetotal: parseInt(data.pagetotal)
      })
    }
  },
  actions: {
    async STORE_LIST_INIT ({commit, dispatch}) {
      await dispatch('STORE_LIST_GET_IMTES', 1)
    },
    async STORE_LIST_GET_IMTES ({commit}, page) {
      await api.getStoreList(page).then(res => {
        commit('STORE_LIST_SET', res.data)
      })
    }
  },
  getters: {

  }
}
