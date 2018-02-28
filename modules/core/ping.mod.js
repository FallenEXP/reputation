exports.id = "ping";
exports.onLoad = function() {
	api.commands.add('ping', msg=>{
		msg.channel.send('Pong!');
	})
		.setDescription('Like to spam? We have got you covered');

	api.commands.add('pong', msg=>{
		msg.channel.send('Ping!');
	})
		.setDescription('For every ping, theres a pong.');
}
