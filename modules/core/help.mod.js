exports.modID = "help";
exports.load = function() {
	api.commands.add('help', msg=>{
		var output = "**Command <required> [optional]** >> Description";

    Object.keys(api.commands.registeredCommands).forEach(function(key) {
			let cmd = api.commands.registeredCommands[key];
      output += "\n**!"+key+" "+cmd.usage+"** >> "+cmd.desc
    })

    msg.channel.send({embed:{
      "title": "Help",
      "color": parseInt(config.colors.info,16),
      "description": output
    }});
	}).setDescription('Shows This Message');
}