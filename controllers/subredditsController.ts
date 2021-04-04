import { Subreddit } from "../models/subreddits";
import { Request, Response } from "express";

//get subreddit by given subreddit_id
module.exports.getSubreddits = async (request: Request, response: Response) => {
  try {
    const subreddits = await Subreddit.query().where(
      "id",
      "=",
      request.params.subreddit_id
    );
    response.send(subreddits);
  } catch (error) {
    response.send(error);
  }
};

module.exports.addSubreddit = async (request: Request, response: Response) => {
  try {
    const subRed = await Subreddit.query().insert({
      ...request.body,
      timestamp: new Date(),
    });
    response.send(subRed);
  } catch (error) {
    response.send(error);
  }
};

module.exports.searchSubreddits = async (
  request: Request,
  response: Response
) => {
  try {
    const subreddit = await Subreddit.query()
      .where("subreddit_name", "ilike", `%${request.body.search}%`)
      .limit(5);
    response.send(subreddit);
  } catch (error) {
    response.send(error);
  }
};

module.exports.updateSubreddit = async (
  request: Request,
  response: Response
) => {
  try {
    const subRed = await Subreddit.query()
      .findById(request.params.subreddit_id)
      .select("*")
      .where("user_id", "=", request.params.user_id)
      .patch({ ...request.body, updated_timestamp: new Date() });

    const subRedUpdate = await Subreddit.query()
      .findById(request.params.subreddit_id)
      .select("*")
      .where("user_id", "=", request.params.user_id);
    subRed === 1
      ? response.status(200).send(subRedUpdate)
      : response.status(403).json({ status: "update failed" });
  } catch (error) {
    response.json({ error: error });
  }
};

module.exports.deleteSubreddit = async (
  request: Request,
  response: Response
) => {
  try {
    const subRed = await Subreddit.query()
      .where("user_id", "=", request.params.user_id)
      .deleteById(request.params.subreddit_id);
    subRed === 1
      ? response.status(200).json({ status: "success" })
      : response.status(403).json({ status: "failed" });
  } catch (error) {
    response.json({ error: error });
  }
};
