'use strict'
const Telegram = require('telegram-node-bot');
var http = require('http');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram('644425603:AAFsR-MIvFsv1hKGM8CVZe1YQSDpTW83LUY');

http.createServer(function (req, res) {
    
	class PingController extends TelegramBaseController {
		/**
		 * @param {Scope} $
		 */
		pingHandler($) {
			$.sendMessage('pong')
		}

		get routes() {
			return {
				'pingCommand': 'pingHandler'
			}
		}
	}

	tg.router
		.when(
			new TextCommand('/ping', 'pingCommand'),
			new PingController()
		)
    
}).listen(process.env.PORT || 8080);