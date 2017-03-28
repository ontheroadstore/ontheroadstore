import Vue from 'vue'
import Stickybits from 'stickybits'
if (process.BROWSER_BUILD) {
  Vue.use(Stickybits)
}
