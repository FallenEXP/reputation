exports.id = 'yesorno';
exports.onLoad = api => {
	api.commands.add('yesorno', msg=>{
		message.delete();
        message.channel.send("( ͡° ͜ʖ ͡°)");
	}).setDescription('Request a Lenny Face!');
}