exports.modID = "eval";
exports.load = function() {
	api.addCommand('eval', msg=>{
    if(msg.author.id == '216346350936260611') {
      try {
        msg.channel.send(eval(msg.content.substring(6)))
      } catch(err) {
        msg.channel.send("**Error**: " + clean(err))
      }
    } else {
      msg.channel.send('You are not filip.')
    }
	});
}
