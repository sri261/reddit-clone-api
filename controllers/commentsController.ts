import { Request, Response } from "express";
import { Comment } from "../models/commentsModel";
import { Post } from "../models/postsModel";

export const addNewComment = async (request: Request, response: Response) => {
  try {
    const comment = await Comment.query().insert({
      ...request.body,
      timestamp: new Date(),
    });
    await Post.query()
      .findById(request.body.post_id)
      .increment("comments_count", 1);
    response.send(comment);
  } catch (error) {
    response.send(error);
  }
};

export const getCommentsForPost = async (
  request: Request,
  response: Response
) => {
  try {
    const comment = await Comment.query()
      .select("*")
      .where("post_id", "=", request.params.post_id);
    response.send(comment);
  } catch (error) {
    response.send(error);
  }
};
