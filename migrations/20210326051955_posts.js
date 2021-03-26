exports.up = async function (knex) {
  await knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users");
    table.integer("subreddit_id").references("id").inTable("subreddits");
    table.string("post_title").notNullable();
    table.string("post_description");
    table.string("timestamp").notNullable();
    table.string("update_timestamp");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("posts");
};
