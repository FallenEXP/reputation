exports.modID = "ping";
exports.load = function() {
	api.addCommand('ping', msg=>{
		msg.channel.send('Pong');
	});
}
