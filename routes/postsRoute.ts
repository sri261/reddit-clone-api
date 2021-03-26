import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postsController";
const postsController = require("../controllers/postsController");
const router = express.Router();

router.post("/", createPost);
router.patch("/:user_id/:post_id", updatePost);
router.delete("/:user_id/:post_id", deletePost);

module.exports = router;
