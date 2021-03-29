const knex = require("knex");
const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = knex(connection);

Model.knex(knexConnection);

export class CommentVote extends Model {
  static get tableName() {
    return "comments_vote";
  }

  // static get relationMappings() {
  //   return {
  //     idea: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: Idea,
  //       join: {
  //         from: "comments.ideas_id",
  //         to: "ideas.id",
  //       },
  //     },
  //   };
  // }
}
