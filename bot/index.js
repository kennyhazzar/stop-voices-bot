const { Telegraf } = require('telegraf')
const ms = require('ms')
const mongoose = require('mongoose')
const config = require('config')

const bot = new Telegraf(config.get('botToken'), {
    handlerTimeout: ms('5s'),
    telegram: { webhookReply: false }
})

async function start() {
    try {
        mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        bot.launch()
        console.log('Started')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {bot, start}