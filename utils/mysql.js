const MySQL = require("sync-mysql");
let conn;

exports.connect = function(user, pass, host, db) {
	try {
		let conn = new MySQL({
	    host     : host,
	    user     : user,
	    password : pass,
	    database : db
	  });
	} catch (e) {
		return false;
	}
  return true;
}

exports.close = function() {
  conn.end()
}

exports.query = function(query) {
  return conn.query(query)
}
