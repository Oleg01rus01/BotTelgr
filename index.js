'use strict'
const Telegram = require('telegram-node-bot')
var app = require('express')();

app.listen(port: process.env.PORT || 3000 , function(){
    console.log('Listening on port '); //Listening on port 8888
});

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
		);


