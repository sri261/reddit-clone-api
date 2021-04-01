import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
  getNewPosts,
  getAllFollowedPosts,
  getPostsHot,
  getPostForSubreddit,
} from "../controllers/postsController";
const router = express.Router();

router.post("/", createPost);
router.patch("/:user_id/:post_id", updatePost);
router.delete("/:user_id/:post_id", deletePost);
router.get("/new", getNewPosts);
router.get("/hot", getPostsHot);
router.get("/:subreddit_id", getPostForSubreddit);

// router.get("/:user_id", getLatestPostsForUser);

router.get("/general-posts/:user_id", getAllFollowedPosts);

module.exports = router;
