//dependencies
const
    server = require('koa')(),
    logger = require('koa-logger')(),
    serve = require('koa-static')

// server
server
    .use(logger)
    .use(serve('public'))
    .listen(3000);