import { PostVote } from "../models/postVoteModel";
import { Post } from "../models/postsModel";
import { Request, Response } from "express";

export const addVote = async (request: Request, response: Response) => {
  console.log(request.body);
  try {
    const vote = await PostVote.query().findOne({
      user_id: request.body.user_id,
      post_id: request.body.post_id,
    });
    if (!vote) {
      const addNewVote = await PostVote.query().insert({ ...request.body });
      setVote(request.body.vote, request.body.post_id, "create", Post);
      response.send(addNewVote);
    } else if (vote.vote === request.body.vote) {
      const deleteVote = await PostVote.query().deleteById(vote.id);
      setVote(request.body.vote, request.body.post_id, "delete", Post);
      response.json(deleteVote);
    } else {
      const updateVote = await PostVote.query()
        .findOne({ id: vote.id })
        .patch({ vote: request.body.vote });
      setVote(request.body.vote, request.body.post_id, "update", Post);

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

export const setVote = async (
  request_vote: string,
  request_post_id: number,
  type: string,
  model: any
) => {
  if (type === "create") {
    if (request_vote === "up") {
      await model
        .query()
        .where("id", "=", request_post_id)
        .increment("upvotes", 1);
    }
    if (request_vote === "down") {
      await model
        .query()
        .where("id", "=", request_post_id)
        .increment("downvotes", 1);
    }
  }
  if (type === "delete") {
    if (request_vote === "down") {
      await model
        .query()
        .where("id", "=", request_post_id)
        .decrement("downvotes", 1);
    } else if (request_vote === "up") {
      await model
        .query()
        .where("id", "=", request_post_id)
        .decrement("upvotes", 1);
    }
  }
  if (type === "update") {
    if (request_vote === "up") {
      await model
        .query()
        .where("id", "=", request_post_id)
        .increment("upvotes", 1);
      await model
        .query()
        .where("id", "=", request_post_id)
        .decrement("downvotes", 1);
    } else if (request_vote === "down") {
      await model
        .query()
        .where("id", "=", request_post_id)
        .decrement("upvotes", 1);
      await model
        .query()
        .where("id", "=", request_post_id)
        .increment("downvotes", 1);
    }
  }
};
