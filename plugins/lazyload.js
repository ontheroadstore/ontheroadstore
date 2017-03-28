import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
if (process.BROWSER_BUILD) {
  Vue.use(VueLazyload, {
    attempt: 0
  })
}
