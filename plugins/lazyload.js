import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  error: '/flag_min.gif',
  loading: '/loading.gif',
  attempt: 0
})

