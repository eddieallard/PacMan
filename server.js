// DEPENDANCIES BELOW THIS LINE
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
var path = require("path");
var routes = require('./controllers/pacman_controller');

// SET HANDLEBARS
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

// BODY PARSER FOR EXPRESS BELOW THIS LINE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("app/public"));
app.use(routes);

// SERVER IS LISTENING FOR REQUEST WITH FUNCTION BELOW THIS LINE
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});