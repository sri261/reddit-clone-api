import { Request, Response } from "express";
import { Subreddit } from "../models/subreddits";

import { SubredditSubs } from "../models/SubredditSubsModel";

module.exports.addSubredditSub = async (
  request: Request,
  response: Response
) => {
  try {
    const sub = await SubredditSubs.query().insert({
      userId: request.body.userId,
      subredditId: request.body.subredditId,
    });
    response.status(200).send(sub);
  } catch (error) {
    response.send(error);
  }
};

//gets all the subscribed subreddits for a user
module.exports.getSubsSubreddits = async (
  request: Request,
  response: Response
) => {
  try {
    const subs = await SubredditSubs.query()
      .select("*")
      .where("userId", "=", request.body.userId)
      .withGraphFetched("subreddits");
    response.send(subs.subreddits);
  } catch (error) {
    response.send(error);
  }
};
