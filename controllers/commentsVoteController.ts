import { Request, Response } from "express";
import { CommentVote } from "../models/commentsVoteModel";
import { Comment } from "../models/commentsModel";
import { setVote } from "../controllers/postVoteController";

export const addCommentVote = async (request: Request, response: Response) => {
  try {
    const vote = await CommentVote.query().findOne({
      user_id: request.body.user_id,
      comment_id: request.body.comment_id,
    });
    if (!vote) {
      const addNewVote = await CommentVote.query().insert({ ...request.body });
      setVote(request.body.vote, request.body.comment_id, "create", Comment);
      response.send(addNewVote);
    } else if (vote.vote === request.body.vote) {
      const deleteVote = await CommentVote.query().deleteById(vote.id);
      setVote(request.body.vote, request.body.comment_id, "delete", Comment);
      response.json(deleteVote);
    } else {
      const updateVote = await CommentVote.query()
        .findOne({ id: vote.id })
        .patch({ vote: request.body.vote });
      setVote(request.body.vote, request.body.comment_id, "update", Comment);
      response.json(updateVote);
    }
  } catch (error) {
    response.send(error);
  }
};
