import express from "express";
const router = express.Router();
import {
  addVote,
  getTotalVoteForPost,
} from "../controllers/postVoteController";

router.post("/vote", addVote);
router.get("/vote/:post_id", getTotalVoteForPost);
// router.delete("/:user_id/:post_id", deletePost);

module.exports = router;
