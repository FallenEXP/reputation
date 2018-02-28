exports.modID = 'flip';
exports.load = function() {
	api.commands.add('flip', msg=>{
		var flip = Math.floor(Math.random() * 2) + 1;
        if (flip == 1) {
            msg.reply('You have flipped heads! :red_circle:');
            logActions(msg, sender + ' has flipped a coin and had gotten heads.');
        } else {
            msg.reply("You have flipped tails! :large_blue_circle:");
        }
	}).setDescription('Flip a Coin!');
}
