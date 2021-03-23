const knex = require("knex");
const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = knex(connection);

Model.knex(knexConnection);

export class SubredditSubs extends Model {
  static get tableName() {
    return "subredditSubs";
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
