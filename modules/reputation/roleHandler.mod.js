const tinygradient = require("tinygradient")
exports.id = "roleHandler";
// Array of other modules that are needed to be loaded BEFORE this one.
exports.dependencies = [];
exports.onLoad = function() {
	let exp = {};

	//TODO: not use all of these functions

	let makeColorArrays = () => {
		let names = tinygradient(
			{color: '#'+api.config.colors.lotsOfNegRep, pos: 0},
			{color: '#'+api.config.colors.noRep, pos: 0.5},
			{color: '#'+api.config.colors.lotsOfRep, pos: 1});
		let c = names.rgb(api.config.numOfColorRoles);
		let output = [];

		c.forEach( function(obj) {
			output.push([Math.floor(obj["_r"]),Math.floor(obj["_g"]),Math.floor(obj["_b"])])
		});
		return output;
	}
	let colors = makeColorArrays();

	exp.repRoles = {};
	for (var i = 0; i < api.config.numOfColorRoles; i++) {
		exp.repRoles[i.toString()] = null;
	}
	// Checks if all n roles exist
	let checkRoles = () => {
		let g = api.client.guilds.get('417148353638563850');
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
					color: exp.colors[parseInt(key)]
				}).then(function(r) {
					exp.repRoles[key] = r;
				});
			}
		});
	}

	checkRoles();

	return exp;
}
