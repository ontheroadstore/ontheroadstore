// import Vue from 'vue'
export const SET_MOBILE_LAYOUT = 'SET_MOBILE_LAYOUT'

export default {
  state: {
    version: '0.9.6',
    visibleHeader: false,
    visibleAffix: false
  },
  mutations: {
    OPTION_SET_ITEMS: ({ state }, data) => {
      console.log(data)
    },
    SET_MOBILE_LAYOUT: ({ state }, data) => {
      console.log(data)
    }
  }
}
