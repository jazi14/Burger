// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions
var orm = {
    all: function(selectAll, cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    create: function(insertOne, cols, vals, cb) {
        var queryString = "INSERT INTO burgers (burgername) VALUE (?)";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    },
    update: function(changeOne, cols, vals, cb) {
        var queryString = "UPDATE burgers SET devoured=true WHERE ID=" + vals;
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;