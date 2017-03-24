module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '公路商店',
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  cache: true,
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
  plugins: ['~plugins/element-ui.js', '~plugins/lazyload.js', '~plugins/vuex-router-sync.js', '~plugins/infiniteScroll.js'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    vendor: ['axios'],
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
