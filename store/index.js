import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Index from './modules/index.js'
import Search from './modules/search.js'
import Option from './modules/option.js'

export default new Vuex.Store({
  actions: {
    nuxtServerInit ({ commit }, { params, route, isServer, req }) {
      const userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
      const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)
      commit('Option.SET_MOBILE_LAYOUT', isMobile)
    }
  },
  modules: {
    Index,
    Search,
    Option
  },
  strict: process.env.NODE_ENV !== 'production'
})

