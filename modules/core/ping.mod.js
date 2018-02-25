exports.moduleName = "PING";

api.addCommand('ping', msg=>{
	msg.channel.send('Pong');
})
