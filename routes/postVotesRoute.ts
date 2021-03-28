import express from "express";
const router = express.Router();
import { addVote } from "../controllers/postVoteController";

router.post("/vote", addVote);
// router.patch("/:user_id/:post_id", updatePost);
// router.delete("/:user_id/:post_id", deletePost);

module.exports = router;
