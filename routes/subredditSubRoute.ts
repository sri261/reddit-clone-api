import express from "express";
const subRedditSubsController = require("../controllers/subredditSubsController");

const router = express.Router();

router.post("/add", subRedditSubsController.addSubredditSub);
router.post("/get", subRedditSubsController.getSubsSubreddits);

module.exports = router;
