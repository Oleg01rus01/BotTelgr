'use strict'
const Telegram = require('telegram-node-bot')
var express = require("express")
,app = express()
const PORT = process.env.PORT || 5000
app.set("PORT", PORT)
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
	

	tg.router
		.when(
			new TextCommand('/ping', 'pingCommand'),
			new PingController()
		)
