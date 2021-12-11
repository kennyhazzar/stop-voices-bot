const { getUserOne, addUser, returnToSub } = require('../../stores/context/user')

const startHandler = async ctx => {
    if (ctx.chat.type !== "private") return

    let user = await getUserOne({ username: ctx.chat.username })

    if (user?.isSub) {
        ctx.reply("И тебе привет:)")
    }

    if (!user) {
        user = ctx.chat
        user.date = Date.now()
        user.isSub = true
        await addUser(user)
        return ctx.reply("Привет! Здесь ты можешь посмотреть свою статистику в нашей беседе")
    }

    if (!user?.isSub) {
        returnToSub({ username: ctx.chat.username })
        return ctx.reply(`Привет, ${ctx.chat.username}! Мы снова рады тебя видеть:)`)
    }
}

module.exports = startHandler