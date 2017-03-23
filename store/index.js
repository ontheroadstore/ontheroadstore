import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Index from './modules/index.js'
import Search from './modules/search.js'
import Option from './modules/option.js'

export default new Vuex.Store({
  actions: {
    nuxtServerInit ({ commit }, { req }) {

    }
  },
  modules: {
    Index,
    Search,
    Option
  },
  strict: process.env.NODE_ENV !== 'production'
})

