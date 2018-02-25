const tinygradient = require("tinygradient")
exports.modID = "roleHandler";
// Array of other modules that are needed to be loaded BEFORE this one.
exports.dependencies = [];
exports.load = function() {
	var tinygradient = require("tinygradient")

	var names = tinygradient({color: '#'+api.config.colors.lotsOfNegRep, pos: 0},
	{color: '#'+api.config.colors.noRep, pos: 0.5},
	{color: '#'+api.config.colors.lotsOfRep, pos: 1})

	var colors = names.rgb(api.config.numOfColorRoles)

	var output = [];

	colors.forEach( function(obj) {
	  output.push(Math.floor(obj["_r"])*Math.floor(obj["_g"])*Math.floor(obj["_b"]))
	})
	
	return {
		output: return JSON.stringify(output);
	}
}
