const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lore170403",
  database: "blog_db",
});

db.connect((err) => {
  if (err) {
    console.error("Connessione al database fallita:", err.stack);
    return;
  }
  console.log("Connessione a MySQL database.");
});

module.exports = db;
