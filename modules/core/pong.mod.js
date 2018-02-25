exports.modID = "pong";
exports.load = function() {
	api.addCommand('pong', 'For every ping, theres a pong.', '', msg=>{
		msg.channel.send('Ping!');
	});
}
