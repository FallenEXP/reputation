const mysql = require("sync-mysql")

var connection;

exports.connect = function(user, pass, host, db) {
  conn = mysql.createConnection({
    host     : host,
    user     : user,
    password : pass,
    database : db
  });
  conn.connect()
  var result = conn.query('SELECT `id` FROM `userdata`')
  return result;
}

exports.close = function() {
  conn.end()
}

exports.query = function(query) {
  return conn.query(query)
}
