const db = require("../config/db");

exports.getAllPosts = (req, res) => {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(results);
    }
  });
};

exports.getPostById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM posts WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else if (results.length === 0) {
      res.status(404).send("Post not found");
    } else {
      res.json(results[0]);
    }
  });
};

exports.deletePostById = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM posts WHERE id = ?", [id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.status(204).send();
    }
  });
};
