const express = require("express");
const subRedditsController = require("../controllers/subredditsController");

const router = express.Router();

router.post("/submit", subRedditsController.addSubreddit);
router.post("/update", subRedditsController.updateSubreddit);
router.post("/get", subRedditsController.getSubreddits);

module.exports = router;
