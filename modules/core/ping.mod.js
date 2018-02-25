exports.modID = "ping";
exports.load = function() {
	api.addCommand('ping', 'Like to spam? We have got you covered', '', msg=>{
		msg.channel.send('Pong!');
	});
}
