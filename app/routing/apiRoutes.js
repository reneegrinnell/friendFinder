// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also 
// be used to handle the compatibility logic. 

var path = require("path");

// Import the list of friend entries
var friends = require("../data/friends.js");

// Export API routes
module.exports = function(app) {

	// All friend entries
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	// Add new friend
	app.post("/api/friends", function(req, res) {
		var userInput = req.body;

		var userResponses = userInput.scores;

		// Determine closest wizard friend match!
		var matchName = "";
		var matchImage = "";
		var totalDifference = 10000; // Make the initial value big for comparison

		// Check all existing wizards in friends list
		for (var i = 0; i < friends.length; i++) {

			// Find differences for every question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}

			// Record friend match at lowest difference
			if (diff < totalDifference) {
			
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({status: "OK", matchName: matchName, matchImage: matchImage});
	});
};