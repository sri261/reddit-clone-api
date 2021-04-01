import { Subreddit } from "../models/subreddits";
import { Comment } from "../models/commentsModel";
import { User } from "./users";
const knex = require("knex");
const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = knex(connection);

Model.knex(knexConnection);

export class Post extends Model {
  static get tableName() {
    return "posts";
  }

  static get relationMappings() {
    return {
      subreddit: {
        relation: Model.BelongsToOneRelation,
        modelClass: Subreddit,
        join: {
          from: "posts.subreddit_id",
          to: "subreddits.id",
        },
      },
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: "posts.id",
          to: "comments.post_id",
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "posts.user_id",
          to: "users.id",
        },
      },
    };
  }
}
