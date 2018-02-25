/////////////////////
// Simple Bot Base //
/////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs"); // Idk this is good for loading json files.
const config = JSON.parse(fs.readFileSync('config.json'))

require("colors"); // For example, ("This is red.".red)

var mysqlpass = process.env.mysqlpass;
var mysqluser = process.env.mysqluser;
var mysqlhost = process.env.mysqlhost;
var mysqldb = process.env.mysqldb;

client.login(process.env.token);

client.on('ready', () => {
  console.log((`[BOT] Logged in as ${client.user.tag}!`).green);
});
