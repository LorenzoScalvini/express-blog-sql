const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lore170403",
  database: "blog_db",
});

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to database");
  } else {
    console.log("Connected to database");
  }
});

module.exports = connection;
