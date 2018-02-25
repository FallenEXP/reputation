exports.modID = "ping";
exports.load = function() {
	api.addCommand('ping', 'Like to spam? We have got you covered', '', msg=>{
		msg.channel.send('Pong!');
	});
	api.addCommand('pong', 'For every ping, theres a pong.', '', msg=>{
		msg.channel.send('Ping!');
	});
}
