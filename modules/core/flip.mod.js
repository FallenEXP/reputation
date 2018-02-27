exports.modID = "flip";
exports.load = function() {
	api.commands.add('flip', msg=>{
		var flip = Math.floor(Math.random() * 2) + 1;
        if(flip == 1) {
            message.reply("You have flipped heads! :red_circle:");
            logActions(message, `${sender} has flipped a coin and had gotten heads.`);
        }else{
            message.reply("You have flipped tails! :large_blue_circle:");
        }
	})
		.setDescription('Flip a Coin!');

	api.commands.add('flip', msg=>{
		var flip = Math.floor(Math.random() * 2) + 1;
        if(flip == 1) {
            message.reply("You have flipped heads! :red_circle:");
            logActions(message, `${sender} has flipped a coin and had gotten heads.`);
        }else{
            message.reply("You have flipped tails! :large_blue_circle:");
        }
	})
		.setDescription('Flip a Coin!');
}
