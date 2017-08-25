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
    // { src: '~/plugins/ga.js', ssr: true },
    // { src: '~/plugins/baidu-seo-push.js', ssr: true },
    { src: '~/plugins/highlighter.js', ssr: false },
    { src: '~/plugins/baidu-map.js', ssr: true }
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
