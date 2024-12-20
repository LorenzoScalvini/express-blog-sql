const db = require("../config/db");

// INDEX - Recupera la lista di post
const getAllPosts = (req, res) => {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Errore nel recupero dei post" });
    } else {
      res.json(results);
    }
  });
};

// SHOW - Mostra un singolo post con i suoi tag
const getPostById = (req, res) => {
  const postId = req.params.id;

  const query = `
    SELECT p.*, t.name as tag 
    FROM posts p 
    LEFT JOIN post_tags pt ON p.id = pt.post_id 
    LEFT JOIN tags t ON pt.tag_id = t.id 
    WHERE p.id = ?;
  `;

  db.query(query, [postId], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Errore nel recupero del post" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Post non trovato" });
    } else {
      const post = results[0];
      post.tags = results.map((row) => row.tag).filter(Boolean);
      res.json(post);
    }
  });
};

// DESTROY - Elimina un post
const deletePostById = (req, res) => {
  const postId = req.params.id;

  db.query("DELETE FROM posts WHERE id = ?", [postId], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Errore nell'eliminazione del post" });
    } else {
      res.status(204).send(); // 204 significa "nessun contenuto"
    }
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  deletePostById,
};
