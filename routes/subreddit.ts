const express = require("express");
const subRedditsController = require("../controllers/subredditsController");

const router = express.Router();

router.post("/submit", subRedditsController.addSubreddit);
router.post("/update", subRedditsController.updateSubreddit);
router.post("/get", subRedditsController.getSubreddits);
// router.post("/test", subRedditsController.getSubredditsForUser);

module.exports = router;
