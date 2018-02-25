exports.modID = "eval";
exports.load = function() {
	api.addCommand('eval', msg=>{
    if(admins.includes(msg.author.id)) {
      var code = msg.content.substring(6)
      try {
        var result = eval(code)
        msg.channel.send({embed:{
          "title": "Eval",
          "color": colors.good,
          "fields": [
            {
              "name": ":inbox_tray: Input",
              "value": "```js\n"+code+"```"
            },
            {
              "name": ":outbox_tray: Output",
              "value": "```js\n"+result+"```"
            }
          ]
        }});
      } catch(err) {
        msg.channel.send({embed:{
          "title": "Eval",
          "color": colors.error,
          "fields": [
            {
              "name": ":inbox_tray: Input",
              "value": "```js\n"+code+"```"
            },
            {
              "name": ":x: Error",
              "value": "```js\n"+err.toString()+"```"
            }
          ]
        }});
      }
    } else {
      msg.channel.send('You are not admin.')
    }
	});
}
