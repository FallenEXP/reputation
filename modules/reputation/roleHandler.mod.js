const tinygradient = require("tinygradient")
exports.modID = "roleHandler";
// Array of other modules that are needed to be loaded BEFORE this one.
exports.dependencies = [];
exports.load = function() {
	let exp = {};

	let makeColorArrays = () => {
		let names = tinygradient(
			{color: '#'+api.config.colors.lotsOfNegRep, pos: 0},
			{color: '#'+api.config.colors.noRep, pos: 0.5},
			{color: '#'+api.config.colors.lotsOfRep, pos: 1});
		let colors = names.rgb(api.config.numOfColorRoles);
		let output = [];

		colors.forEach( function(obj) {
			output.push(Math.floor(obj["_r"])*Math.floor(obj["_g"])*Math.floor(obj["_b"]))
		});
		return output;
	}
	exp.colors = makeColorArrays();

	exp.repRoles = {};
	for (var i = 0; i <= 50; i++) {
		repRoles[i.toString()] = null;
	}

	// Checks if all n roles exist
	exp.checkRoles = () => {
		let g = api.client.guild.get('417148353638563850');
		let roles = g.roles;
		roles.forEach(function(value, key) {
			if(value.name.startsWith('rep')) {
				//is a reputation role
				exp.repRoles[value.name.substring(3)] = value;
			}
		});
		Object.keys(exp.repRoles).forEach(function(key) {
			if(exp.repRoles[key] == null) {
				//Make the role
				g.createRole({
					name: 'rep' + key,
					color: exp.colors[key]
				});
			}
		});
	}

	return exp;
}
