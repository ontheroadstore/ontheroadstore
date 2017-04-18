import Vue from 'vue'
import Scrollbar from 'smooth-scrollbar'

export default Vue.directive('sticky', {
  inserted: function (el, binding, vnode) {
    let gapHeight
    if (!document.getElementById('main').getBoundingClientRect().top) {
      gapHeight = el.getBoundingClientRect().top
    } else {
      gapHeight = el.getBoundingClientRect().top - document.getElementById('main').getBoundingClientRect().top
    }
    Scrollbar.get(document.getElementById('main')).addListener(status => {
      if (status.offset.y > gapHeight) {
        el.style.top = (status.offset.y - gapHeight) + 'px'
      }
    })
  },
  unbind: function (el) {
    el.style.top = 0 + 'px'
  }
})
