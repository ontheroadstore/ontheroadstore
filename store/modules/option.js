import Vue from 'vue'
export const OPTION_SET_MOBILE_LAYOUT = 'OPTION_SET_MOBILE_LAYOUT'
export const OPTION_SET_GLOBAL = 'OPTION_SET_GLOBAL'
export const OPTION_GET_GLOBAL = 'OPTION_GET_GLOBAL'

export const SEARCH_DIALOG_SHOW = 'SEARCH_DIALOG_SHOW'
export const SEARCH_DIALOG_HIDE = 'SEARCH_DIALOG_HIDE'

export default {
  state: {
    isMobile: null,
    globalOption: {
      searchDialogDisplay: false
    }
  },
  mutations: {
    OPTION_SET_MOBILE_LAYOUT: (state, data) => {
      Vue.set(state, 'isMobile', data)
    },
    OPTION_SET_GLOBAL: (state, data) => {
      Vue.set(state.globalOption, data.type, data.value)
    }
  },
  actions: {
    SEARCH_DIALOG_SHOW: ({commit}) => {
      commit(OPTION_SET_GLOBAL, {
        type: 'searchDialogDisplay',
        value: true
      })
    },
    SEARCH_DIALOG_HIDE: ({commit}) => {
      commit(OPTION_SET_GLOBAL, {
        type: 'searchDialogDisplay',
        value: false
      })
    }
  },
  getters: {
    OPTION_GET_GLOBAL: (state) => {
      return state.globalOption
    }
  }
}
