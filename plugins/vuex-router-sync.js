import { sync } from 'vuex-router-sync'
import store from '~store'
import router from '~router'
if (process.BROWSER_BUILD) {
  sync(store, router)
}
