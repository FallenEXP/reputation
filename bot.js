const Discord = require("discord.js");
const client = new Discord.Client();
const mysql = require("./modules/mysql.js")
const fs = require("fs"); // Idk this is good for loading json files.
const config = JSON.parse(fs.readFileSync('config.json'))

require("colors"); // For example, ("This is red.".red)

var mysqluser = process.env.mysqluser;
var mysqlpass = process.env.mysqlpass;
var mysqlhost = process.env.mysqlhost;
var mysqldb = process.env.mysqldb;

console.log(mysql.connect(mysqluser, mysqlpass, mysqlhost, mysqldb))

client.login(process.env.token);

client.on('ready', () => {
  console.log((`[BOT] Logged in as ${client.user.tag}!`).green);
});
var today;
client.on("message", (msg) => {
  var day = new Date().getDate; //get todays day
  if (today != day) {
    today = day
    //take 10% from all users
  }
  if (msg.content.startsWith("!")) {
    var args = msg.content.split(" ")
    var cmd = args[0].substring(1).toLowerCase()
    var ment = msg.mentions
  }
  if (cmd == "ping") {
    msg.channel.send("pong!");
  }
});
