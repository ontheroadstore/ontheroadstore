module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '公路商店',
    titleTemplate: '%s | 公路商店',
    // __dangerouslyDisableSanitizers: ['script'],
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
    { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  cache: {
    max: 20,
    maxAge: 600000
  },
  transition: {
    name: 'main',
    mode: 'out-in',
    beforeEnter (el) {
      console.log(el)
    }
  },
  dev: (process.env.NODE_ENV !== 'production'),
  /*
  ** Global CSS
  */
  css: [
  { src: '~assets/css/main.scss', lang: 'scss' }, { src: '~assets/css/theme-default/lib/index.css', lang: 'scss' }, 'vue2-animate/dist/vue2-animate.min.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** 插件
  */
  plugins: [
    '~plugins/element-ui.js',
    '~plugins/lazyload.js',
    '~plugins/vuex-router-sync.js',
    '~plugins/infiniteScroll.js',
    '~plugins/ga.js',
    '~plugins/baidu-seo-push.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    vendor: ['axios', 'element-ui', 'vue-lazyload', 'vue-infinite-scroll'],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: '/(node_modules)/'
        })
      }
    }
  }
}
