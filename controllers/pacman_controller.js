var express = require("express");
var router = express.Router();

// Import the model (pacman.js) to use its database functions.
var ghost = require("../models/pacman");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  ghost.all(function(data) {
    var hbsObject = {
      ghosts: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    // res.render(data);
  });
});

router.post("/ghosts/create", function(req, res) {
  ghost.create(
  req.body.name,
   function(result) {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

router.put("/ghosts/:id", function(req, res) {
  ghost.update(
    req.params.id,
    function(result) {
      res.sendStatus(200)
    }
  );
});



// Export routes for server.js to use.
module.exports = router;