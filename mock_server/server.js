import jsonServer from 'json-server'
// var jsonServer = require('json-server')
var server = jsonServer.create()
// var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()
server.use(middlewares)

server.get('/echo', function (req, res) {
  res.jsonp(req.query)
})

server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

server.listen(3010, function () {
  console.log('JSON Server is running')
})
