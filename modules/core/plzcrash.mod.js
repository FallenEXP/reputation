exports.modID = "plzcrash";
exports.load = function() {
	api.addCommand('plzcrash', msg=>{
    if(config.admins.includes(msg.author.id)) {
      eval(true = false)
    } else {
      msg.channel.send('You are not admin.')
    }
	});
}
