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

exports.getRep = function(snowflake) {
	var results = query('SELECT * FROM `userdata` WHERE `snowflake` = '+snowflake)
	return results
}

exports.addUser = function(snowflake) {
	var results = query('INSERT INTO `userdata` (`id`, `snowflake`, `rep`) VALUES (NULL, "'+snowflake+'", "0")')
	return results
}

exports.setRep = function(snowflake, rep) {
	var results = query('UPDATE `userdata` SET `rep` = '+rep+' WHERE `userdata`.`snowflake` = "'+snowflake+'"')
	return results
}
