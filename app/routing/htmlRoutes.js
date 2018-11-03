var path = require("path");

// Export HTML routes
module.exports = function(app) {

	// Default home page GET route
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// Survey page GET route
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};