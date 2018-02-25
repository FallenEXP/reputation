const tinygradient = require("tinygradient")
exports.modID = "roleHandler";
// Array of other modules that are needed to be loaded BEFORE this one.
exports.dependencies = [];
exports.load = function() {
	var tinygradient = require("tinygradient")

	var names = tinygradient({color: '#C0392B', pos: 0}, {color: '#F1C40F', pos: 0.5}, {color: '#2ECC71', pos: 1})

	var colors = names.rgb(40)

	var output = [];

	colors.forEach( function(obj) {
	  output.push(Math.floor(obj["_r"])*Math.floor(obj["_g"])*Math.floor(obj["_b"]))
	})
	return output
}
