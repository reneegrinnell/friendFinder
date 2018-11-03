// DEPENDENCIES
var express = require("express");

//instructions said to use this too...?
var path = require("path");

// EXPRESS SERVER CONFIGURATION
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("Wizard Friend Finder is listening on PORT: " + PORT);
});
