const TelegramApi = require('node-telegram-bot-api')
const TOKEN = '5560063353:AAEzd5d1QXgApGXRBKiVXEHFjSgbxZQhZi8'

const bot = new TelegramApi(TOKEN, {polling: true})
