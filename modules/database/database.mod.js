const MySQL = require("sync-mysql");
exports.id = "db";
//exports.dependencies = [];
exports.onLoad = function() {
	let exp = {}; // Exported Functions
	let conn;
	exp.connect = function() {
		try {
			conn = new MySQL({
		    host     : process.env.mysqlhost,
		    user     : process.env.mysqluser,
		    password : process.env.mysqlpass,
		    database : process.env.mysqldb
		  });
		} catch (e) {
			return e;
		}
	  return conn;
	}

	exp.close = function() {
	  conn.end()
	}

	exp.getRep = function(snowflake) {
		var results = conn.query('SELECT * FROM `userdata` WHERE `snowflake` = '+snowflake)
		return results
	}

	exp.addUser = function(snowflake) {
		var results = conn.query('INSERT INTO `userdata` (`id`, `snowflake`, `rep`) VALUES (NULL, "'+snowflake+'", "0")')
		return results
	}

	exp.setRep = function(snowflake, rep) {
		var results = conn.query('UPDATE `userdata` SET `rep` = '+rep+' WHERE `userdata`.`snowflake` = "'+snowflake+'"')
		return results
	}

	return exp;
}
