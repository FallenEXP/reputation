var mysql = require("mysql")

var connection;

exports.connect = function(user, pass, host, db) {
  conn = mysql.createConnection({
    host     : host,
    user     : user,
    password : pass,
    database : db
  });
  conn.connect()
  conn.query('SELECT `id` FROM `userdata`', function (error, results, fields) {
    if (error) {
      return error
    } else {
      return true
    }
  })
}

exports.close = function() {
  conn.end()
}

exports.query = function(query) {
  conn.query(query, function (error, results, fields) {
    if (error) {
      return error
    } else {
      return results
    }
  })
}
