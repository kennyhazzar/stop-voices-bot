const { Composer } = require('telegraf')

const handler = new Composer()

handler.use(require('./commands'))

handler.use(require('./middlewares'))

handler.on('audio', ctx => {
    console.log(ctx.message)
})

module.exports = handler