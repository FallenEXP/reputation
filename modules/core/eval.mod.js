exports.modID = "eval";
exports.load = function() {
	api.addCommand('eval', msg=>{
    if(msg.author.id == '216346350936260611') {
      msg.channel.send(eval(msg.content.substring(6)))
    } else {
      msg.channel.send('You are not filip.')
    }
	});
}
