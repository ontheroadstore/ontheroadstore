import api from '../../api/'
export const INDEX_GET_ITEMS = 'INDEX_GET_ITEMS'
export const INDEX_SET_ITEMS = 'INDEX_SET_ITEMS'
export const INDEX_INIT_ITEMS = 'INDEX_GET_ITEMS'
export default {
  state: {
    banner: {
      carouselItems: [],
      coverItems: []
    }
  },
  mutations: {
    INDEX_SET_ITEMS: (state) => {
      console.log(state)
    }
  },
  actions: {
    INDEX_INIT_ITEMS: ({commit}) => {
      api.getIndex().then(res => {
        // console.log(res.data)
      })
    }
  }
}
