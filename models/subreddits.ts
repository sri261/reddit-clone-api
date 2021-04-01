import { Post } from "../models/postsModel";
import { SubredditFollower } from "../models/SubredditSubsModel";
const knex = require("knex");
const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = knex(connection);

Model.knex(knexConnection);

export class Subreddit extends Model {
  static get tableName() {
    return "subreddits";
  }

  static get relationMappings() {
    return {
      subreddit_followers: {
        relation: Model.HasManyRelation,
        modelClass: SubredditFollower,
        join: {
          from: "subreddits.id",
          to: "subreddit_followers.subreddit_id",
        },
      },
    };
  }
}
