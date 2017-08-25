export const actions = {
  // 全局服务初始化
  nuxtServerInit: (store, { params, route, isServer, req }) => {
    // 检查设备类型
    const userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
    const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)
    store.commit('option/SET_USER_AGENT', userAgent)
    store.commit('option/SET_MOBILE_LAYOUT', isMobile)
    store.dispatch('search/REQ_HOT_KEYWORD')
  }
}
