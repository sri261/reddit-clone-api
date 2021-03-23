import express from "express";
const postsController = require("../controllers/postsController");
const router = express.Router();

router.post("/create", postsController.createPost);
router.get("/get", postsController.getPosts);

// router.post("/update", subRedditsController.updateSubreddit);

module.exports = router;
