const MySQL = require("sync-mysql");
let conn;

module.exports = {}

module.exports.connect = function(user, pass, host, db) {
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

module.exports.close = function() {
  conn.end()
}

module.exports.query = function(query) {
  return conn.query(query)
}
