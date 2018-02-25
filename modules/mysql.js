const mysql = require("sync-mysql")

var connection;

exports.connect = function(user, pass, host, db) {
  conn = new mysql({
    host     : host,
    user     : user,
    password : pass,
    database : db
  });
  var result = conn.query('SELECT `id` FROM `userdata`')
  return result;
}

exports.close = function() {
  conn.end()
}

exports.query = function(query) {
  return conn.query(query)
}
