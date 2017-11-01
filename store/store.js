export const state = () => ({
  detail: {
    comments: {},
    pagination: {
      current: null,
      total: null,
      pagetotal: null
    }
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
  SET_COMMENT: (state, action) => {
    state.detail.comments = action.comments
    state.detail.pagination = {
      current: parseInt(action.current_page),
      total: parseInt(action.total_count),
      pagetotal: parseInt(action.total_pages)
    }
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
  }
}

export const actions = {
  async REQ_LIST ({commit}, page) {
    const res = await this.$axios.get('store/list', {
      params: {
        page: page
      }
    })
    commit('SET_INDEX', res.data)
  },
  async REQ_PAGES ({commit}, page) {
    const res = await this.$axios.get('store/list', {
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
  },
  async REQ_COMMENT ({state, commit}, id, page) {
    const res = await this.$axios.get('store/comment', {
      params: {
        id: id,
        page: page,
        page_size: 10
      }
    })
    commit('SET_COMMENT', res.data)
  }
}
