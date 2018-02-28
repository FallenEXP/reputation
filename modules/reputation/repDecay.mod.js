exports.id = "repDecay";
exports.onLoad = function() {
	let today;
	api.onMessage(function() {
		var day = new Date().getDate(); //get todays day
	  if (today != day) {
	    today = day
	    //take 10% from all users
	  }
	});
}
