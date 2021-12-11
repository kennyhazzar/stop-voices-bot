const { bot, start } = require('./bot')

bot.use(require('./handlers'))

start()