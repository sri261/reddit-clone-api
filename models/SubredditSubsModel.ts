import { Subreddit } from "../models/subreddits";
const knex = require("knex");
const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = knex(connection);

Model.knex(knexConnection);

export class SubredditSubs extends Model {
  static get tableName() {
    return "subredditSubs";
  }

  static get relationMappings() {
    return {
      subreddits: {
        relation: Model.BelongsToOneRelation,
        modelClass: Subreddit,
        join: {
          from: "subredditSubs.subredditId",
          to: "subreddits.id",
        },
      },
    };
  }
}
