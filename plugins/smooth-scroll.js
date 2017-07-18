import Vue from 'vue'
import Scrollbar from 'smooth-scrollbar'

export default Vue.directive('smooth-scroll', {
  bind: function (el, binding, vnode) {
    Scrollbar.init(el, {
      speed: 0.75,
      alwaysShowTracks: !window.$nuxt.$store.state.option.isMobile
    })
  },
  inserted: function (el, binding, vnode) {
    window.onNuxtReady((app) => {
      // 路由每次发生变化
      app.$nuxt.$on('routeChanged', (to, from) => {
        // 页面Scrollbar初始化，头部置顶，infinte_loading状态为false（初始页面不自动加载）
        // Scrollbar.get(el).scrollTo(0, 0)
        Scrollbar.get(el).setPosition(0, 0)
      })
      // 控制下拉加载刷新
      Scrollbar.get(el).infiniteScroll(() => {
        let infiniteScroll = new Promise(function (resolve) {
          if (app.$store.state.option.infiniteScroll.callback != null) {
            app.$store.state.option.infiniteScroll.callback()
            resolve()
          } else {
            app.$store.commit('option/SET_INFINTE_LOADING', false)
          }
        })
        if (app.$store.state.option.infiniteScroll.loading) {
          app.$store.commit('option/SET_INFINTE_LOADING', false)
          infiniteScroll
          .then(() => {
            app.$store.commit('option/SET_INFINTE_LOADING', true)
          })
        }
      }, 100)
      // 控制交互浮动图片
      Scrollbar.get(el).addListener(status => {
        let currentScroll = status.offset.y / 5
        let currentScrollUnaltered = currentScroll * 5
        for (let node of document.getElementsByClassName('interactive-img')) {
          let scrollDirection = node.getAttribute('data-scroll-direction')
          let scrollSpeed = currentScrollUnaltered / parseInt(node.getAttribute('data-scroll-speed'))
          let elementPosition = node.getAttribute('data-init-position').split('|')
          elementPosition[0] = parseInt(elementPosition[0])
          elementPosition[1] = parseInt(elementPosition[1])
          if (scrollDirection === 'top') {
            node.style.top = (elementPosition[1] - scrollSpeed) + 'px'
          } else if (scrollDirection === 'right') {
            node.style.left = (elementPosition[0] + scrollSpeed) + 'px'
          } else if (scrollDirection === 'bottom') {
            node.style.top = (elementPosition[1] + scrollSpeed) + 'px'
          } else {
            node.style.left = (elementPosition[0] - scrollSpeed) + 'px'
          }
        }
      })
    })
  }
})
