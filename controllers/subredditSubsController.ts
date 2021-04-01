import { Request, Response } from "express";
import { Subreddit } from "../models/subreddits";

import { SubredditFollower } from "../models/SubredditSubsModel";

module.exports.addSubredditSub = async (
  request: Request,
  response: Response
) => {
  try {
    const checkSub = await SubredditFollower.query().findOne({
      user_id: request.body.user_id,
      subreddit_id: request.body.subreddit_id,
    });

    if (!checkSub) {
      const sub = await SubredditFollower.query().insert({
        user_id: request.body.user_id,
        subreddit_id: request.body.subreddit_id,
      });
      response.status(200).send(sub);
    } else {
      const deleteSub = await SubredditFollower.query().deleteById(checkSub.id);
      response.status(200).json({
        status: deleteSub,
        message: `user ${checkSub.user_id} unfollowed subreddit id ${checkSub.subreddit_id}`,
      });
    }
  } catch (error) {
    response.send(error);
  }
};

module.exports.getFollowedSubredditsForUser = async (
  request: Request,
  response: Response
) => {
  try {
    const subs = await SubredditFollower.query()
      .select("*")
      .where("user_id", "=", request.params.user_id)
      // .orderBy("timestamp", "desc")
      .withGraphFetched("posts");

    response.send(subs);
  } catch (error) {
    response.send(error);
  }
};
