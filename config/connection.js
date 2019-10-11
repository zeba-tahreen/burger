// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "bmsyhziszmhf61g1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "mhxphsorfyqdssq4",
  password: "ze8hzmcyjed3ssxc",
  database: "vzk3mttlun0wttu3"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
