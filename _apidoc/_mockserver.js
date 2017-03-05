import puerMock from 'puer-mock'
// 其实你完全可以这样来玩, 在这里接着定义 route 即可, 发挥你的想象力
// 例如定义一个常用的 500 接口, 来测试服务器报错的情况
// routeConfig['GET /500'] = function(request, response, next) {
//     response.status(500).end()
// }
export default puerMock({

})
