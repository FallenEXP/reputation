exports.modID = "plzcrash";
exports.load = function() {
	api.addCommand('plzcrash', msg=>{
    if(config.admins.includes(msg.author.id)) {
      while(true) { Math.random() }
    } else {
      msg.channel.send('You are not admin.')
    }
	});
}
