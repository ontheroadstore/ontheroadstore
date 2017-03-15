import Vue from 'vue'
// import infiniteScroll from 'vue-infinite-scroll'
if (process.BROWSER_BUILD) {
  var infiniteScroll = require('vue-infinite-scroll')
  Vue.use(infiniteScroll)
}
