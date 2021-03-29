import express from "express";
import { addCommentVote } from "../controllers/commentsVoteController";

const router = express.Router();

router.post("/vote", addCommentVote);

module.exports = router;
