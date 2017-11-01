export const state = () => ({
  dialog: {
    show: false,
    suggest: [],
    hot_keyword: []
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
  SET_DIALOG_SHOW: (state, action) => {
    state.dialog.show = action
  },
  SET_DIALOG_SUGGEST: (state, action) => {
    state.dialog.suggest = []
    action.list.forEach(value => {
      state.dialog.suggest.push({'value': value})
    })
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
    state.dialog.hot_keyword = action.list
  },
  CLEAR_PAGES: (state) => {
    state.pages.items = []
    state.pages.pagination = {
      current: null,
      total: null,
      pagetotal: null
    }
  }
}

export const actions = {
  async REQ_SEARCH_QUERY ({state, commit}, params) {
    const res = await this.$axios.get('search/search', {
      params: {
        query: params.keyword,
        page: params.page
      }
    })
    console.log(res.data)
    if (res.data) {
      commit('SET_PAGES', res.data)
    }
  },
  async REQ_SEARCH_SUGGEST ({state, commit}, query) {
    const res = await this.$axios.get('search/suggest', {
      params: {
        query: query
      }
    })
    commit('SET_DIALOG_SUGGEST', res.data)
  },
  async REQ_HOT_KEYWORD ({commit}) {
    const res = await this.$axios.get('search/tagsuggestions')
    commit('SET_HOT_KEYWORD', res.data.keyword)
  }
}
