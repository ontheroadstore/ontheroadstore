import Service from '~/plugins/axios'

export const state = () => ({
  detail: {
    items: {},
    sellers: {},
    comments: {},
    pagination: {
      current: null,
      total: null,
      pagetotal: null
    },
    praises: {},
    alike: [],
    keywords: []
  },
  index: {
    items: [],
    pagination: {
      current: null,
      total: null,
      pagetotal: null
    }
  },
  pages: {
    items: [],
    pagination: {
      current: null,
      total: null,
      pagetotal: null
    }
  }
})

export const mutations = {
  SET_DETAIL: (state, action) => {
    state.detail.items = action
  },
  SET_SELLERS: (state, action) => {
    state.detail.sellers = action
  },
  SET_COMMENT: (state, action) => {
    state.detail.comments = action.comments
    state.detail.pagination = {
      current: parseInt(action.current_page),
      total: parseInt(action.total_count),
      pagetotal: parseInt(action.total_pages)
    }
  },
  SET_ALIKE: (state, action) => {
    state.detail.alike = action
  },
  SET_PRAISE: (state, action) => {
    state.detail.praises = action.list
  },
  SET_INDEX: (state, action) => {
    state.index.items = state.index.items.concat(action.list)
    state.index.pagination = {
      current: parseInt(action.current_page),
      total: parseInt(action.total_count),
      pagetotal: parseInt(action.total_pages)
    }
  },
  SET_PAGES: (state, action) => {
    state.pages.items = action.list
    state.pages.pagination = {
      current: parseInt(action.current_page),
      total: parseInt(action.total_count),
      pagetotal: parseInt(action.total_pages)
    }
  },
  SET_DETAIL_ERROR: (state, action) => {
    state.detail.isError = action
  },
  CLEAR_INDEX: (state) => {
    state.index.items = []
    state.index.pagination = {
      current: null,
      total: null,
      pagetotal: null
    }
  },
  CLEAR_DETAIL: (state) => {
    state.detail.items = {}
    state.detail.sellers = {}
    state.detail.comments = {}
    state.detail.comment_total_count = {}
    state.detail.keywords = []
  }
}

export const actions = {
  REQ_DETAIL: ({commit}, id) => {
    return Service.get('store/detail', {
      params: {
        id: id
      }
    }).then(response => {
      commit('SET_DETAIL', response)
    })
  },
  REQ_SELLERS: ({state, commit}, id) => {
    return Service.get('store/sellers', {
      params: {
        post_id: id
      }
    }).then(response => {
      commit('SET_SELLERS', response)
    })
  },
  REQ_LIST: ({commit}, page) => {
    return Service.get('store/list', {
      params: {
        page: page
      }
    }).then(response => {
      commit('SET_INDEX', response)
    })
  },
  REQ_PAGES: ({commit}, page) => {
    return Service.get('store/list', {
      params: {
        page: page
      }
    }).then(response => {
      commit('SET_PAGES', response)
    })
  },
  REQ_COMMENT: ({state, commit}, id, page) => {
    return Service.get('store/comment', {
      params: {
        id: id,
        page: page,
        page_size: 999
      }
    }).then(response => {
      commit('SET_COMMENT', response)
    })
  },
  REQ_PRAISE: ({commit}, id) => {
    return Service.get('store/praise', {
      params: {
        id: id,
        page_size: 100
      }
    }).then(response => {
      commit('SET_PRAISE', response)
    })
  },
  REQ_ALIKE: ({state, commit}, id) => {
    return Service.get('store/alike', {
      params: {
        id: id
      }
    }).then(response => {
      commit('SET_ALIKE', response)
    })
  }
}
