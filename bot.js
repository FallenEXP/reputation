const BotCore = require('reputation-core');
const fs = require('fs');

let config = Object.assign({
	modulePath: 'modules',
	token: process.env.token
}, JSON.parse(fs.readFileSync('config.json')));

let bot = new BotCore(config);

bot.on('ready', () => {
	console.log('Logged in as ' + bot.client.user.tag);
});