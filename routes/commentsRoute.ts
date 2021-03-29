import express from "express";
const router = express.Router();
import {
  addNewComment,
  getCommentsForPost,
} from "../controllers/commentsController";

router.post("/comment", addNewComment);
router.get("/comment/:post_id", getCommentsForPost);

module.exports = router;
