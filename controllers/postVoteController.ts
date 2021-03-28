import { PostVote } from "../models/postVoteModel";
import { Request, Response } from "express";

export const addVote = async (request: Request, response: Response) => {
  try {
    const vote = await PostVote.query().findOne({
      user_id: request.body.user_id,
      post_id: request.body.post_id,
    });
    if (!vote) {
      const addNewVote = await PostVote.query().insert({ ...request.body });
      response.send(addNewVote);
    } else if (vote.vote === request.body.vote) {
      const deleteVote = await PostVote.query().deleteById(vote.id);
      response.json(deleteVote);
    } else {
      const updateVote = await PostVote.query()
        .findOne({ id: vote.id })
        .patch({ vote: request.body.vote });
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

  response.send('working')
};
