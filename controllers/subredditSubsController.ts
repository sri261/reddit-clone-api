import { Request, Response } from "express";
import { Subreddit } from "../models/subreddits";

import { SubredditSubs } from "../models/SubredditSubsModel";

module.exports.addSubredditSub = async (
  request: Request,
  response: Response
) => {
  try {
    const sub = await SubredditSubs.query().insert({
      user_id: request.body.user_id,
      subreddit_id: request.body.subreddit_id,
    });
    response.status(200).send(sub);
  } catch (error) {
    response.send(error);
  }
};

module.exports.getSubsSubreddits = async (
  request: Request,
  response: Response
) => {
  try {
    const subs = await SubredditSubs.query()
      .select("*")
      .where("user_id", "=", request.body.user_id)
      .withGraphFetched("subreddits");
    response.send(subs);
  } catch (error) {
    response.send(error);
  }
};
