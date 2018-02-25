const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("./utils/mysql.js");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync('config.json'))
var admins = ["244905301059436545", "216346350936260611"]

var mysqluser = process.env.mysqluser;
var mysqlpass = process.env.mysqlpass;
var mysqlhost = process.env.mysqlhost;
var mysqldb = process.env.mysqldb;

//TODO: make a database module
console.log("Attempting mysql connection...".yellow)
if (db.connect(mysqluser, mysqlpass, mysqlhost, mysqldb) == true) {
  console.log("MySQL connection established".green)
} else {
  console.log("MySQL error!".red+conresult)
}

let commands = {};
global.api = {
	addCommand: function(name, callback) {
		commands[name] = callback;
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
    if(cmd == "eval") {
      if(admins.includes(msg.author.id)) {
        try {
          msg.channel.send(eval(msg.content.substring(6)))
        } catch(err) {
          msg.channel.send("**Error**: " + clean(err))
        }
      } else {
        msg.channel.send('You are not admin.')
      }
    }
		if(cmd in commands) {
			commands[cmd](msg);
		}
  }
});

client.login(process.env.token);
