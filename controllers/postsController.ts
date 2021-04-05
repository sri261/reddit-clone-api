import { Post } from "../models/postsModel";
import { Request, Response } from "express";
const { raw } = require("objection");
const { knex } = require("knex");

export const getNewPosts = async (request: Request, response: Response) => {
  try {
    const posts = await Post.query()
      .orderBy("timestamp", "desc")
      .withGraphFetched("subreddit")
      .withGraphFetched("user");

    response.status(200).send(posts);
  } catch (error) {
    response.status(400).send(error);
  }
};

export const getPostsHot = async (request: Request, response: Response) => {
  try {
    const posts = await Post.query()
      .select(raw(" * ,(upvotes+downvotes+comments_count)").as("hot"))
      .orderBy("hot", "desc")
      .withGraphFetched("subreddit")
      .withGraphFetched("user");
    console.log(posts);
    response.send(posts);
  } catch (error) {
    response.send(error);
  }
};

//best posts
export const getAllFollowedPosts = async (
  request: Request,
  response: Response
) => {
  try {
    const posts = await Post.query()
      .where("user_id", "=", request.params.user_id)
      .withGraphFetched("subreddit")
      .withGraphFetched("user");
    response.status(200).send(posts);
  } catch (error) {
    response.status(400).send(error);
  }
};

export const createPost = async (request: Request, response: Response) => {
  try {
    const post = await Post.query()
      .select("*")
      .insert({
        ...request.body,
        timestamp: new Date(),
      });
    response.send(post);
  } catch (error) {
    console.log(error);
    response.send(error);
  }
};

export const getPostForSubreddit = async (
  request: Request,
  response: Response
) => {
  try {
    const posts = await Post.query()
      .where("subreddit_id", "=", request.params.subreddit_id)

      .withGraphFetched("subreddit")
      .withGraphFetched("user");
    response.send(posts);
  } catch (error) {
    response.send(error);
  }
};

export const updatePost = async (request: Request, response: Response) => {
  try {
    const post = await Post.query()
      .findById(request.params.post_id)
      .select("*")
      .where("user_id", "=", request.params.user_id)
      .patch({
        ...request.body,
      });

    console.log(post);
    post === 1
      ? response.status(200).json({ status: "success" })
      : response.status(403).json({ status: "failed" });
  } catch (error) {
    response.json(error);
  }
};

export const deletePost = async (request: Request, response: Response) => {
  try {
    const post = await Post.query()
      .where("user_id", "=", request.params.user_id)
      .deleteById(request.params.post_id);
    post === 1
      ? response.status(200).json({ status: "success" })
      : response.status(403).json({ status: "failed" });
  } catch (error) {
    response.json(error);
  }
};
