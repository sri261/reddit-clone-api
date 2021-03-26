import { Post } from "../models/postsModel";
import { Request, Response } from "express";

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

export const updatePost = async (request: Request, response: Response) => {
  try {
    const post = await Post.query()
      .findById(request.params.post_id)
      .select("*")
      .where("user_id", "=", request.params.user_id)
      .patch({
        ...request.body,
      });
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
