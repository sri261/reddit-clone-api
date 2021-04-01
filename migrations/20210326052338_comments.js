//commments
exports.up = async function (knex) {
  await knex.schema.createTable("comments", (table) => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users");
    table.integer("post_id").references("id").inTable("posts");
    table.integer("comment_id").references("id").inTable("comments");
    table.string("comment").notNullable();
    table.timestamp("timestamp").notNullable();
    table.timestamp("update_timestamp");
    table.integer("upvotes");
    table.integer("downvotes");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("comments");
};
