exports.id = 'yesorno';
exports.onLoad = api => {
	api.commands.add('yesorno', msg=>{
		var yes = Math.floor(Math.random() * 2) + 1;
        
        if(args.length == 1) {
            message.channel.send("You did not define an argument. Usage: `!yesorno [question]`");
        }else {
            if(yes == 1) {
                message.reply("Yes.");
            }else {
                message.reply("No.");
            }
        }
	}).setDescription('Ask a Question!');
}