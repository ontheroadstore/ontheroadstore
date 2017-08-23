import Service from '~/plugins/axios'

export const state = () => ({
  banner: {
    carousel: [],
    recommend: []
  },
  video: [],
  article: [],
  store: {
    items: [],
    pagination: {
      current: null,
      total: null,
      pagetotal: null
    }
  },
  top10: []
})
export const mutations = {
  SET_BANNER_CAROUSEL: (state, action) => {
    state.banner.carousel = action
  },
  SET_BANNER_RECOMMEND: (state, action) => {
    state.banner.recommend = action
  },
  SET_ARTICLE_ITEMS: (state, action) => {
    state.article = action
  },
  SET_TOP10: (state, action) => {
    state.top10 = action
  },
  SET_STORE_ITEMS: (state, action) => {
    state.store.items = state.store.items.concat(action.list)
    state.store.pagination = {
      current: parseInt(action.current_page),
      total: parseInt(action.total_count),
      pagetotal: parseInt(action.total_pages)
    }
  },
  SET_VIDEO: (state, action) => {
    state.video = action.list
  },
  CLEAR_STORE_ITEMS: (state) => {
    state.store.items = []
    state.store.pagination = {
      current: null,
      total: null,
      pagetotal: null
    }
  }
}
export const actions = {
  REQ_BANNER_CAROUSEL: ({commit}) => {
    return Service.get('index/recommend').then(response => {
      commit('SET_BANNER_CAROUSEL', response)
    })
  },
  REQ_BANNER_RECOMMEND: ({commit}) => {
    return Service.get('index/recommend').then(response => {
      commit('SET_BANNER_RECOMMEND', response)
    })
  },
  REQ_ARTICLE: ({commit}) => {
    return Service.get('index/article').then(response => {
      commit('SET_ARTICLE_ITEMS', response)
    })
  },
  REQ_TOP10: ({commit}) => {
    return Service.get('index/top10').then(response => {
      commit('SET_TOP10', response)
    })
  },
  REQ_STORE ({commit}, page) {
    return Service.get('index/store', {
      params: {
        page: page
      }
    }).then(response => {
      commit('SET_STORE_ITEMS', response)
    })
  },
  REQ_VIDEO ({commit}, page) {
    return Service.get('index/video', {
      params: {
        page: page,
        page_size: 9
      }
    }).then(response => {
      commit('SET_VIDEO', response)
    })
  }
}
