const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

// collapse this when editing, that might help
global.api = {
	config: global.config = JSON.parse(fs.readFileSync('config.json')),
	commands: {
		registeredCommands: {},
		add: function(name, callback) {
			api.commands.registeredCommands[name] = {
				callback: callback,
				desc: '<No Description>',
				usage: ''
			};
			return {
				setDescription: desc => {api.commands.setDescription(name,desc);},
				setUsage: usage => {api.commands.setUsage(name,usage)}
			};
		},
		remove: function(name) {
			if(!(name in api.commands.registeredCommands)) return false;
			delete api.commands.registeredCommands[name];
			return true;
	  },
		setDescription: function(name, desc) {
			if(!(name in api.commands.registeredCommands)) return false;
			api.commands.registeredCommands[name].desc = desc;
			return {
				setDescription: desc => {api.commands.setDescription(name,desc);},
				setUsage: usage => {api.commands.setUsage(name,usage)}
			};
		},
		setUsage: function(name,usage) {
			if(!(name in api.commands.registeredCommands)) return false;
			api.commands.registeredCommands[name].usage = usage;
			return {
				setDescription: desc => {api.commands.setDescription(name,desc);},
				setUsage: usage => {api.commands.setUsage(name,usage)}
			};
		}
	},
	client: client,
	onMessage: function(callback) {
		client.on('message',function(msg) {
			if(!msg.author.bot) callback();
		});
	},
}

// Module Loading, keep this inside {} so okModules get cleaned
{
	let okModules = {};
	let bannedmodids=Object.keys(api);
	console.log("Searching For Modules.");
	require("./utils/walkSync.js").walkSync('modules').filter(p=>p.endsWith('.mod.js')).forEach(function(file) {
		try {
			let mod = require("./"+file);
			mod.loaded = false;
			if('load' in mod && 'modID' in mod) {
				if(typeof mod.modID !== 'string') throw `exports.modID must be a string (Found ${typeof mod.modID})`;
				if(typeof mod.load !== 'function') throw `exports.load must be a function (Found ${typeof mod.load})`;
				okModules[mod.modID] = mod;
			} else throw "Missing `load` function or `modID` field."
		} catch (e) {
			console.error(`Cannot Load Module File ${file}: ${e}`);
		}
	});
	let tryModuleLoad = function(mod) {
		if('dependencies' in mod) {
			mod.dependencies.forEach(function(dep) {
				if(!(dep in okModules)) throw `${dep} is not a valid module`;
				tryModuleLoad(okModules[dep]);
			})
		}
		// Load mod
		api[mod.modID] = mod.load();
		console.log(`Loaded Module '${mod.modID}'`);
	}
	Object.keys(okModules).forEach(function(k) {
		try {
			tryModuleLoad(okModules[k]);
		} catch (e) {
			console.error(`Cannot Load Module '${k}': ${e}`);
		}
	})
}

client.on('ready', () => {
  console.log(`[BOT] Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
	if(msg.author.bot) return;
	if (msg.content.startsWith("!")) {
    let cmd = msg.content.split(" ")[0].substring(1).toLowerCase();
		if(cmd in api.commands.registeredCommands) {
      try {
			  api.commands.registeredCommands[cmd].callback(msg);
      } catch(err) {
        msg.channel.send({embed:{
          "title": cmd+" Failed",
          "color": parseInt(config.colors.error,16),
          "fields": [
            {
              "name": ":x: Error",
              "value": "```js\n"+err.toString()+"```"
            },
            {
              "name": ":inbox_tray: Error Reporting",
              "value": "If you believe that this error was cause by a bug, please report it at [GitHub](https://github.com/Filip9696/reputation/issues)."
            }
          ]
        }});
      }
		}
  }
});

client.login(process.env.token);
