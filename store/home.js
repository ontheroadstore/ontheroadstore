import Service from '~plugins/axios'

export const state = () => ({
  banner: {
    carousel: [],
    recommend: []
  }
})
export const mutations = {
  SET_BANNER_CAROUSEL: (state, action) => {
    state.banner.carousel = action
  },
  SET_BANNER_RECOMMEND: (state, action) => {
    state.banner.recommend = action
  }
}
export const actions = {
  async INIT ({ dispatch }) {
    await Promise.all([dispatch('REQ_BANNER_CAROUSEL'), dispatch('REQ_BANNER_RECOMMEND')])
  },
  REQ_BANNER_CAROUSEL ({commit}) {
    Service.get('/recommend').then(response => {
      commit('SET_BANNER_CAROUSEL', response)
    })
  },
  REQ_BANNER_RECOMMEND: ({commit}) => {
    Service.get('/recommend').then(response => {
      commit('SET_BANNER_RECOMMEND', response)
    })
  }
}
