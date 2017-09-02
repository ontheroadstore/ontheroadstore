module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '公路商店',
    titleTemplate: '%s - 公路商店',
    htmlAttrs: {
      xmlns: 'http://www.w3.org/1999/xhtml',
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { name: 'author', content: 'fucked@psychokiller.me' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '公路商店致力于发现、探索尚未被商业力量全面污染的青年文化以及一切被年轻人所接纳的事物和观点，以先锋视角演绎有趣的青年生活方式' },
      { name: 'keywords', content: '公路商店,黑市,疯狂店员,公路商店老公,公路商店小白,青年文化,先锋文化' },
      { name: 'baidu-site-verification', content: 'ce6YhEPM8z' },
      { name: '360-site-verification', content: 'e2272b6d3a36cea33d4d09d62765a3be' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  cache: {
    max: 20,
    maxAge: 600000
  },
  performance: {
    gzip: true
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/loading.vue',
  css: [
    { src: '~/assets/css/main.scss', lang: 'scss' },
    { src: 'element-ui/lib/theme-default/index.css' },
    { src: 'animate.css/animate.min.css' },
    { src: 'hover.css/scss/hover.scss', lang: 'scss' },
    { src: 'smooth-scrollbar/dist/smooth-scrollbar.css' }
  ],
  plugins: [
    { src: '~/plugins/element-ui.js', ssr: true },
    { src: '~/plugins/lazyload.js', ssr: false },
    { src: '~/plugins/smooth-scroll.js', ssr: false },
    { src: '~/plugins/sticky.js', ssr: false },
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/baidu-seo-push.js', ssr: false },
    { src: '~/plugins/highlighter.js', ssr: false },
    { src: '~/plugins/baidu-map.js', ssr: true },
    { src: '~/plugins/preview.js', ssr: true }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
