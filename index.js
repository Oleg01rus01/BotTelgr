'use strict'

var tg = require('telegram-node-bot')('644425603:AAFsR-MIvFsv1hKGM8CVZe1YQSDpTW83LUY')
 
tg.router.
    when(['ping'], 'PingController')

tg.controller('PingController', ($) => {
    tg.for('ping', () => {
        $.sendMessage('pong')
    })
}) 
