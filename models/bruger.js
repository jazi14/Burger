// Import the ORM to create functions that will interact with the database.
var orm = require("../db/config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(cols, val, cb) {
        orm.update("burgers", cols, val, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;