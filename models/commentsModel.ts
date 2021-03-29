const knex = require("knex");
const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = knex(connection);

Model.knex(knexConnection);

export class Comment extends Model {
  static get tableName() {
    return "comments";
  }

  // static get relationMappings() {
  //   return {
  //     comment: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: Comment,
  //       join: {
  //         from: "comments.comment_id",
  //         to: "comments.id",
  //       },
  //     },
  //   };
  // }
}
