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
		return e;
	}
  return true;
}

exports.close = function() {
  conn.end()
}


exports.getRep(id) {
	var results = query('SELECT * FROM `userdata` WHERE `id` = '+id)
	return results
}
