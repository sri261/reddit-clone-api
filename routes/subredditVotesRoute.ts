import express from "express";
// const subRedditSubsController = require("../controllers/subredditSubsController");
import {
  getSubredditVotes,
  addSubredditVote,
  updateSubredditVotes,
  deleteSubredditVote,
} from "../controllers/subredditVotesController";

export const router = express.Router();

router.get("/subreddit-votes", getSubredditVotes);
router.post("/subreddit-votes", addSubredditVote);
router.patch("/subreddit-votes", updateSubredditVotes);
router.delete("/subreddit-votes", deleteSubredditVote);

module.exports = router;
