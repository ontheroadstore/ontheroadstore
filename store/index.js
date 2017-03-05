import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Index from './modules/index.js'

export default new Vuex.Store({
  modules: {
    Index
  },
  strict: process.env.NODE_ENV !== 'production'
})
