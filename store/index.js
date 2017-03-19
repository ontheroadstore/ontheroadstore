import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Index from './modules/index.js'
import Search from './modules/search.js'

export default new Vuex.Store({
  modules: {
    Index,
    Search
  },
  strict: process.env.NODE_ENV !== 'production'
})
