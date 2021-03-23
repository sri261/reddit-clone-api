import { ModuleKind } from "typescript";
import { Subreddit } from "../models/subreddits";
import { Request, Response } from "express";

module.exports.getSubreddits = async (request: Request, response: Response) => {
  try {
    const subreddits = await Subreddit.query();
    response.send(subreddits);
  } catch (error) {
    console.log(error);
    response.send(error);
  }
};

// module.exports.getSubredditsForUser = async (
//   request: Request,
//   response: Response
// ) => {
//   try {
//   } catch (error) {}
// };

module.exports.addSubreddit = async (request: Request, response: Response) => {
  try {
    const subRed = await Subreddit.query().insert({
      subreddit: request.body.subreddit,
      creatorId: request.body.creatorId,
    });
    response.send(subRed);
  } catch (error) {
    console.log(error);
    response.send(error);
  }
};

module.exports.updateSubreddit = async (
  request: Request,
  response: Response
) => {
  try {
    const subRed = await Subreddit.query()
      .findById(request.body.id)
      .patch({ subreddit: request.body.subreddit });
    response.json({ subred: subRed });
  } catch (error) {
    response.json({ error: error });
    console.log(error);
  }
};

module.exports.deleteSubreddit = async (
  request: Request,
  response: Response
) => {
  try {
    const subRed = await Subreddit.query().deleteById(request.body.id);
    response.json({ subRed: subRed });
  } catch (error) {
    response.json({ error: error });
  }
};
