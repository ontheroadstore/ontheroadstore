import Vue from 'vue'
import Element from 'element-ui'
if (process.BROWSER_BUILD) {
  Vue.use(Element)
}
