const Discord = require("discord.js");
const client = new Discord.Client();
global.db = require("./utils/mysql.js");
const fs = require("fs");
global.config = JSON.parse(fs.readFileSync('config.json'))

var mysqluser = process.env.mysqluser;
var mysqlpass = process.env.mysqlpass;
var mysqlhost = process.env.mysqlhost;
var mysqldb = process.env.mysqldb;

//TODO: make a database module
console.log("Attempting mysql connection...")
if (db.connect(mysqluser, mysqlpass, mysqlhost, mysqldb) == true) {
  console.log("MySQL connection established")
} else {
  console.log("MySQL error! "+conresult)
}

let commands = {};
global.commandHelp = []
global.api = {
	addCommand: function(name, description, usage, callback) {
    commandHelp.push({"name": name, "desc": description, "usage": usage})
		commands[name] = callback;
    return true
	},
  removeCommand: function(name) {
    commands[name].delete;
    return true
  },
	//automatically excludes bots
	onMessage: function(callback) {
		client.on('message',function(msg) {
			if(!msg.author.bot) callback();
		})
	},
	getRep: function () {
		//todo
	},
	addRep: function () {
		//todo
	}
}

require("./utils/walkSync.js").walkSync('modules')[0].filter(p=>p.endsWith('.mod.js')).forEach(function(file) {
	try {
		let mod = require("./"+file);
		if('load' in mod && 'modID' in mod) {
			mod.load();
		} else throw "Missing Information"
	} catch (e) {
		console.log("Cannot Load "+file+": "+e);
	}
});

client.on('ready', () => {
  console.log(`[BOT] Logged in as ${client.user.tag}!`);
});

var today;
client.on("message", (msg) => {
	if(msg.author.bot) return;

	if (msg.content.startsWith("!")) {
    var args = msg.content.split(" ");
    var cmd = args[0].substring(1).toLowerCase();
		if(cmd in commands) {
      try {
			  commands[cmd](msg);
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
