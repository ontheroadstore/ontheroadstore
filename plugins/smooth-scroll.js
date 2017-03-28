import Scrollbar from 'smooth-scrollbar'
if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
  window.onNuxtReady((app) => {
    Scrollbar.init(app.$nuxt.$el.offsetParent, {
      speed: 0.75
    })
  })
}
