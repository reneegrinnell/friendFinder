// DEPENDENCIES
var express = require("express");
var path = require("path");

// EXPRESS SERVER CONFIGURATION
var app = express();
var PORT = process.env.PORT || 8080;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, "./app/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// LISTENER
app.listen(PORT, function() {
  console.log("Wizard Friend Finder is listening on PORT # " + PORT);
});
