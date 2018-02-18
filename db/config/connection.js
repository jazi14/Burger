// Set up MySQL connection.
var mysql = require("mysql");
// Connect to database via ClearDB MySQL
var connection = mysql.createConnection({
    port: 3306,
    host: "",
    user: "",
    password: "",
    database: ""
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;