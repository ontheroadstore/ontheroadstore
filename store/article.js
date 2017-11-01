export const state = () => ({
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
  }
}

export const actions = {
  async REQ_LIST ({commit}, page) {
    await this.$axios.get('article/list', {
      params: {
        page: page
      }
    }).then(res => {
      commit('SET_INDEX', res.data)
    })
  },
  async REQ_PAGES ({commit}, page) {
    const res = await this.$axios.get('article/list', {
      params: {
        page: page
      }
    })
    if (page > res.data.total_pages) {
      return false
    } else {
      commit('SET_PAGES', res.data)
      return true
    }
  }
}
