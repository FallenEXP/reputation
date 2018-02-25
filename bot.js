const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("./modules/mysql.js");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync('config.json'))

const mysql = require("mysql");
var mysqluser = process.env.mysqluser;
var mysqlpass = process.env.mysqlpass;
var mysqlhost = process.env.mysqlhost;
var mysqldb = process.env.mysqldb;

console.log(db.connect(mysqluser, mysqlpass, mysqlhost, mysqldb))

client.on('ready', () => {
  console.log(`[BOT] Logged in as ${client.user.tag}!`);
});
var today;
client.on("message", (msg) => {
  var day = new Date().getDate(); //get todays day
  if (today != day) {
    today = day
    //take 10% from all users
  }
  if (msg.content.startsWith("!")) {
    var args = msg.content.split(" ");
    var cmd = args[0].substring(1).toLowerCase();
    var ment = msg.mentions;
  }
  if (cmd == "!ping") {
    msg.channel.send({embed:{
    //"color": 0,
    "timestamp": new Date(),
    "fields": [
      {
        "name": ":ping_pong: Ping",
        "value": "todo: Get Ping in MS"
      }
    ]
  }});
  }
});

client.login(process.env.token);
