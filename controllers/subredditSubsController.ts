import { Request, Response } from "express";
import { Subreddit } from "../models/subreddits";

import { SubredditFollower } from "../models/SubredditSubsModel";

module.exports.addSubredditSub = async (
  request: Request,
  response: Response
) => {
  console.log(request.body);
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

      response.status(200).json({
        followed_subreddits: await getFollowedSubreddits(request.body.user_id),
        // subreddit: {
        //   id: sub.id,
        //   user_id: sub.user_id,
        //   subreddit_id: sub.subreddit_id,
        //   following: true,
        // },
        // followed_subreddits: await getFollowedSubreddits(request.body.user_id),
      });
    } else {
      const deleteSub = await SubredditFollower.query().deleteById(checkSub.id);
      response.status(200).json(
        {
          followed_subreddits: await getFollowedSubreddits(
            request.body.user_id
          ),
        }

        //   {
        //   subreddit: {
        //     id: checkSub.id,
        //     user_id: checkSub.user_id,
        //     subreddit_id: checkSub.subreddit_id,
        //     following: false,
        //   },
        //   followed_subreddits: await getFollowedSubreddits(request.body.user_id),
        // }
      );
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
      .where("user_id", "=", request.params.user_id);
    // .orderBy("timestamp", "desc")
    // .withGraphFetched("posts");

    response.send(subs);
  } catch (error) {
    response.send(error);
  }
};

const getFollowedSubreddits = async (user_id: number) => {
  const followed_subreddits_array: number[] = [];
  const followed_subreddits = await SubredditFollower.query().where(
    "user_id",
    "=",
    user_id
  );
  followed_subreddits.map((item: any) => {
    followed_subreddits_array.push(item.subreddit_id);
  });
  return followed_subreddits_array;
};
