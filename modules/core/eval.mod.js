const util = require('util');
exports.modID = "eval";
exports.load = function() {
	api.commands.add('eval', msg=>{
    if(config.admins.includes(msg.author.id)) {
      var code = msg.content.substring(6)
      try {
        var result = eval(code);
				if(result === undefined) result = 'undefined';
				if(typeof result === 'object') {
					result = util.inspect(result, {showHidden: false, depth: 10});
				}
        msg.channel.send({embed:{
          "title": "Eval",
          "color": parseInt(config.colors.good,16),
          "fields": [
            {
              "name": ":inbox_tray: Input",
              "value": "```js\n"+code.toString().replace('`',"\u2063`\u2063")+"```"
            },
            {
              "name": ":outbox_tray: Output",
              "value": "```js\n"+result.toString().replace('`',"\u2063`\u2063")+"```"
            }
          ]
        }});
      } catch(err) {
        msg.channel.send({embed:{
          "title": "Eval",
          "color": parseInt(config.colors.error,16),
          "fields": [
            {
              "name": ":inbox_tray: Input",
              "value": "```js\n"+code.toString().replace('`',"\u2063`\u2063")+"```"
            },
            {
              "name": ":x: Error",
              "value": "```js\n"+err.toString().replace('`',"\u2063`\u2063")+"```"
            }
          ]
        }});
      }
    } else {
      msg.channel.send('You are not admin.')
    }
	});
	api.commands.setDescription('eval','Developer only command for testing');
	api.commands.setUsage('eval','<code>');
}
