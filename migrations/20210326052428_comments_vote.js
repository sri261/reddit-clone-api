//comments_vote
exports.up = async function (knex) {
  await knex.schema.createTable("comments_vote", (table) => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users");
    table.integer("comment_id").references("id").inTable("comments");
    table.string("vote").notNullable();
    table.integer("upvotes");
    table.integer("downvotes");
    table.unique("user_id", "comment_id");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("comments_vote");
};
