const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// INDEX
router.get("/posts", postController.getAllPosts);

// SHOW
router.get("/posts/:id", postController.getPostById);

// DESTROY
router.delete("/posts/:id", postController.deletePostById);

module.exports = router;
