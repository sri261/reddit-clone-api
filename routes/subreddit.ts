const express = require("express");
const subRedditsController = require("../controllers/subredditsController");

const router = express.Router();

router.get("/:subreddit_id", subRedditsController.getSubreddits);
router.post("/search", subRedditsController.searchSubreddits);

router.post("/", subRedditsController.addSubreddit);
router.patch("/:user_id/:subreddit_id", subRedditsController.updateSubreddit);
router.delete("/:user_id/:subreddit_id", subRedditsController.deleteSubreddit);

module.exports = router;
