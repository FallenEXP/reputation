const MySQL = require("sync-mysql");
exports.modID = "db";
//exports.dependencies = [];
exports.load = function() {
	let exp = {}; // Exported Functions

	exp.connect = function() {
		try {
			global.conn = new MySQL({
		    host     : process.env.mysqluser,
		    user     : process.env.mysqlpass,
		    password : process.env.mysqlhost,
		    database : process.env.mysqldb
		  });
		} catch (e) {
			return e;
		}
	  return true;
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
