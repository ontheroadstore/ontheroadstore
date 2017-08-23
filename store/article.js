import Service from '~/plugins/axios'

export const state = () => ({
  detail: {
    item: {}
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
  SET_DETAIL: (state, aticon) => {
    state.detail.item = aticon
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
  CLEAR_INDEX: (state) => {
    state.index.items = []
    state.index.pagination = {
      current: null,
      total: null,
      pagetotal: null
    }
  }
}

export const actions = {
  REQ_DETAIL: ({commit}, id) => {
    return Service.get('article/detail', {
      params: {
        id: id
      }
    }).then(response => {
      commit('SET_DETAIL', response)
    })
  },
  REQ_LIST: ({commit}, page) => {
    return Service.get('article/list', {
      params: {
        page: page
      }
    }).then(response => {
      commit('SET_INDEX', response)
    })
  },
  REQ_PAGES: ({commit}, page) => {
    return Service.get('article/list', {
      params: {
        page: page
      }
    }).then(response => {
      commit('SET_PAGES', response)
    })
  }
}
