import { Request, Response } from "express";
import { SubredditVotes } from "../models/subredditVotesModel";

export const getSubredditVotes = async (
  request: Request,
  response: Response
) => {
  try {
    const subredVotes = await SubredditVotes.query();
    response.status(200).send(subredVotes);
  } catch (error) {
    response.send(error);
  }
};

export const addSubredditVote = async (
  request: Request,
  response: Response
) => {
  try {
    const subredVotes = await SubredditVotes.query().insert({
      user_id: request.body.user_id,
      subreddit_id: request.body.subreddit_id,
      vote: request.body.vote,
    });
    response.status(200).send(subredVotes);
  } catch (error) {
    response.send(error);
  }
};

export const updateSubredditVotes = async (
  request: Request,
  response: Response
) => {
  try {
    const subredVotes = await SubredditVotes.query()
      .findById(request.body.id)
      .patch({
        // user_id: request.body.user_id,
        // subreddit_id: request.body.subreddit_id,
        vote: request.body.vote,
      });
    response.status(200).json(subredVotes);
  } catch (error) {
    response.json(error);
  }
};

export const deleteSubredditVote = async (
  request: Request,
  response: Response
) => {
  try {
    const subredVotes = await SubredditVotes.query().deleteById(
      request.body.id
    );
    response.json(subredVotes);
  } catch (error) {
    response.json(error);
  }
};
