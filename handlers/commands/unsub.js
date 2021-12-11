const { unsubUserByQuery, getUserOne } = require('../../stores/context/user')

const unsubscribeHandler = async ctx => {
    const user = await getUserOne({ username: ctx.chat.username })
    if (!user || !user.isSub) {
        return ctx.reply("Вы отписались от меня:(\nНо с помощью /start можно вернуться обратно!")
    }
    unsubUserByQuery({ username: user.username })
}

module.exports = unsubscribeHandler