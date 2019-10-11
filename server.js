// DEPENDANCIES BELOW THIS LINE
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
var path = require("path");

// BODY PARSER FOR EXPRESS BELOW THIS LINE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("app/public"));

// SERVER IS LISTENING FOR REQUEST WITH FUNCTION BELOW THIS LINE
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});