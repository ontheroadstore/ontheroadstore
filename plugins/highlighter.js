import Vue from 'vue'

export default Vue.directive('highlight', {
  inserted: function (el, binding, vnode) {
    // 模板
    let options = {
      startTag: '<b style="color: red; margin: 0 .2rem">',
      endTag: '</b>'
    }

    function wrapper (match) {
      return options.startTag + match + options.endTag
    }

    function highlight (keywords, text) {
      let regex = keywords.split(' ')
      regex = regex.filter(function (char) {
        return char !== ''
      })
      regex = regex.join('|')
      regex = regex.replace(/[-[\]{}()*+?.,\\^$]/g, '\\$&')
      let matcher = new RegExp(regex, 'gi')
      return text.replace(matcher, wrapper)
    }

    el.innerHTML = highlight(binding.value, el.innerHTML)
  }
})
