import Service from '~/plugins/axios'

export const state = () => ({
  dialog: {
    show: false,
    suggest: [],
    hot_keyword: []
  },
  pages: {
    query: null,
    items: [],
    pagination: {
      current: null,
      total: null,
      pagetotal: null
    }
  }
})

export const mutations = {
  SET_DIALOG_SHOW: (state, action) => {
    state.dialog.show = action
  },
  SET_DIALOG_SUGGEST: (state, action) => {
    state.dialog.suggest = []
    action.list.forEach(value => {
      state.dialog.suggest.push({'value': value})
    })
  },
  SET_QUERY: (state, action) => {
    state.pages.query = action
  },
  SET_PAGES: (state, action) => {
    state.pages.items = state.pages.items.concat(action.list)
    state.pages.pagination = {
      current: parseInt(action.current_page),
      total: parseInt(action.total_count),
      pagetotal: parseInt(action.total_page)
    }
  },
  SET_HOT_KEYWORD: (state, action) => {
    state.dialog.hot_keyword = action
  },
  CLEAR_PAGES: (state) => {
    state.pages.query = null
    state.pages.items = []
    state.pages.pagination = {
      current: null,
      total: null,
      pagetotal: null
    }
  }
}

export const actions = {
  REQ_SEARCH_QUERY: ({state, commit}, page) => {
    return Service.get('search/search', {
      params: {
        query: state.pages.query,
        page: page
      }
    }).then(response => {
      commit('SET_PAGES', response)
    })
  },
  REQ_SEARCH_SUGGEST: ({state, commit}, query) => {
    return Service.get('search/suggest', {
      params: {
        query: query
      }
    }).then(response => {
      commit('SET_DIALOG_SUGGEST', response)
    })
  },
  REQ_HOT_KEYWORD: ({commit}) => {
    return Service.get('search/tagsuggestions').then(response => {
      commit('SET_HOT_KEYWORD', response.keyword.list)
    })
  },
  CLOSE_DIALOG: ({commit}) => {
    commit('SET_DIALOG_SHOW', false)
  },
  OPEN_DIALOG: ({commit}) => {
    commit('SET_DIALOG_SHOW', true)
  }
}
