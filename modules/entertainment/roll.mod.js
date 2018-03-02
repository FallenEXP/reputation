exports.id = 'roll';
exports.onLoad = api => {
	api.commands.add('roll', msg=>{
		var roll = Math.floor(Math.random() * 6) + 1;
        message.reply(`You have rolled a ${roll} :game_die:`);
	}).setDescription('Roll a Die!');
}