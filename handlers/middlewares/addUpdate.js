const { addUpdates } = require('../../stores/logs/getUpdatesLog')

const addUpdateHandler = async (ctx, next) => {
    const update = (await ctx.telegram.getUpdates())[0]
    await addUpdates(update)
    next()
}

module.exports = addUpdateHandler