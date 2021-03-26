const express = require("express");
const subRedditsController = require("../controllers/subredditsController");

const router = express.Router();

router.post("/", subRedditsController.addSubreddit);
router.patch("/:user_id/:subreddit_id", subRedditsController.updateSubreddit);
router.delete("/:user_id/:subreddit_id", subRedditsController.deleteSubreddit);

router.post("/get", subRedditsController.getSubreddits);

module.exports = router;
