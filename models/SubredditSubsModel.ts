import { Subreddit } from "../models/subreddits";
import { Post } from "../models/postsModel";
const knex = require("knex");
const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = knex(connection);

Model.knex(knexConnection);

export class SubredditFollower extends Model {
  static get tableName() {
    return "subreddit_followers";
  }

  static get relationMappings() {
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: "subreddit_followers.subreddit_id",
          to: "posts.subreddit_id",
        },
      },
    };
  }
}
