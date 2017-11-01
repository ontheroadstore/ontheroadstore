export const state = () => ({
  store: {
    items: [],
    pagination: {
      current: null,
      total: null,
      pagetotal: null
    }
  }
})
export const mutations = {
  SET_STORE_ITEMS: (state, action) => {
    state.store.items = state.store.items.concat(action.list)
    state.store.pagination = {
      current: parseInt(action.current_page),
      total: parseInt(action.total_count),
      pagetotal: parseInt(action.total_pages)
    }
  }
}
export const actions = {
  async REQ_STORE ({commit}, page) {
    const res = await this.$axios.get('index/store', {
      params: {
        page: page
      }
    })
    return commit('SET_STORE_ITEMS', res.data)
  }
}
