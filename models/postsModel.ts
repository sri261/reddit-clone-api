const knex = require("knex");
const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = knex(connection);

Model.knex(knexConnection);

export class Post extends Model {
  static get tableName() {
    return "posts";
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
