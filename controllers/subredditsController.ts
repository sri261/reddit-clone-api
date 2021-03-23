import { ModuleKind } from "typescript";
import { Subreddit } from "../models/subreddits";

module.exports.addSubreddit = async (request: any, response: any) => {
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

module.exports.updateSubreddit = async (request: any, response: any) => {
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

module.exports.deleteSubreddit = async (request: any, response: any) => {
  try {
    const subRed = await Subreddit.query().deleteById(request.body.id);
    response.json({ subRed: subRed });
  } catch (error) {
    response.json({ error: error });
  }
};
