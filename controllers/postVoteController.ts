import { PostVote } from "../models/postVoteModel";
import { Post } from "../models/postsModel";
import { Request, Response } from "express";

export const addVote = async (request: Request, response: Response) => {
  try {
    const vote = await PostVote.query().findOne({
      user_id: request.body.user_id,
      post_id: request.body.post_id,
    });
    if (!vote) {
      const addNewVote = await PostVote.query().insert({ ...request.body });
      setVote(request.body.vote, request.body.post_id, "create");
      response.send(addNewVote);
    } else if (vote.vote === request.body.vote) {
      const deleteVote = await PostVote.query().deleteById(vote.id);
      setVote(request.body.vote, request.body.post_id, "delete");
      response.json(deleteVote);
    } else {
      const updateVote = await PostVote.query()
        .findOne({ id: vote.id })
        .patch({ vote: request.body.vote });
      setVote(request.body.vote, request.body.post_id, "update");

      response.json(updateVote);
    }
  } catch (error) {
    response.send(error);
  }
};

export const getTotalVoteForPost = async (
  request: Request,
  response: Response
) => {
  response.send("working new");
};

const setVote = async (
  request_vote: string,
  request_post_id: number,
  type: string
) => {
  if (type === "create") {
    if (request_vote === "up") {
      await Post.query()
        .where("id", "=", request_post_id)
        .increment("upvotes", 1);
    }
    if (request_vote === "down") {
      await Post.query()
        .where("id", "=", request_post_id)
        .increment("downvotes", 1);
    }
  }
  if (type === "delete") {
    if (request_vote === "down") {
      const test = await Post.query()
        .where("id", "=", request_post_id)
        .decrement("downvotes", 1);

      console.log(test, "test");
    } else if (request_vote === "up") {
      await Post.query()
        .where("id", "=", request_post_id)
        .decrement("upvotes", 1);
    }
  }
  if (type === "update") {
    if (request_vote === "up") {
      await Post.query()
        .where("id", "=", request_post_id)
        .increment("upvotes", 1);
      await Post.query()
        .where("id", "=", request_post_id)
        .decrement("downvotes", 1);
    } else if (request_vote === "down") {
      await Post.query()
        .where("id", "=", request_post_id)
        .decrement("upvotes", 1);
      await Post.query()
        .where("id", "=", request_post_id)
        .increment("downvotes", 1);
    }
  }
};
