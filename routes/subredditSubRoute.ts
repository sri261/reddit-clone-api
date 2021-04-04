import express from "express";
const subRedditSubsController = require("../controllers/subredditSubsController");

const router = express.Router();

router.post("/follow", subRedditSubsController.addSubredditSub);

router.get(
  "/followed/:user_id",
  subRedditSubsController.getFollowedSubredditsForUser
);

module.exports = router;
