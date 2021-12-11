const { pushMessage } = require('../../stores/logs/message')

const messageMiddleware = async ctx => {

    // if (ctx.chat.type !== "private") return

    const message = ctx.message
    message.username = message.chat.username
    await pushMessage(message)
    if (message?.voice) {
        if (message.voice.duration <= 3) {
            ctx.deleteMessage(ctx.message.message_id)
        }
    }
}

module.exports = messageMiddleware