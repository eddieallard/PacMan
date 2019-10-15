// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var ghost = {
  all: function(cb) {
    orm.all("ghosts", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.create("ghosts", ["name", "eaten"], [name, false], cb)
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("ghosts", {eaten: true}, condition, cb 
    );
  },
};



// Export the database functions for the controller (ghostsController.js).
module.exports = ghost;