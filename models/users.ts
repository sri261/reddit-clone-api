import { SubredditFollower } from "../models/SubredditSubsModel";
const knex = require("knex");
const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = knex(connection);

Model.knex(knexConnection);

export class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      followed_subreddits: {
        relation: Model.HasManyRelation,
        modelClass: SubredditFollower,
        join: {
          from: "users.id",
          to: "subreddit_followers.user_id",
        },
      },
    };
  }
}
