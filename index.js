'use strict'
const Telegram = require('telegram-node-bot');
var https = require('http');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram('644425603:AAFsR-MIvFsv1hKGM8CVZe1YQSDpTW83LUY');

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
	
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
	tg.router
		.when(
			new TextCommand('/ping', 'pingCommand'),
			new PingController()
		)
    
}).listen(process.env.PORT || 3030);