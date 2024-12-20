const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lore170403",
  database: "blog_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Errore di connessione al database:", err);
    return;
  }
  console.log("Connessione al database avvenuta con successo!");
});

module.exports = connection;
