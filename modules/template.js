/*
 *  Template Module File.
 *
 *  NOTE: For the module to actually be loaded, it must be named *.mod.js
 */

// Unique Identifier, should be the filename.
exports.id = "template";
// Array of other modules that are needed to be loaded BEFORE this one.
exports.dependencies = ['other_module'];
// Function on when your module actually laods
exports.onLoad = api => {
	// Full Access to the custom API in here
	api.commands.add('test', msg=>{
		// command callback
	});

	const other_module = api.other_module; // wont crash

	return "what api.template will return";
}
