exports.modID = "pong";
exports.load = function() {
	api.addCommand('pong', msg=>{
		msg.channel.send('Ping!');
	});
}
