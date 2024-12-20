const express = require("express");
const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", postRoutes);

app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
