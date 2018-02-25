exports.modID = "help";
exports.load = function() {
	api.addCommand('help', 'Shows this message', '', msg=>{
		var output = "**Command <required> [optional]** >> Description";
    commandHelp.forEach(function(cmd) {
      output += "\n**"+cmd.name+" "+cmd.usage+"** >> "+cmd.desc
    })
    console.log(output)
    msg.channel.send({embed:{
      "title": "Help",
      "color": parseInt(config.colors.info,16),
      "content": output
    }});
	})
}
