module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '公路商店',
    titleTemplate: '%s - 公路商店',
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
    { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    { name: 'script', content: 'https://og6593g2z.qnssl.com/fundebug.0.0.5.min.js', apikey: '1e2d35d221229e26bf6019dc9adc2f0ac9a9f38a6b72c202ca35d498027b2613' }
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
  dev: (process.env.NODE_ENV !== 'production'),
  /*
  ** Global CSS
  */
  css: [
  // { src: '~assets/css/main.scss', lang: 'scss' },
  { src: '~assets/css/theme-default/lib/index.css' },
  { src: 'animate.css/animate.min.css' },
  { src: 'hover.css/scss/hover.scss', lang: 'scss' },
  { src: 'smooth-scrollbar/dist/smooth-scrollbar.css' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#13ce66' },
  /*
  ** 插件
  */
  plugins: [
  { src: '~plugins/element-ui.js', ssr: true },
  { src: '~plugins/lazyload.js', ssr: false },
  { src: '~plugins/smooth-scroll.js', ssr: false },
  { src: '~plugins/sticky.js', ssr: false },
  { src: '~plugins/ga.js', ssr: true },
  { src: '~plugins/baidu-seo-push.js', ssr: true },
  { src: '~plugins/highlighter.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    vendor: ['axios', 'underscore', 'element-ui', 'vue-lazyload', 'smooth-scrollbar'],
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
