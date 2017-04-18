import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Index from './modules/index.js'
import Article from './modules/article.js'
import Option from './modules/option.js'
import Store from './modules/store.js'

export default new Vuex.Store({
  actions: {
    nuxtServerInit ({ commit, dispatch }, { params, route, isServer, req }) {
      const userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
      const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)
      commit('OPTION_SET_MOBILE_LAYOUT', isMobile)
    }
  },
  modules: {
    Index,
    Option,
    Article,
    Store
  },
  strict: process.env.NODE_ENV !== 'production'
})

