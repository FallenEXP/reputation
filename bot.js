const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("./utils/mysql.js");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync('config.json'))

var mysqluser = process.env.mysqluser;
var mysqlpass = process.env.mysqlpass;
var mysqlhost = process.env.mysqlhost;
var mysqldb = process.env.mysqldb;

console.log("Attempting mysql connection...".yellow)
if (db.connect(mysqluser, mysqlpass, mysqlhost, mysqldb) == true) {
  console.log("MySQL connection established".green)
} else {
  console.log("MySQL error!".red+conresult)
}

let commands = {};
global.api = {
	addCommand = function(name, callback) {
		commands['name'] = callback;
	},
	onMessage = function(callback) {
		client.on('message',callback)
	},
	getRep = function () {
		//todo
	},
	addRep = function () {
		//todo
	}
}

require("./utils/walkSync.js")('modules').filter(p=>p.endsWith('.mod.js')).forEach(function(file) {
	try {
		require(file);
		console.log("Loaded "+file);
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


	// TODO: Place in its own module
  var day = new Date().getDate(); //get todays day
  if (today != day) {
    today = day
    //take 10% from all users
  }

	if (msg.content.startsWith("!")) {
    var args = msg.content.split(" ");
    var cmd = args[0].substring(1).toLowerCase();
		if(cmd in commands) {
			commands[cmd](msg);
		}
  }
});

client.login(process.env.token);
