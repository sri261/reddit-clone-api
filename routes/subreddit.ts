const express = require("express");
const subRedditsController = require("../controllers/subreddits");

const router = express.Router();

router.post("/submit", subRedditsController.addSubreddit);
router.post("/update", subRedditsController.updateSubreddit);

module.exports = router;
