export const SET_SEARCH_DIALOG_STATE = 'SET_SEARCH_DIALOG_STATE'
export const GET_SEARCH_DIALOG_STATE = 'GET_SEARCH_DIALOG_STATE'

export const SEARCH_DIALOG_SHOW = 'SEARCH_DIALOG_SHOW'
export const SEARCH_DIALOG_HIDE = 'SEARCH_DIALOG_HIDE'

export default {
  state: {
    searchDialogDisplay: true
  },
  mutations: {
    SET_SEARCH_DIALOG_STATE: (state, data) => {
      state.searchDialogDisplay = data
    }
  },
  actions: {
    SEARCH_DIALOG_SHOW: ({commit}) => {
      commit(SET_SEARCH_DIALOG_STATE, true)
    },
    SEARCH_DIALOG_HIDE: ({commit}) => {
      commit(SET_SEARCH_DIALOG_STATE, false)
    }
  },
  getters: {
    GET_SEARCH_DIALOG_STATE: (state) => {
      return state.searchDialogDisplay
    }
  }
}
