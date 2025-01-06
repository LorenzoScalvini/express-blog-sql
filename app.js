const express = require("express");
const app = express();
const postRoutes = require("./routes/posts");
const port = 3000;

// Middleware per il parsing JSON
app.use(express.json());

// Usa le rotte dei post
app.use("/api", postRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
