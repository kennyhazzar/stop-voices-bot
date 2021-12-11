const { Composer } = require("telegraf")

const commands = new Composer()

commands.start(require('./start'))
commands.command("/unsub", require('./unsub'))

module.exports = commands